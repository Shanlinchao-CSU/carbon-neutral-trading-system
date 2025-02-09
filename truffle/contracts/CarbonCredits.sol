// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract CarbonCredits {
    using SafeERC20 for IERC20;
    using Address for address;

    IERC20 public carbonCoin; // 碳币代币合约地址 
    address private admin; // 管理员地址
    address private auditor; // 审核员地址
    address private thirdParty; // 第三方监管机构地址
    struct CarbonReport {
        string reportText; // 碳报告内容
    }

    mapping(address => int256) public carbonAllowance; // 每个账户的碳排放额度
    mapping(address => CarbonReport) public carbonReports; // 每个账户的碳排放报告

    // event CarbonAllowanceIssued(address target, int256 amount);
    // event CarbonAllowanceBurned(address target, int256 amount);
    event CarbonAllowanceReset(address _target, int256 _amount);
    event CarbonTransaction(address _from, address _to, int256 _amount, uint256 _price);
    event CarbonReportSubmitted(address account,CarbonReport carbonReport);
    event ExceedRecord(address _account, int256 _amount);

    constructor(IERC20 _carbonCoin, address _admin, address _auditor, address _thirdParty) {
        carbonCoin = _carbonCoin;
        admin      = _admin;
        auditor    = _auditor;
        thirdParty = _thirdParty;
    }

    // 发行碳排放额度
    // function issueCarbonAllowance(address target, uint256 amount) public {
    //     require(msg.sender == carbonIssuer, "Only carbon issuer can issue allowance");
    //     require(carbonAllowance[target] < carbonAllowance[target] + amount, "Overflow!");
    //     carbonAllowance[target] = carbonAllowance[target] + amount;
    //     emit CarbonAllowanceIssued(target,amount);
    // }

    // 销毁指定数量的碳排放额度
    // function burnCarbonAllowance(address target, uint256 amount) public {
    //     require(msg.sender == carbonIssuer, "Only carbon issuer can burn allowance");
    //     carbonAllowance[target] = carbonAllowance[target] - amount;
    //     emit CarbonAllowanceBurned(target, amount);
    // }


    // 重置碳排放额度
    function resetAllowance(address _target, int256 _amount) public {
        require(msg.sender == admin);
        carbonAllowance[_target] = _amount;
        emit CarbonAllowanceReset(_target,_amount);
    }


    // 碳交易，msg.sender是买家
    function carbonTransaction(address _to, int256 _amount, uint256 _price) public {
        require(carbonAllowance[_to] >= _amount, "Insufficient carbon allowance"); // 卖家有足够排放额
        require(carbonCoin.balanceOf(msg.sender) >= _price, "Insufficent carbon coin"); // 买家有足够碳币
        carbonAllowance[msg.sender] = carbonAllowance[msg.sender] + _amount; // 买家排放额增加
        carbonAllowance[_to] = carbonAllowance[_to] - _amount; // 卖家排放额减少
        carbonCoin.transferFrom( msg.sender,_to, _price); // 碳币转移
        emit CarbonTransaction(msg.sender,_to,_amount,_price);
    }

    // 碳报告上链 -- 调用者为数据审核员
    function submitCarbonReport(address _target,int256 _amount, string memory _report) public{
        require(msg.sender == auditor);
        carbonReports[_target] = CarbonReport(_report);
        carbonAllowance[_target] = carbonAllowance[_target] - _amount; // 核算时减少相应的额度
        emit CarbonReportSubmitted(_target, CarbonReport(_report));
        
        if(carbonAllowance[_target] < 0){
            emit ExceedRecord(_target,carbonAllowance[_target]); // 超标记录
        }
    }

    // 查询碳排放额度
    function allowanceOf(address account) public view returns (int256){
        return carbonAllowance[account];
    }

    // 查询碳报告
    function reportOf(address account) public view returns (string memory){
        return carbonReports[account].reportText;
    }

}
