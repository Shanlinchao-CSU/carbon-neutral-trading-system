import {Web3} from 'web3'


const address = "0xA045eaB120103e7dcBA7E45c66b2c5843261f2c1"

const App = {
    web3: null,
    web3Provider: null,
    contracts: {},

    init: function () {
        return App.initWeb3()
    },
    initWeb3: async function() {
        const web3 = new Web3(Web3.givenProvider || 'http://119.23.143.76:8545');
        const accounts = await web3.eth.getAccounts();
        console.log(accounts[0]); // 打印第一个账户

        // 获取地址
        const address = await window.ethereum.request({ method: 'eth_accounts' });
        console.log(address);

        App.web3 = web3

        App.web3.eth.defaultAccount = App.web3.eth.accounts[0]
        return App.initContract()
    },
    initContract: function() {
        App.contracts.cc_Contract = new App.web3.eth.Contract(abi, address)
        console.log(App.contracts.cc_Contract.methods)
        App.getInfo()
    },
    getInfo: function() {
        App.contracts.cc_Contract.methods.balanceOf("0x96a0cfE920bF1CcD1ef1cAe4b9592C41334CaC81").call((err,res)=>{
            console.log(res)
        })
    }
}
const abi = [
    {
        "contractName": "CarbonCoin",
        "abi": [
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "allowance",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "needed",
                        "type": "uint256"
                    }
                ],
                "name": "ERC20InsufficientAllowance",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "balance",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "needed",
                        "type": "uint256"
                    }
                ],
                "name": "ERC20InsufficientBalance",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "approver",
                        "type": "address"
                    }
                ],
                "name": "ERC20InvalidApprover",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "receiver",
                        "type": "address"
                    }
                ],
                "name": "ERC20InvalidReceiver",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    }
                ],
                "name": "ERC20InvalidSender",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    }
                ],
                "name": "ERC20InvalidSpender",
                "type": "error"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function",
                "constant": true
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function",
                "constant": true
            },
            {
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "internalType": "uint8",
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "stateMutability": "view",
                "type": "function",
                "constant": true
            },
            {
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function",
                "constant": true
            },
            {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function",
                "constant": true
            },
            {
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function",
                "constant": true
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ],
        "metadata": "{\"compiler\":{\"version\":\"0.8.21+commit.d9974bed\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"allowance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"needed\",\"type\":\"uint256\"}],\"name\":\"ERC20InsufficientAllowance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"needed\",\"type\":\"uint256\"}],\"name\":\"ERC20InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC20InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC20InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC20InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"ERC20InvalidSpender\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ERC20InsufficientAllowance(address,uint256,uint256)\":[{\"details\":\"Indicates a failure with the `spender`\\u2019s `allowance`. Used in transfers.\",\"params\":{\"allowance\":\"Amount of tokens a `spender` is allowed to operate with.\",\"needed\":\"Minimum amount required to perform a transfer.\",\"spender\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC20InsufficientBalance(address,uint256,uint256)\":[{\"details\":\"Indicates an error related to the current `balance` of a `sender`. Used in transfers.\",\"params\":{\"balance\":\"Current balance for the interacting account.\",\"needed\":\"Minimum amount required to perform a transfer.\",\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC20InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC20InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC20InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC20InvalidSpender(address)\":[{\"details\":\"Indicates a failure with the `spender` to be approved. Used in approvals.\",\"params\":{\"spender\":\"Address that may be allowed to operate on tokens without being their owner.\"}}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `value`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `value`. - the caller must have allowance for ``from``'s tokens of at least `value`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/CarbonCoin.sol\":\"CarbonCoin\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"project:/contracts/CarbonCoin.sol\":{\"keccak256\":\"0x77a0aeab0a2fadc99453efe852d1facee78dbc6b919977718f7aaaec1d860e8c\",\"urls\":[\"bzz-raw://6218a9412ce954692b8bc2c777c5bd4c97cce8df6104234053bec8b0c16932e3\",\"dweb:/ipfs/QmZrR8xyFaCS2TWvTnZxCCMxkDRmVxUf4CWoAvg9y3H3Jw\"]}},\"version\":1}",
        "bytecode": "0x60806040523480156200001157600080fd5b506040518060400160405280600a81526020017f436172626f6e436f696e000000000000000000000000000000000000000000008152506040518060400160405280600281526020017f434300000000000000000000000000000000000000000000000000000000000081525081600390816200008f919062000615565b508060049081620000a1919062000615565b505050620000c93369d3c21bcecceda1000000620000cf640100000000026401000000009004565b62000833565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620001445760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016200013b919062000741565b60405180910390fd5b620001616000838362000165640100000000026401000000009004565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603620001bb578060026000828254620001ae91906200078d565b9250508190555062000291565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156200024a578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016200024193929190620007d9565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620002dc578060026000828254039250508190555062000329565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000388919062000816565b60405180910390a3505050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200041757607f821691505b6020821081036200042d576200042c620003cf565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b60008160020a8302905092915050565b6000600883026200049a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000458565b620004a6868362000458565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620004f3620004ed620004e784620004be565b620004c8565b620004be565b9050919050565b6000819050919050565b6200050f83620004d2565b620005276200051e82620004fa565b84845462000468565b825550505050565b600090565b6200053e6200052f565b6200054b81848462000504565b505050565b5b8181101562000573576200056760008262000534565b60018101905062000551565b5050565b601f821115620005c2576200058c8162000433565b620005978462000448565b81016020851015620005a7578190505b620005bf620005b68562000448565b83018262000550565b50505b505050565b60008160020a8304905092915050565b6000620005ea60001984600802620005c7565b1980831691505092915050565b6000620006058383620005d7565b9150826002028217905092915050565b620006208262000395565b67ffffffffffffffff8111156200063c576200063b620003a0565b5b620006488254620003fe565b6200065582828562000577565b600060209050601f8311600181146200068d576000841562000678578287015190505b620006848582620005f7565b865550620006f4565b601f1984166200069d8662000433565b60005b82811015620006c757848901518255600182019150602085019450602081019050620006a0565b86831015620006e75784890151620006e3601f891682620005d7565b8355505b6001600288020188555050505b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200072982620006fc565b9050919050565b6200073b816200071c565b82525050565b600060208201905062000758600083018462000730565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200079a82620004be565b9150620007a783620004be565b9250828201905080821115620007c257620007c16200075e565b5b92915050565b620007d381620004be565b82525050565b6000606082019050620007f0600083018662000730565b620007ff6020830185620007c8565b6200080e6040830184620007c8565b949350505050565b60006020820190506200082d6000830184620007c8565b92915050565b610e7280620008436000396000f3fe608060405234801561001057600080fd5b50600436106100b0576000357c010000000000000000000000000000000000000000000000000000000090048063313ce56711610083578063313ce5671461015157806370a082311461016f57806395d89b411461019f578063a9059cbb146101bd578063dd62ed3e146101ed576100b0565b806306fdde03146100b5578063095ea7b3146100d357806318160ddd1461010357806323b872dd14610121575b600080fd5b6100bd61021d565b6040516100ca9190610ac6565b60405180910390f35b6100ed60048036038101906100e89190610b81565b6102af565b6040516100fa9190610bdc565b60405180910390f35b61010b6102d2565b6040516101189190610c06565b60405180910390f35b61013b60048036038101906101369190610c21565b6102dc565b6040516101489190610bdc565b60405180910390f35b61015961030b565b6040516101669190610c90565b60405180910390f35b61018960048036038101906101849190610cab565b610314565b6040516101969190610c06565b60405180910390f35b6101a761035c565b6040516101b49190610ac6565b60405180910390f35b6101d760048036038101906101d29190610b81565b6103ee565b6040516101e49190610bdc565b60405180910390f35b61020760048036038101906102029190610cd8565b610411565b6040516102149190610c06565b60405180910390f35b60606003805461022c90610d47565b80601f016020809104026020016040519081016040528092919081815260200182805461025890610d47565b80156102a55780601f1061027a576101008083540402835291602001916102a5565b820191906000526020600020905b81548152906001019060200180831161028857829003601f168201915b5050505050905090565b6000806102ba610498565b90506102c78185856104a0565b600191505092915050565b6000600254905090565b6000806102e7610498565b90506102f48582856104b2565b6102ff858585610546565b60019150509392505050565b60006012905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461036b90610d47565b80601f016020809104026020016040519081016040528092919081815260200182805461039790610d47565b80156103e45780601f106103b9576101008083540402835291602001916103e4565b820191906000526020600020905b8154815290600101906020018083116103c757829003601f168201915b5050505050905090565b6000806103f9610498565b9050610406818585610546565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b6104ad838383600161063a565b505050565b60006104be8484610411565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146105405781811015610530578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161052793929190610d87565b60405180910390fd5b61053f8484848403600061063a565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036105b85760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016105af9190610dbe565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361062a5760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016106219190610dbe565b60405180910390fd5b610635838383610811565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036106ac5760006040517fe602df050000000000000000000000000000000000000000000000000000000081526004016106a39190610dbe565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361071e5760006040517f94280d620000000000000000000000000000000000000000000000000000000081526004016107159190610dbe565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550801561080b578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516108029190610c06565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108635780600260008282546108579190610e08565b92505081905550610936565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156108ef578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016108e693929190610d87565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361097f57806002600082825403925050819055506109cc565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610a299190610c06565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610a70578082015181840152602081019050610a55565b60008484015250505050565b6000601f19601f8301169050919050565b6000610a9882610a36565b610aa28185610a41565b9350610ab2818560208601610a52565b610abb81610a7c565b840191505092915050565b60006020820190508181036000830152610ae08184610a8d565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b1882610aed565b9050919050565b610b2881610b0d565b8114610b3357600080fd5b50565b600081359050610b4581610b1f565b92915050565b6000819050919050565b610b5e81610b4b565b8114610b6957600080fd5b50565b600081359050610b7b81610b55565b92915050565b60008060408385031215610b9857610b97610ae8565b5b6000610ba685828601610b36565b9250506020610bb785828601610b6c565b9150509250929050565b60008115159050919050565b610bd681610bc1565b82525050565b6000602082019050610bf16000830184610bcd565b92915050565b610c0081610b4b565b82525050565b6000602082019050610c1b6000830184610bf7565b92915050565b600080600060608486031215610c3a57610c39610ae8565b5b6000610c4886828701610b36565b9350506020610c5986828701610b36565b9250506040610c6a86828701610b6c565b9150509250925092565b600060ff82169050919050565b610c8a81610c74565b82525050565b6000602082019050610ca56000830184610c81565b92915050565b600060208284031215610cc157610cc0610ae8565b5b6000610ccf84828501610b36565b91505092915050565b60008060408385031215610cef57610cee610ae8565b5b6000610cfd85828601610b36565b9250506020610d0e85828601610b36565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610d5f57607f821691505b602082108103610d7257610d71610d18565b5b50919050565b610d8181610b0d565b82525050565b6000606082019050610d9c6000830186610d78565b610da96020830185610bf7565b610db66040830184610bf7565b949350505050565b6000602082019050610dd36000830184610d78565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e1382610b4b565b9150610e1e83610b4b565b9250828201905080821115610e3657610e35610dd9565b5b9291505056fea264697066735822122076c0735c82c51a786ba14cc4a05f21eb70e9dd5b2feed756de57ffd2e68da24c64736f6c63430008150033",
        "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100b0576000357c010000000000000000000000000000000000000000000000000000000090048063313ce56711610083578063313ce5671461015157806370a082311461016f57806395d89b411461019f578063a9059cbb146101bd578063dd62ed3e146101ed576100b0565b806306fdde03146100b5578063095ea7b3146100d357806318160ddd1461010357806323b872dd14610121575b600080fd5b6100bd61021d565b6040516100ca9190610ac6565b60405180910390f35b6100ed60048036038101906100e89190610b81565b6102af565b6040516100fa9190610bdc565b60405180910390f35b61010b6102d2565b6040516101189190610c06565b60405180910390f35b61013b60048036038101906101369190610c21565b6102dc565b6040516101489190610bdc565b60405180910390f35b61015961030b565b6040516101669190610c90565b60405180910390f35b61018960048036038101906101849190610cab565b610314565b6040516101969190610c06565b60405180910390f35b6101a761035c565b6040516101b49190610ac6565b60405180910390f35b6101d760048036038101906101d29190610b81565b6103ee565b6040516101e49190610bdc565b60405180910390f35b61020760048036038101906102029190610cd8565b610411565b6040516102149190610c06565b60405180910390f35b60606003805461022c90610d47565b80601f016020809104026020016040519081016040528092919081815260200182805461025890610d47565b80156102a55780601f1061027a576101008083540402835291602001916102a5565b820191906000526020600020905b81548152906001019060200180831161028857829003601f168201915b5050505050905090565b6000806102ba610498565b90506102c78185856104a0565b600191505092915050565b6000600254905090565b6000806102e7610498565b90506102f48582856104b2565b6102ff858585610546565b60019150509392505050565b60006012905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461036b90610d47565b80601f016020809104026020016040519081016040528092919081815260200182805461039790610d47565b80156103e45780601f106103b9576101008083540402835291602001916103e4565b820191906000526020600020905b8154815290600101906020018083116103c757829003601f168201915b5050505050905090565b6000806103f9610498565b9050610406818585610546565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b6104ad838383600161063a565b505050565b60006104be8484610411565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146105405781811015610530578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161052793929190610d87565b60405180910390fd5b61053f8484848403600061063a565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036105b85760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016105af9190610dbe565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361062a5760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016106219190610dbe565b60405180910390fd5b610635838383610811565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036106ac5760006040517fe602df050000000000000000000000000000000000000000000000000000000081526004016106a39190610dbe565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361071e5760006040517f94280d620000000000000000000000000000000000000000000000000000000081526004016107159190610dbe565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550801561080b578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516108029190610c06565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108635780600260008282546108579190610e08565b92505081905550610936565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156108ef578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016108e693929190610d87565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361097f57806002600082825403925050819055506109cc565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610a299190610c06565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610a70578082015181840152602081019050610a55565b60008484015250505050565b6000601f19601f8301169050919050565b6000610a9882610a36565b610aa28185610a41565b9350610ab2818560208601610a52565b610abb81610a7c565b840191505092915050565b60006020820190508181036000830152610ae08184610a8d565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b1882610aed565b9050919050565b610b2881610b0d565b8114610b3357600080fd5b50565b600081359050610b4581610b1f565b92915050565b6000819050919050565b610b5e81610b4b565b8114610b6957600080fd5b50565b600081359050610b7b81610b55565b92915050565b60008060408385031215610b9857610b97610ae8565b5b6000610ba685828601610b36565b9250506020610bb785828601610b6c565b9150509250929050565b60008115159050919050565b610bd681610bc1565b82525050565b6000602082019050610bf16000830184610bcd565b92915050565b610c0081610b4b565b82525050565b6000602082019050610c1b6000830184610bf7565b92915050565b600080600060608486031215610c3a57610c39610ae8565b5b6000610c4886828701610b36565b9350506020610c5986828701610b36565b9250506040610c6a86828701610b6c565b9150509250925092565b600060ff82169050919050565b610c8a81610c74565b82525050565b6000602082019050610ca56000830184610c81565b92915050565b600060208284031215610cc157610cc0610ae8565b5b6000610ccf84828501610b36565b91505092915050565b60008060408385031215610cef57610cee610ae8565b5b6000610cfd85828601610b36565b9250506020610d0e85828601610b36565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610d5f57607f821691505b602082108103610d7257610d71610d18565b5b50919050565b610d8181610b0d565b82525050565b6000606082019050610d9c6000830186610d78565b610da96020830185610bf7565b610db66040830184610bf7565b949350505050565b6000602082019050610dd36000830184610d78565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e1382610b4b565b9150610e1e83610b4b565b9250828201905080821115610e3657610e35610dd9565b5b9291505056fea264697066735822122076c0735c82c51a786ba14cc4a05f21eb70e9dd5b2feed756de57ffd2e68da24c64736f6c63430008150033",
        "immutableReferences": {},
        "generatedSources": [
            {
                "ast": {
                    "nativeSrc": "0:7016:13",
                    "nodeType": "YulBlock",
                    "src": "0:7016:13",
                    "statements": [
                        {
                            "body": {
                                "nativeSrc": "66:40:13",
                                "nodeType": "YulBlock",
                                "src": "66:40:13",
                                "statements": [
                                    {
                                        "nativeSrc": "77:22:13",
                                        "nodeType": "YulAssignment",
                                        "src": "77:22:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nativeSrc": "93:5:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "93:5:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mload",
                                                "nativeSrc": "87:5:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "87:5:13"
                                            },
                                            "nativeSrc": "87:12:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "87:12:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "length",
                                                "nativeSrc": "77:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "77:6:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "array_length_t_string_memory_ptr",
                            "nativeSrc": "7:99:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "49:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "49:5:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "length",
                                    "nativeSrc": "59:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "59:6:13",
                                    "type": ""
                                }
                            ],
                            "src": "7:99:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "140:152:13",
                                "nodeType": "YulBlock",
                                "src": "140:152:13",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "157:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "157:1:13",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "160:77:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "160:77:13",
                                                    "type": "",
                                                    "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nativeSrc": "150:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "150:6:13"
                                            },
                                            "nativeSrc": "150:88:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "150:88:13"
                                        },
                                        "nativeSrc": "150:88:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "150:88:13"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "254:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "254:1:13",
                                                    "type": "",
                                                    "value": "4"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "257:4:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "257:4:13",
                                                    "type": "",
                                                    "value": "0x41"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nativeSrc": "247:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "247:6:13"
                                            },
                                            "nativeSrc": "247:15:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "247:15:13"
                                        },
                                        "nativeSrc": "247:15:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "247:15:13"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "278:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "278:1:13",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "281:4:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "281:4:13",
                                                    "type": "",
                                                    "value": "0x24"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nativeSrc": "271:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "271:6:13"
                                            },
                                            "nativeSrc": "271:15:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "271:15:13"
                                        },
                                        "nativeSrc": "271:15:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "271:15:13"
                                    }
                                ]
                            },
                            "name": "panic_error_0x41",
                            "nativeSrc": "112:180:13",
                            "nodeType": "YulFunctionDefinition",
                            "src": "112:180:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "326:152:13",
                                "nodeType": "YulBlock",
                                "src": "326:152:13",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "343:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "343:1:13",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "346:77:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "346:77:13",
                                                    "type": "",
                                                    "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nativeSrc": "336:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "336:6:13"
                                            },
                                            "nativeSrc": "336:88:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "336:88:13"
                                        },
                                        "nativeSrc": "336:88:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "336:88:13"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "440:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "440:1:13",
                                                    "type": "",
                                                    "value": "4"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "443:4:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "443:4:13",
                                                    "type": "",
                                                    "value": "0x22"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nativeSrc": "433:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "433:6:13"
                                            },
                                            "nativeSrc": "433:15:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "433:15:13"
                                        },
                                        "nativeSrc": "433:15:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "433:15:13"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "464:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "464:1:13",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "467:4:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "467:4:13",
                                                    "type": "",
                                                    "value": "0x24"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nativeSrc": "457:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "457:6:13"
                                            },
                                            "nativeSrc": "457:15:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "457:15:13"
                                        },
                                        "nativeSrc": "457:15:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "457:15:13"
                                    }
                                ]
                            },
                            "name": "panic_error_0x22",
                            "nativeSrc": "298:180:13",
                            "nodeType": "YulFunctionDefinition",
                            "src": "298:180:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "535:269:13",
                                "nodeType": "YulBlock",
                                "src": "535:269:13",
                                "statements": [
                                    {
                                        "nativeSrc": "545:22:13",
                                        "nodeType": "YulAssignment",
                                        "src": "545:22:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "data",
                                                    "nativeSrc": "559:4:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "559:4:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "565:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "565:1:13",
                                                    "type": "",
                                                    "value": "2"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "div",
                                                "nativeSrc": "555:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "555:3:13"
                                            },
                                            "nativeSrc": "555:12:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "555:12:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "length",
                                                "nativeSrc": "545:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "545:6:13"
                                            }
                                        ]
                                    },
                                    {
                                        "nativeSrc": "576:38:13",
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "576:38:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "data",
                                                    "nativeSrc": "606:4:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "606:4:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "612:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "612:1:13",
                                                    "type": "",
                                                    "value": "1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "and",
                                                "nativeSrc": "602:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "602:3:13"
                                            },
                                            "nativeSrc": "602:12:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "602:12:13"
                                        },
                                        "variables": [
                                            {
                                                "name": "outOfPlaceEncoding",
                                                "nativeSrc": "580:18:13",
                                                "nodeType": "YulTypedName",
                                                "src": "580:18:13",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "body": {
                                            "nativeSrc": "653:51:13",
                                            "nodeType": "YulBlock",
                                            "src": "653:51:13",
                                            "statements": [
                                                {
                                                    "nativeSrc": "667:27:13",
                                                    "nodeType": "YulAssignment",
                                                    "src": "667:27:13",
                                                    "value": {
                                                        "arguments": [
                                                            {
                                                                "name": "length",
                                                                "nativeSrc": "681:6:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "681:6:13"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nativeSrc": "689:4:13",
                                                                "nodeType": "YulLiteral",
                                                                "src": "689:4:13",
                                                                "type": "",
                                                                "value": "0x7f"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "and",
                                                            "nativeSrc": "677:3:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "677:3:13"
                                                        },
                                                        "nativeSrc": "677:17:13",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "677:17:13"
                                                    },
                                                    "variableNames": [
                                                        {
                                                            "name": "length",
                                                            "nativeSrc": "667:6:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "667:6:13"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "name": "outOfPlaceEncoding",
                                                    "nativeSrc": "633:18:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "633:18:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "iszero",
                                                "nativeSrc": "626:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "626:6:13"
                                            },
                                            "nativeSrc": "626:26:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "626:26:13"
                                        },
                                        "nativeSrc": "623:81:13",
                                        "nodeType": "YulIf",
                                        "src": "623:81:13"
                                    },
                                    {
                                        "body": {
                                            "nativeSrc": "756:42:13",
                                            "nodeType": "YulBlock",
                                            "src": "756:42:13",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "panic_error_0x22",
                                                            "nativeSrc": "770:16:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "770:16:13"
                                                        },
                                                        "nativeSrc": "770:18:13",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "770:18:13"
                                                    },
                                                    "nativeSrc": "770:18:13",
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "770:18:13"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "name": "outOfPlaceEncoding",
                                                    "nativeSrc": "720:18:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "720:18:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "length",
                                                            "nativeSrc": "743:6:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "743:6:13"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "751:2:13",
                                                            "nodeType": "YulLiteral",
                                                            "src": "751:2:13",
                                                            "type": "",
                                                            "value": "32"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "lt",
                                                        "nativeSrc": "740:2:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "740:2:13"
                                                    },
                                                    "nativeSrc": "740:14:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "740:14:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "eq",
                                                "nativeSrc": "717:2:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "717:2:13"
                                            },
                                            "nativeSrc": "717:38:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "717:38:13"
                                        },
                                        "nativeSrc": "714:84:13",
                                        "nodeType": "YulIf",
                                        "src": "714:84:13"
                                    }
                                ]
                            },
                            "name": "extract_byte_array_length",
                            "nativeSrc": "484:320:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "data",
                                    "nativeSrc": "519:4:13",
                                    "nodeType": "YulTypedName",
                                    "src": "519:4:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "length",
                                    "nativeSrc": "528:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "528:6:13",
                                    "type": ""
                                }
                            ],
                            "src": "484:320:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "864:87:13",
                                "nodeType": "YulBlock",
                                "src": "864:87:13",
                                "statements": [
                                    {
                                        "nativeSrc": "874:11:13",
                                        "nodeType": "YulAssignment",
                                        "src": "874:11:13",
                                        "value": {
                                            "name": "ptr",
                                            "nativeSrc": "882:3:13",
                                            "nodeType": "YulIdentifier",
                                            "src": "882:3:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "data",
                                                "nativeSrc": "874:4:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "874:4:13"
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "902:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "902:1:13",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "name": "ptr",
                                                    "nativeSrc": "905:3:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "905:3:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nativeSrc": "895:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "895:6:13"
                                            },
                                            "nativeSrc": "895:14:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "895:14:13"
                                        },
                                        "nativeSrc": "895:14:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "895:14:13"
                                    },
                                    {
                                        "nativeSrc": "918:26:13",
                                        "nodeType": "YulAssignment",
                                        "src": "918:26:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "936:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "936:1:13",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "939:4:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "939:4:13",
                                                    "type": "",
                                                    "value": "0x20"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "keccak256",
                                                "nativeSrc": "926:9:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "926:9:13"
                                            },
                                            "nativeSrc": "926:18:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "926:18:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "data",
                                                "nativeSrc": "918:4:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "918:4:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "array_dataslot_t_string_storage",
                            "nativeSrc": "810:141:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "ptr",
                                    "nativeSrc": "851:3:13",
                                    "nodeType": "YulTypedName",
                                    "src": "851:3:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "data",
                                    "nativeSrc": "859:4:13",
                                    "nodeType": "YulTypedName",
                                    "src": "859:4:13",
                                    "type": ""
                                }
                            ],
                            "src": "810:141:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "1001:49:13",
                                "nodeType": "YulBlock",
                                "src": "1001:49:13",
                                "statements": [
                                    {
                                        "nativeSrc": "1011:33:13",
                                        "nodeType": "YulAssignment",
                                        "src": "1011:33:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nativeSrc": "1029:5:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1029:5:13"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "1036:2:13",
                                                            "nodeType": "YulLiteral",
                                                            "src": "1036:2:13",
                                                            "type": "",
                                                            "value": "31"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nativeSrc": "1025:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1025:3:13"
                                                    },
                                                    "nativeSrc": "1025:14:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1025:14:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "1041:2:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1041:2:13",
                                                    "type": "",
                                                    "value": "32"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "div",
                                                "nativeSrc": "1021:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1021:3:13"
                                            },
                                            "nativeSrc": "1021:23:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "1021:23:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "result",
                                                "nativeSrc": "1011:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1011:6:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "divide_by_32_ceil",
                            "nativeSrc": "957:93:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "984:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "984:5:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "result",
                                    "nativeSrc": "994:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "994:6:13",
                                    "type": ""
                                }
                            ],
                            "src": "957:93:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "1109:62:13",
                                "nodeType": "YulBlock",
                                "src": "1109:62:13",
                                "statements": [
                                    {
                                        "nativeSrc": "1119:45:13",
                                        "nodeType": "YulAssignment",
                                        "src": "1119:45:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nativeSrc": "1144:5:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1144:5:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "1155:1:13",
                                                            "nodeType": "YulLiteral",
                                                            "src": "1155:1:13",
                                                            "type": "",
                                                            "value": "2"
                                                        },
                                                        {
                                                            "name": "bits",
                                                            "nativeSrc": "1158:4:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1158:4:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "exp",
                                                        "nativeSrc": "1151:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1151:3:13"
                                                    },
                                                    "nativeSrc": "1151:12:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1151:12:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mul",
                                                "nativeSrc": "1140:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1140:3:13"
                                            },
                                            "nativeSrc": "1140:24:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "1140:24:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "newValue",
                                                "nativeSrc": "1119:8:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1119:8:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "shift_left_dynamic",
                            "nativeSrc": "1056:115:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "bits",
                                    "nativeSrc": "1084:4:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1084:4:13",
                                    "type": ""
                                },
                                {
                                    "name": "value",
                                    "nativeSrc": "1090:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1090:5:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "newValue",
                                    "nativeSrc": "1100:8:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1100:8:13",
                                    "type": ""
                                }
                            ],
                            "src": "1056:115:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "1253:317:13",
                                "nodeType": "YulBlock",
                                "src": "1253:317:13",
                                "statements": [
                                    {
                                        "nativeSrc": "1263:35:13",
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "1263:35:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "shiftBytes",
                                                    "nativeSrc": "1284:10:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1284:10:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "1296:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1296:1:13",
                                                    "type": "",
                                                    "value": "8"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mul",
                                                "nativeSrc": "1280:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1280:3:13"
                                            },
                                            "nativeSrc": "1280:18:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "1280:18:13"
                                        },
                                        "variables": [
                                            {
                                                "name": "shiftBits",
                                                "nativeSrc": "1267:9:13",
                                                "nodeType": "YulTypedName",
                                                "src": "1267:9:13",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "nativeSrc": "1307:109:13",
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "1307:109:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "shiftBits",
                                                    "nativeSrc": "1338:9:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1338:9:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "1349:66:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1349:66:13",
                                                    "type": "",
                                                    "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "shift_left_dynamic",
                                                "nativeSrc": "1319:18:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1319:18:13"
                                            },
                                            "nativeSrc": "1319:97:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "1319:97:13"
                                        },
                                        "variables": [
                                            {
                                                "name": "mask",
                                                "nativeSrc": "1311:4:13",
                                                "nodeType": "YulTypedName",
                                                "src": "1311:4:13",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "nativeSrc": "1425:51:13",
                                        "nodeType": "YulAssignment",
                                        "src": "1425:51:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "shiftBits",
                                                    "nativeSrc": "1456:9:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1456:9:13"
                                                },
                                                {
                                                    "name": "toInsert",
                                                    "nativeSrc": "1467:8:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1467:8:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "shift_left_dynamic",
                                                "nativeSrc": "1437:18:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1437:18:13"
                                            },
                                            "nativeSrc": "1437:39:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "1437:39:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "toInsert",
                                                "nativeSrc": "1425:8:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1425:8:13"
                                            }
                                        ]
                                    },
                                    {
                                        "nativeSrc": "1485:30:13",
                                        "nodeType": "YulAssignment",
                                        "src": "1485:30:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nativeSrc": "1498:5:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1498:5:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "mask",
                                                            "nativeSrc": "1509:4:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1509:4:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "not",
                                                        "nativeSrc": "1505:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1505:3:13"
                                                    },
                                                    "nativeSrc": "1505:9:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1505:9:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "and",
                                                "nativeSrc": "1494:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1494:3:13"
                                            },
                                            "nativeSrc": "1494:21:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "1494:21:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "value",
                                                "nativeSrc": "1485:5:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1485:5:13"
                                            }
                                        ]
                                    },
                                    {
                                        "nativeSrc": "1524:40:13",
                                        "nodeType": "YulAssignment",
                                        "src": "1524:40:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nativeSrc": "1537:5:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1537:5:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "toInsert",
                                                            "nativeSrc": "1548:8:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1548:8:13"
                                                        },
                                                        {
                                                            "name": "mask",
                                                            "nativeSrc": "1558:4:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1558:4:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "and",
                                                        "nativeSrc": "1544:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1544:3:13"
                                                    },
                                                    "nativeSrc": "1544:19:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1544:19:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "or",
                                                "nativeSrc": "1534:2:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1534:2:13"
                                            },
                                            "nativeSrc": "1534:30:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "1534:30:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "result",
                                                "nativeSrc": "1524:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1524:6:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "update_byte_slice_dynamic32",
                            "nativeSrc": "1177:393:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "1214:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1214:5:13",
                                    "type": ""
                                },
                                {
                                    "name": "shiftBytes",
                                    "nativeSrc": "1221:10:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1221:10:13",
                                    "type": ""
                                },
                                {
                                    "name": "toInsert",
                                    "nativeSrc": "1233:8:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1233:8:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "result",
                                    "nativeSrc": "1246:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1246:6:13",
                                    "type": ""
                                }
                            ],
                            "src": "1177:393:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "1621:32:13",
                                "nodeType": "YulBlock",
                                "src": "1621:32:13",
                                "statements": [
                                    {
                                        "nativeSrc": "1631:16:13",
                                        "nodeType": "YulAssignment",
                                        "src": "1631:16:13",
                                        "value": {
                                            "name": "value",
                                            "nativeSrc": "1642:5:13",
                                            "nodeType": "YulIdentifier",
                                            "src": "1642:5:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "cleaned",
                                                "nativeSrc": "1631:7:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1631:7:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "cleanup_t_uint256",
                            "nativeSrc": "1576:77:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "1603:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1603:5:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "cleaned",
                                    "nativeSrc": "1613:7:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1613:7:13",
                                    "type": ""
                                }
                            ],
                            "src": "1576:77:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "1691:28:13",
                                "nodeType": "YulBlock",
                                "src": "1691:28:13",
                                "statements": [
                                    {
                                        "nativeSrc": "1701:12:13",
                                        "nodeType": "YulAssignment",
                                        "src": "1701:12:13",
                                        "value": {
                                            "name": "value",
                                            "nativeSrc": "1708:5:13",
                                            "nodeType": "YulIdentifier",
                                            "src": "1708:5:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "ret",
                                                "nativeSrc": "1701:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1701:3:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "identity",
                            "nativeSrc": "1659:60:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "1677:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1677:5:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "ret",
                                    "nativeSrc": "1687:3:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1687:3:13",
                                    "type": ""
                                }
                            ],
                            "src": "1659:60:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "1785:82:13",
                                "nodeType": "YulBlock",
                                "src": "1785:82:13",
                                "statements": [
                                    {
                                        "nativeSrc": "1795:66:13",
                                        "nodeType": "YulAssignment",
                                        "src": "1795:66:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "value",
                                                                    "nativeSrc": "1853:5:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "1853:5:13"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "cleanup_t_uint256",
                                                                "nativeSrc": "1835:17:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1835:17:13"
                                                            },
                                                            "nativeSrc": "1835:24:13",
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "1835:24:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "identity",
                                                        "nativeSrc": "1826:8:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1826:8:13"
                                                    },
                                                    "nativeSrc": "1826:34:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1826:34:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "cleanup_t_uint256",
                                                "nativeSrc": "1808:17:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1808:17:13"
                                            },
                                            "nativeSrc": "1808:53:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "1808:53:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "converted",
                                                "nativeSrc": "1795:9:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1795:9:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "convert_t_uint256_to_t_uint256",
                            "nativeSrc": "1725:142:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "1765:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1765:5:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "converted",
                                    "nativeSrc": "1775:9:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1775:9:13",
                                    "type": ""
                                }
                            ],
                            "src": "1725:142:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "1920:28:13",
                                "nodeType": "YulBlock",
                                "src": "1920:28:13",
                                "statements": [
                                    {
                                        "nativeSrc": "1930:12:13",
                                        "nodeType": "YulAssignment",
                                        "src": "1930:12:13",
                                        "value": {
                                            "name": "value",
                                            "nativeSrc": "1937:5:13",
                                            "nodeType": "YulIdentifier",
                                            "src": "1937:5:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "ret",
                                                "nativeSrc": "1930:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1930:3:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "prepare_store_t_uint256",
                            "nativeSrc": "1873:75:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "1906:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1906:5:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "ret",
                                    "nativeSrc": "1916:3:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1916:3:13",
                                    "type": ""
                                }
                            ],
                            "src": "1873:75:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "2030:193:13",
                                "nodeType": "YulBlock",
                                "src": "2030:193:13",
                                "statements": [
                                    {
                                        "nativeSrc": "2040:63:13",
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "2040:63:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "value_0",
                                                    "nativeSrc": "2095:7:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2095:7:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "convert_t_uint256_to_t_uint256",
                                                "nativeSrc": "2064:30:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "2064:30:13"
                                            },
                                            "nativeSrc": "2064:39:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "2064:39:13"
                                        },
                                        "variables": [
                                            {
                                                "name": "convertedValue_0",
                                                "nativeSrc": "2044:16:13",
                                                "nodeType": "YulTypedName",
                                                "src": "2044:16:13",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "slot",
                                                    "nativeSrc": "2119:4:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2119:4:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "slot",
                                                                    "nativeSrc": "2159:4:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2159:4:13"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "sload",
                                                                "nativeSrc": "2153:5:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2153:5:13"
                                                            },
                                                            "nativeSrc": "2153:11:13",
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2153:11:13"
                                                        },
                                                        {
                                                            "name": "offset",
                                                            "nativeSrc": "2166:6:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2166:6:13"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "convertedValue_0",
                                                                    "nativeSrc": "2198:16:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2198:16:13"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "prepare_store_t_uint256",
                                                                "nativeSrc": "2174:23:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2174:23:13"
                                                            },
                                                            "nativeSrc": "2174:41:13",
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2174:41:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "update_byte_slice_dynamic32",
                                                        "nativeSrc": "2125:27:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2125:27:13"
                                                    },
                                                    "nativeSrc": "2125:91:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2125:91:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "sstore",
                                                "nativeSrc": "2112:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "2112:6:13"
                                            },
                                            "nativeSrc": "2112:105:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "2112:105:13"
                                        },
                                        "nativeSrc": "2112:105:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "2112:105:13"
                                    }
                                ]
                            },
                            "name": "update_storage_value_t_uint256_to_t_uint256",
                            "nativeSrc": "1954:269:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "slot",
                                    "nativeSrc": "2007:4:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2007:4:13",
                                    "type": ""
                                },
                                {
                                    "name": "offset",
                                    "nativeSrc": "2013:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2013:6:13",
                                    "type": ""
                                },
                                {
                                    "name": "value_0",
                                    "nativeSrc": "2021:7:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2021:7:13",
                                    "type": ""
                                }
                            ],
                            "src": "1954:269:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "2278:24:13",
                                "nodeType": "YulBlock",
                                "src": "2278:24:13",
                                "statements": [
                                    {
                                        "nativeSrc": "2288:8:13",
                                        "nodeType": "YulAssignment",
                                        "src": "2288:8:13",
                                        "value": {
                                            "kind": "number",
                                            "nativeSrc": "2295:1:13",
                                            "nodeType": "YulLiteral",
                                            "src": "2295:1:13",
                                            "type": "",
                                            "value": "0"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "ret",
                                                "nativeSrc": "2288:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "2288:3:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "zero_value_for_split_t_uint256",
                            "nativeSrc": "2229:73:13",
                            "nodeType": "YulFunctionDefinition",
                            "returnVariables": [
                                {
                                    "name": "ret",
                                    "nativeSrc": "2274:3:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2274:3:13",
                                    "type": ""
                                }
                            ],
                            "src": "2229:73:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "2361:136:13",
                                "nodeType": "YulBlock",
                                "src": "2361:136:13",
                                "statements": [
                                    {
                                        "nativeSrc": "2371:46:13",
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "2371:46:13",
                                        "value": {
                                            "arguments": [],
                                            "functionName": {
                                                "name": "zero_value_for_split_t_uint256",
                                                "nativeSrc": "2385:30:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "2385:30:13"
                                            },
                                            "nativeSrc": "2385:32:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "2385:32:13"
                                        },
                                        "variables": [
                                            {
                                                "name": "zero_0",
                                                "nativeSrc": "2375:6:13",
                                                "nodeType": "YulTypedName",
                                                "src": "2375:6:13",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "slot",
                                                    "nativeSrc": "2470:4:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2470:4:13"
                                                },
                                                {
                                                    "name": "offset",
                                                    "nativeSrc": "2476:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2476:6:13"
                                                },
                                                {
                                                    "name": "zero_0",
                                                    "nativeSrc": "2484:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2484:6:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "update_storage_value_t_uint256_to_t_uint256",
                                                "nativeSrc": "2426:43:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "2426:43:13"
                                            },
                                            "nativeSrc": "2426:65:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "2426:65:13"
                                        },
                                        "nativeSrc": "2426:65:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "2426:65:13"
                                    }
                                ]
                            },
                            "name": "storage_set_to_zero_t_uint256",
                            "nativeSrc": "2308:189:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "slot",
                                    "nativeSrc": "2347:4:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2347:4:13",
                                    "type": ""
                                },
                                {
                                    "name": "offset",
                                    "nativeSrc": "2353:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2353:6:13",
                                    "type": ""
                                }
                            ],
                            "src": "2308:189:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "2553:136:13",
                                "nodeType": "YulBlock",
                                "src": "2553:136:13",
                                "statements": [
                                    {
                                        "body": {
                                            "nativeSrc": "2620:63:13",
                                            "nodeType": "YulBlock",
                                            "src": "2620:63:13",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "name": "start",
                                                                "nativeSrc": "2664:5:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2664:5:13"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nativeSrc": "2671:1:13",
                                                                "nodeType": "YulLiteral",
                                                                "src": "2671:1:13",
                                                                "type": "",
                                                                "value": "0"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "storage_set_to_zero_t_uint256",
                                                            "nativeSrc": "2634:29:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2634:29:13"
                                                        },
                                                        "nativeSrc": "2634:39:13",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "2634:39:13"
                                                    },
                                                    "nativeSrc": "2634:39:13",
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "2634:39:13"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "name": "start",
                                                    "nativeSrc": "2573:5:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2573:5:13"
                                                },
                                                {
                                                    "name": "end",
                                                    "nativeSrc": "2580:3:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2580:3:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "lt",
                                                "nativeSrc": "2570:2:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "2570:2:13"
                                            },
                                            "nativeSrc": "2570:14:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "2570:14:13"
                                        },
                                        "nativeSrc": "2563:120:13",
                                        "nodeType": "YulForLoop",
                                        "post": {
                                            "nativeSrc": "2585:26:13",
                                            "nodeType": "YulBlock",
                                            "src": "2585:26:13",
                                            "statements": [
                                                {
                                                    "nativeSrc": "2587:22:13",
                                                    "nodeType": "YulAssignment",
                                                    "src": "2587:22:13",
                                                    "value": {
                                                        "arguments": [
                                                            {
                                                                "name": "start",
                                                                "nativeSrc": "2600:5:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2600:5:13"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nativeSrc": "2607:1:13",
                                                                "nodeType": "YulLiteral",
                                                                "src": "2607:1:13",
                                                                "type": "",
                                                                "value": "1"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "add",
                                                            "nativeSrc": "2596:3:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2596:3:13"
                                                        },
                                                        "nativeSrc": "2596:13:13",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "2596:13:13"
                                                    },
                                                    "variableNames": [
                                                        {
                                                            "name": "start",
                                                            "nativeSrc": "2587:5:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2587:5:13"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "pre": {
                                            "nativeSrc": "2567:2:13",
                                            "nodeType": "YulBlock",
                                            "src": "2567:2:13",
                                            "statements": []
                                        },
                                        "src": "2563:120:13"
                                    }
                                ]
                            },
                            "name": "clear_storage_range_t_bytes1",
                            "nativeSrc": "2503:186:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "start",
                                    "nativeSrc": "2541:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2541:5:13",
                                    "type": ""
                                },
                                {
                                    "name": "end",
                                    "nativeSrc": "2548:3:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2548:3:13",
                                    "type": ""
                                }
                            ],
                            "src": "2503:186:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "2774:464:13",
                                "nodeType": "YulBlock",
                                "src": "2774:464:13",
                                "statements": [
                                    {
                                        "body": {
                                            "nativeSrc": "2800:431:13",
                                            "nodeType": "YulBlock",
                                            "src": "2800:431:13",
                                            "statements": [
                                                {
                                                    "nativeSrc": "2814:54:13",
                                                    "nodeType": "YulVariableDeclaration",
                                                    "src": "2814:54:13",
                                                    "value": {
                                                        "arguments": [
                                                            {
                                                                "name": "array",
                                                                "nativeSrc": "2862:5:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2862:5:13"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "array_dataslot_t_string_storage",
                                                            "nativeSrc": "2830:31:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2830:31:13"
                                                        },
                                                        "nativeSrc": "2830:38:13",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "2830:38:13"
                                                    },
                                                    "variables": [
                                                        {
                                                            "name": "dataArea",
                                                            "nativeSrc": "2818:8:13",
                                                            "nodeType": "YulTypedName",
                                                            "src": "2818:8:13",
                                                            "type": ""
                                                        }
                                                    ]
                                                },
                                                {
                                                    "nativeSrc": "2881:63:13",
                                                    "nodeType": "YulVariableDeclaration",
                                                    "src": "2881:63:13",
                                                    "value": {
                                                        "arguments": [
                                                            {
                                                                "name": "dataArea",
                                                                "nativeSrc": "2904:8:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2904:8:13"
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "name": "startIndex",
                                                                        "nativeSrc": "2932:10:13",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "2932:10:13"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "divide_by_32_ceil",
                                                                    "nativeSrc": "2914:17:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2914:17:13"
                                                                },
                                                                "nativeSrc": "2914:29:13",
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "2914:29:13"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "add",
                                                            "nativeSrc": "2900:3:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2900:3:13"
                                                        },
                                                        "nativeSrc": "2900:44:13",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "2900:44:13"
                                                    },
                                                    "variables": [
                                                        {
                                                            "name": "deleteStart",
                                                            "nativeSrc": "2885:11:13",
                                                            "nodeType": "YulTypedName",
                                                            "src": "2885:11:13",
                                                            "type": ""
                                                        }
                                                    ]
                                                },
                                                {
                                                    "body": {
                                                        "nativeSrc": "3101:27:13",
                                                        "nodeType": "YulBlock",
                                                        "src": "3101:27:13",
                                                        "statements": [
                                                            {
                                                                "nativeSrc": "3103:23:13",
                                                                "nodeType": "YulAssignment",
                                                                "src": "3103:23:13",
                                                                "value": {
                                                                    "name": "dataArea",
                                                                    "nativeSrc": "3118:8:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3118:8:13"
                                                                },
                                                                "variableNames": [
                                                                    {
                                                                        "name": "deleteStart",
                                                                        "nativeSrc": "3103:11:13",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "3103:11:13"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    "condition": {
                                                        "arguments": [
                                                            {
                                                                "name": "startIndex",
                                                                "nativeSrc": "3085:10:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3085:10:13"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nativeSrc": "3097:2:13",
                                                                "nodeType": "YulLiteral",
                                                                "src": "3097:2:13",
                                                                "type": "",
                                                                "value": "32"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "lt",
                                                            "nativeSrc": "3082:2:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3082:2:13"
                                                        },
                                                        "nativeSrc": "3082:18:13",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "3082:18:13"
                                                    },
                                                    "nativeSrc": "3079:49:13",
                                                    "nodeType": "YulIf",
                                                    "src": "3079:49:13"
                                                },
                                                {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "name": "deleteStart",
                                                                "nativeSrc": "3170:11:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3170:11:13"
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "name": "dataArea",
                                                                        "nativeSrc": "3187:8:13",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "3187:8:13"
                                                                    },
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "name": "len",
                                                                                "nativeSrc": "3215:3:13",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "3215:3:13"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "divide_by_32_ceil",
                                                                            "nativeSrc": "3197:17:13",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "3197:17:13"
                                                                        },
                                                                        "nativeSrc": "3197:22:13",
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "3197:22:13"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "add",
                                                                    "nativeSrc": "3183:3:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3183:3:13"
                                                                },
                                                                "nativeSrc": "3183:37:13",
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "3183:37:13"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "clear_storage_range_t_bytes1",
                                                            "nativeSrc": "3141:28:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3141:28:13"
                                                        },
                                                        "nativeSrc": "3141:80:13",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "3141:80:13"
                                                    },
                                                    "nativeSrc": "3141:80:13",
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "3141:80:13"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "name": "len",
                                                    "nativeSrc": "2791:3:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2791:3:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "2796:2:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "2796:2:13",
                                                    "type": "",
                                                    "value": "31"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "gt",
                                                "nativeSrc": "2788:2:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "2788:2:13"
                                            },
                                            "nativeSrc": "2788:11:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "2788:11:13"
                                        },
                                        "nativeSrc": "2785:446:13",
                                        "nodeType": "YulIf",
                                        "src": "2785:446:13"
                                    }
                                ]
                            },
                            "name": "clean_up_bytearray_end_slots_t_string_storage",
                            "nativeSrc": "2695:543:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "array",
                                    "nativeSrc": "2750:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2750:5:13",
                                    "type": ""
                                },
                                {
                                    "name": "len",
                                    "nativeSrc": "2757:3:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2757:3:13",
                                    "type": ""
                                },
                                {
                                    "name": "startIndex",
                                    "nativeSrc": "2762:10:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2762:10:13",
                                    "type": ""
                                }
                            ],
                            "src": "2695:543:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "3307:62:13",
                                "nodeType": "YulBlock",
                                "src": "3307:62:13",
                                "statements": [
                                    {
                                        "nativeSrc": "3317:45:13",
                                        "nodeType": "YulAssignment",
                                        "src": "3317:45:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nativeSrc": "3342:5:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3342:5:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "3353:1:13",
                                                            "nodeType": "YulLiteral",
                                                            "src": "3353:1:13",
                                                            "type": "",
                                                            "value": "2"
                                                        },
                                                        {
                                                            "name": "bits",
                                                            "nativeSrc": "3356:4:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3356:4:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "exp",
                                                        "nativeSrc": "3349:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3349:3:13"
                                                    },
                                                    "nativeSrc": "3349:12:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3349:12:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "div",
                                                "nativeSrc": "3338:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "3338:3:13"
                                            },
                                            "nativeSrc": "3338:24:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "3338:24:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "newValue",
                                                "nativeSrc": "3317:8:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "3317:8:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "shift_right_unsigned_dynamic",
                            "nativeSrc": "3244:125:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "bits",
                                    "nativeSrc": "3282:4:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3282:4:13",
                                    "type": ""
                                },
                                {
                                    "name": "value",
                                    "nativeSrc": "3288:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3288:5:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "newValue",
                                    "nativeSrc": "3298:8:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3298:8:13",
                                    "type": ""
                                }
                            ],
                            "src": "3244:125:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "3426:118:13",
                                "nodeType": "YulBlock",
                                "src": "3426:118:13",
                                "statements": [
                                    {
                                        "nativeSrc": "3436:68:13",
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "3436:68:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "kind": "number",
                                                                    "nativeSrc": "3485:1:13",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "3485:1:13",
                                                                    "type": "",
                                                                    "value": "8"
                                                                },
                                                                {
                                                                    "name": "bytes",
                                                                    "nativeSrc": "3488:5:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3488:5:13"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mul",
                                                                "nativeSrc": "3481:3:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3481:3:13"
                                                            },
                                                            "nativeSrc": "3481:13:13",
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3481:13:13"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "kind": "number",
                                                                    "nativeSrc": "3500:1:13",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "3500:1:13",
                                                                    "type": "",
                                                                    "value": "0"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "not",
                                                                "nativeSrc": "3496:3:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3496:3:13"
                                                            },
                                                            "nativeSrc": "3496:6:13",
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3496:6:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "shift_right_unsigned_dynamic",
                                                        "nativeSrc": "3452:28:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3452:28:13"
                                                    },
                                                    "nativeSrc": "3452:51:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3452:51:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "not",
                                                "nativeSrc": "3448:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "3448:3:13"
                                            },
                                            "nativeSrc": "3448:56:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "3448:56:13"
                                        },
                                        "variables": [
                                            {
                                                "name": "mask",
                                                "nativeSrc": "3440:4:13",
                                                "nodeType": "YulTypedName",
                                                "src": "3440:4:13",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "nativeSrc": "3513:25:13",
                                        "nodeType": "YulAssignment",
                                        "src": "3513:25:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "data",
                                                    "nativeSrc": "3527:4:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3527:4:13"
                                                },
                                                {
                                                    "name": "mask",
                                                    "nativeSrc": "3533:4:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3533:4:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "and",
                                                "nativeSrc": "3523:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "3523:3:13"
                                            },
                                            "nativeSrc": "3523:15:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "3523:15:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "result",
                                                "nativeSrc": "3513:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "3513:6:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "mask_bytes_dynamic",
                            "nativeSrc": "3375:169:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "data",
                                    "nativeSrc": "3403:4:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3403:4:13",
                                    "type": ""
                                },
                                {
                                    "name": "bytes",
                                    "nativeSrc": "3409:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3409:5:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "result",
                                    "nativeSrc": "3419:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3419:6:13",
                                    "type": ""
                                }
                            ],
                            "src": "3375:169:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "3630:214:13",
                                "nodeType": "YulBlock",
                                "src": "3630:214:13",
                                "statements": [
                                    {
                                        "nativeSrc": "3763:37:13",
                                        "nodeType": "YulAssignment",
                                        "src": "3763:37:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "data",
                                                    "nativeSrc": "3790:4:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3790:4:13"
                                                },
                                                {
                                                    "name": "len",
                                                    "nativeSrc": "3796:3:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3796:3:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mask_bytes_dynamic",
                                                "nativeSrc": "3771:18:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "3771:18:13"
                                            },
                                            "nativeSrc": "3771:29:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "3771:29:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "data",
                                                "nativeSrc": "3763:4:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "3763:4:13"
                                            }
                                        ]
                                    },
                                    {
                                        "nativeSrc": "3809:29:13",
                                        "nodeType": "YulAssignment",
                                        "src": "3809:29:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "data",
                                                    "nativeSrc": "3820:4:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3820:4:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "3830:1:13",
                                                            "nodeType": "YulLiteral",
                                                            "src": "3830:1:13",
                                                            "type": "",
                                                            "value": "2"
                                                        },
                                                        {
                                                            "name": "len",
                                                            "nativeSrc": "3833:3:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3833:3:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mul",
                                                        "nativeSrc": "3826:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3826:3:13"
                                                    },
                                                    "nativeSrc": "3826:11:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3826:11:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "or",
                                                "nativeSrc": "3817:2:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "3817:2:13"
                                            },
                                            "nativeSrc": "3817:21:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "3817:21:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "used",
                                                "nativeSrc": "3809:4:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "3809:4:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "extract_used_part_and_set_length_of_short_byte_array",
                            "nativeSrc": "3549:295:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "data",
                                    "nativeSrc": "3611:4:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3611:4:13",
                                    "type": ""
                                },
                                {
                                    "name": "len",
                                    "nativeSrc": "3617:3:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3617:3:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "used",
                                    "nativeSrc": "3625:4:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3625:4:13",
                                    "type": ""
                                }
                            ],
                            "src": "3549:295:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "3941:1303:13",
                                "nodeType": "YulBlock",
                                "src": "3941:1303:13",
                                "statements": [
                                    {
                                        "nativeSrc": "3952:51:13",
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "3952:51:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "src",
                                                    "nativeSrc": "3999:3:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3999:3:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "array_length_t_string_memory_ptr",
                                                "nativeSrc": "3966:32:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "3966:32:13"
                                            },
                                            "nativeSrc": "3966:37:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "3966:37:13"
                                        },
                                        "variables": [
                                            {
                                                "name": "newLen",
                                                "nativeSrc": "3956:6:13",
                                                "nodeType": "YulTypedName",
                                                "src": "3956:6:13",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "body": {
                                            "nativeSrc": "4088:22:13",
                                            "nodeType": "YulBlock",
                                            "src": "4088:22:13",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "panic_error_0x41",
                                                            "nativeSrc": "4090:16:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4090:16:13"
                                                        },
                                                        "nativeSrc": "4090:18:13",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "4090:18:13"
                                                    },
                                                    "nativeSrc": "4090:18:13",
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "4090:18:13"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "name": "newLen",
                                                    "nativeSrc": "4060:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4060:6:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "4068:18:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4068:18:13",
                                                    "type": "",
                                                    "value": "0xffffffffffffffff"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "gt",
                                                "nativeSrc": "4057:2:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "4057:2:13"
                                            },
                                            "nativeSrc": "4057:30:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "4057:30:13"
                                        },
                                        "nativeSrc": "4054:56:13",
                                        "nodeType": "YulIf",
                                        "src": "4054:56:13"
                                    },
                                    {
                                        "nativeSrc": "4120:52:13",
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "4120:52:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "slot",
                                                            "nativeSrc": "4166:4:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4166:4:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "sload",
                                                        "nativeSrc": "4160:5:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4160:5:13"
                                                    },
                                                    "nativeSrc": "4160:11:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "4160:11:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "extract_byte_array_length",
                                                "nativeSrc": "4134:25:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "4134:25:13"
                                            },
                                            "nativeSrc": "4134:38:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "4134:38:13"
                                        },
                                        "variables": [
                                            {
                                                "name": "oldLen",
                                                "nativeSrc": "4124:6:13",
                                                "nodeType": "YulTypedName",
                                                "src": "4124:6:13",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "slot",
                                                    "nativeSrc": "4265:4:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4265:4:13"
                                                },
                                                {
                                                    "name": "oldLen",
                                                    "nativeSrc": "4271:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4271:6:13"
                                                },
                                                {
                                                    "name": "newLen",
                                                    "nativeSrc": "4279:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4279:6:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "clean_up_bytearray_end_slots_t_string_storage",
                                                "nativeSrc": "4219:45:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "4219:45:13"
                                            },
                                            "nativeSrc": "4219:67:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "4219:67:13"
                                        },
                                        "nativeSrc": "4219:67:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "4219:67:13"
                                    },
                                    {
                                        "nativeSrc": "4296:18:13",
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "4296:18:13",
                                        "value": {
                                            "kind": "number",
                                            "nativeSrc": "4313:1:13",
                                            "nodeType": "YulLiteral",
                                            "src": "4313:1:13",
                                            "type": "",
                                            "value": "0"
                                        },
                                        "variables": [
                                            {
                                                "name": "srcOffset",
                                                "nativeSrc": "4300:9:13",
                                                "nodeType": "YulTypedName",
                                                "src": "4300:9:13",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "nativeSrc": "4324:17:13",
                                        "nodeType": "YulAssignment",
                                        "src": "4324:17:13",
                                        "value": {
                                            "kind": "number",
                                            "nativeSrc": "4337:4:13",
                                            "nodeType": "YulLiteral",
                                            "src": "4337:4:13",
                                            "type": "",
                                            "value": "0x20"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "srcOffset",
                                                "nativeSrc": "4324:9:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "4324:9:13"
                                            }
                                        ]
                                    },
                                    {
                                        "cases": [
                                            {
                                                "body": {
                                                    "nativeSrc": "4388:611:13",
                                                    "nodeType": "YulBlock",
                                                    "src": "4388:611:13",
                                                    "statements": [
                                                        {
                                                            "nativeSrc": "4402:37:13",
                                                            "nodeType": "YulVariableDeclaration",
                                                            "src": "4402:37:13",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "name": "newLen",
                                                                        "nativeSrc": "4421:6:13",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "4421:6:13"
                                                                    },
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "kind": "number",
                                                                                "nativeSrc": "4433:4:13",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "4433:4:13",
                                                                                "type": "",
                                                                                "value": "0x1f"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "not",
                                                                            "nativeSrc": "4429:3:13",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "4429:3:13"
                                                                        },
                                                                        "nativeSrc": "4429:9:13",
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "4429:9:13"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "and",
                                                                    "nativeSrc": "4417:3:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "4417:3:13"
                                                                },
                                                                "nativeSrc": "4417:22:13",
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "4417:22:13"
                                                            },
                                                            "variables": [
                                                                {
                                                                    "name": "loopEnd",
                                                                    "nativeSrc": "4406:7:13",
                                                                    "nodeType": "YulTypedName",
                                                                    "src": "4406:7:13",
                                                                    "type": ""
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "nativeSrc": "4453:51:13",
                                                            "nodeType": "YulVariableDeclaration",
                                                            "src": "4453:51:13",
                                                            "value": {
                                                                "arguments": [
                                                                    {
                                                                        "name": "slot",
                                                                        "nativeSrc": "4499:4:13",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "4499:4:13"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "array_dataslot_t_string_storage",
                                                                    "nativeSrc": "4467:31:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "4467:31:13"
                                                                },
                                                                "nativeSrc": "4467:37:13",
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "4467:37:13"
                                                            },
                                                            "variables": [
                                                                {
                                                                    "name": "dstPtr",
                                                                    "nativeSrc": "4457:6:13",
                                                                    "nodeType": "YulTypedName",
                                                                    "src": "4457:6:13",
                                                                    "type": ""
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "nativeSrc": "4517:10:13",
                                                            "nodeType": "YulVariableDeclaration",
                                                            "src": "4517:10:13",
                                                            "value": {
                                                                "kind": "number",
                                                                "nativeSrc": "4526:1:13",
                                                                "nodeType": "YulLiteral",
                                                                "src": "4526:1:13",
                                                                "type": "",
                                                                "value": "0"
                                                            },
                                                            "variables": [
                                                                {
                                                                    "name": "i",
                                                                    "nativeSrc": "4521:1:13",
                                                                    "nodeType": "YulTypedName",
                                                                    "src": "4521:1:13",
                                                                    "type": ""
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "body": {
                                                                "nativeSrc": "4585:163:13",
                                                                "nodeType": "YulBlock",
                                                                "src": "4585:163:13",
                                                                "statements": [
                                                                    {
                                                                        "expression": {
                                                                            "arguments": [
                                                                                {
                                                                                    "name": "dstPtr",
                                                                                    "nativeSrc": "4610:6:13",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "4610:6:13"
                                                                                },
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "arguments": [
                                                                                                {
                                                                                                    "name": "src",
                                                                                                    "nativeSrc": "4628:3:13",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "4628:3:13"
                                                                                                },
                                                                                                {
                                                                                                    "name": "srcOffset",
                                                                                                    "nativeSrc": "4633:9:13",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "4633:9:13"
                                                                                                }
                                                                                            ],
                                                                                            "functionName": {
                                                                                                "name": "add",
                                                                                                "nativeSrc": "4624:3:13",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "4624:3:13"
                                                                                            },
                                                                                            "nativeSrc": "4624:19:13",
                                                                                            "nodeType": "YulFunctionCall",
                                                                                            "src": "4624:19:13"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "mload",
                                                                                        "nativeSrc": "4618:5:13",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4618:5:13"
                                                                                    },
                                                                                    "nativeSrc": "4618:26:13",
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4618:26:13"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "sstore",
                                                                                "nativeSrc": "4603:6:13",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "4603:6:13"
                                                                            },
                                                                            "nativeSrc": "4603:42:13",
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "4603:42:13"
                                                                        },
                                                                        "nativeSrc": "4603:42:13",
                                                                        "nodeType": "YulExpressionStatement",
                                                                        "src": "4603:42:13"
                                                                    },
                                                                    {
                                                                        "nativeSrc": "4662:24:13",
                                                                        "nodeType": "YulAssignment",
                                                                        "src": "4662:24:13",
                                                                        "value": {
                                                                            "arguments": [
                                                                                {
                                                                                    "name": "dstPtr",
                                                                                    "nativeSrc": "4676:6:13",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "4676:6:13"
                                                                                },
                                                                                {
                                                                                    "kind": "number",
                                                                                    "nativeSrc": "4684:1:13",
                                                                                    "nodeType": "YulLiteral",
                                                                                    "src": "4684:1:13",
                                                                                    "type": "",
                                                                                    "value": "1"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "add",
                                                                                "nativeSrc": "4672:3:13",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "4672:3:13"
                                                                            },
                                                                            "nativeSrc": "4672:14:13",
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "4672:14:13"
                                                                        },
                                                                        "variableNames": [
                                                                            {
                                                                                "name": "dstPtr",
                                                                                "nativeSrc": "4662:6:13",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "4662:6:13"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "nativeSrc": "4703:31:13",
                                                                        "nodeType": "YulAssignment",
                                                                        "src": "4703:31:13",
                                                                        "value": {
                                                                            "arguments": [
                                                                                {
                                                                                    "name": "srcOffset",
                                                                                    "nativeSrc": "4720:9:13",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "4720:9:13"
                                                                                },
                                                                                {
                                                                                    "kind": "number",
                                                                                    "nativeSrc": "4731:2:13",
                                                                                    "nodeType": "YulLiteral",
                                                                                    "src": "4731:2:13",
                                                                                    "type": "",
                                                                                    "value": "32"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "add",
                                                                                "nativeSrc": "4716:3:13",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "4716:3:13"
                                                                            },
                                                                            "nativeSrc": "4716:18:13",
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "4716:18:13"
                                                                        },
                                                                        "variableNames": [
                                                                            {
                                                                                "name": "srcOffset",
                                                                                "nativeSrc": "4703:9:13",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "4703:9:13"
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            "condition": {
                                                                "arguments": [
                                                                    {
                                                                        "name": "i",
                                                                        "nativeSrc": "4551:1:13",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "4551:1:13"
                                                                    },
                                                                    {
                                                                        "name": "loopEnd",
                                                                        "nativeSrc": "4554:7:13",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "4554:7:13"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "lt",
                                                                    "nativeSrc": "4548:2:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "4548:2:13"
                                                                },
                                                                "nativeSrc": "4548:14:13",
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "4548:14:13"
                                                            },
                                                            "nativeSrc": "4540:208:13",
                                                            "nodeType": "YulForLoop",
                                                            "post": {
                                                                "nativeSrc": "4563:21:13",
                                                                "nodeType": "YulBlock",
                                                                "src": "4563:21:13",
                                                                "statements": [
                                                                    {
                                                                        "nativeSrc": "4565:17:13",
                                                                        "nodeType": "YulAssignment",
                                                                        "src": "4565:17:13",
                                                                        "value": {
                                                                            "arguments": [
                                                                                {
                                                                                    "name": "i",
                                                                                    "nativeSrc": "4574:1:13",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "4574:1:13"
                                                                                },
                                                                                {
                                                                                    "kind": "number",
                                                                                    "nativeSrc": "4577:4:13",
                                                                                    "nodeType": "YulLiteral",
                                                                                    "src": "4577:4:13",
                                                                                    "type": "",
                                                                                    "value": "0x20"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "add",
                                                                                "nativeSrc": "4570:3:13",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "4570:3:13"
                                                                            },
                                                                            "nativeSrc": "4570:12:13",
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "4570:12:13"
                                                                        },
                                                                        "variableNames": [
                                                                            {
                                                                                "name": "i",
                                                                                "nativeSrc": "4565:1:13",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "4565:1:13"
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            "pre": {
                                                                "nativeSrc": "4544:3:13",
                                                                "nodeType": "YulBlock",
                                                                "src": "4544:3:13",
                                                                "statements": []
                                                            },
                                                            "src": "4540:208:13"
                                                        },
                                                        {
                                                            "body": {
                                                                "nativeSrc": "4784:156:13",
                                                                "nodeType": "YulBlock",
                                                                "src": "4784:156:13",
                                                                "statements": [
                                                                    {
                                                                        "nativeSrc": "4802:43:13",
                                                                        "nodeType": "YulVariableDeclaration",
                                                                        "src": "4802:43:13",
                                                                        "value": {
                                                                            "arguments": [
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "src",
                                                                                            "nativeSrc": "4829:3:13",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4829:3:13"
                                                                                        },
                                                                                        {
                                                                                            "name": "srcOffset",
                                                                                            "nativeSrc": "4834:9:13",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4834:9:13"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "add",
                                                                                        "nativeSrc": "4825:3:13",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4825:3:13"
                                                                                    },
                                                                                    "nativeSrc": "4825:19:13",
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4825:19:13"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "mload",
                                                                                "nativeSrc": "4819:5:13",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "4819:5:13"
                                                                            },
                                                                            "nativeSrc": "4819:26:13",
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "4819:26:13"
                                                                        },
                                                                        "variables": [
                                                                            {
                                                                                "name": "lastValue",
                                                                                "nativeSrc": "4806:9:13",
                                                                                "nodeType": "YulTypedName",
                                                                                "src": "4806:9:13",
                                                                                "type": ""
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "expression": {
                                                                            "arguments": [
                                                                                {
                                                                                    "name": "dstPtr",
                                                                                    "nativeSrc": "4869:6:13",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "4869:6:13"
                                                                                },
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "lastValue",
                                                                                            "nativeSrc": "4896:9:13",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4896:9:13"
                                                                                        },
                                                                                        {
                                                                                            "arguments": [
                                                                                                {
                                                                                                    "name": "newLen",
                                                                                                    "nativeSrc": "4911:6:13",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "4911:6:13"
                                                                                                },
                                                                                                {
                                                                                                    "kind": "number",
                                                                                                    "nativeSrc": "4919:4:13",
                                                                                                    "nodeType": "YulLiteral",
                                                                                                    "src": "4919:4:13",
                                                                                                    "type": "",
                                                                                                    "value": "0x1f"
                                                                                                }
                                                                                            ],
                                                                                            "functionName": {
                                                                                                "name": "and",
                                                                                                "nativeSrc": "4907:3:13",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "4907:3:13"
                                                                                            },
                                                                                            "nativeSrc": "4907:17:13",
                                                                                            "nodeType": "YulFunctionCall",
                                                                                            "src": "4907:17:13"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "mask_bytes_dynamic",
                                                                                        "nativeSrc": "4877:18:13",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4877:18:13"
                                                                                    },
                                                                                    "nativeSrc": "4877:48:13",
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4877:48:13"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "sstore",
                                                                                "nativeSrc": "4862:6:13",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "4862:6:13"
                                                                            },
                                                                            "nativeSrc": "4862:64:13",
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "4862:64:13"
                                                                        },
                                                                        "nativeSrc": "4862:64:13",
                                                                        "nodeType": "YulExpressionStatement",
                                                                        "src": "4862:64:13"
                                                                    }
                                                                ]
                                                            },
                                                            "condition": {
                                                                "arguments": [
                                                                    {
                                                                        "name": "loopEnd",
                                                                        "nativeSrc": "4767:7:13",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "4767:7:13"
                                                                    },
                                                                    {
                                                                        "name": "newLen",
                                                                        "nativeSrc": "4776:6:13",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "4776:6:13"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "lt",
                                                                    "nativeSrc": "4764:2:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "4764:2:13"
                                                                },
                                                                "nativeSrc": "4764:19:13",
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "4764:19:13"
                                                            },
                                                            "nativeSrc": "4761:179:13",
                                                            "nodeType": "YulIf",
                                                            "src": "4761:179:13"
                                                        },
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "name": "slot",
                                                                        "nativeSrc": "4960:4:13",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "4960:4:13"
                                                                    },
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "arguments": [
                                                                                    {
                                                                                        "name": "newLen",
                                                                                        "nativeSrc": "4974:6:13",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4974:6:13"
                                                                                    },
                                                                                    {
                                                                                        "kind": "number",
                                                                                        "nativeSrc": "4982:1:13",
                                                                                        "nodeType": "YulLiteral",
                                                                                        "src": "4982:1:13",
                                                                                        "type": "",
                                                                                        "value": "2"
                                                                                    }
                                                                                ],
                                                                                "functionName": {
                                                                                    "name": "mul",
                                                                                    "nativeSrc": "4970:3:13",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "4970:3:13"
                                                                                },
                                                                                "nativeSrc": "4970:14:13",
                                                                                "nodeType": "YulFunctionCall",
                                                                                "src": "4970:14:13"
                                                                            },
                                                                            {
                                                                                "kind": "number",
                                                                                "nativeSrc": "4986:1:13",
                                                                                "nodeType": "YulLiteral",
                                                                                "src": "4986:1:13",
                                                                                "type": "",
                                                                                "value": "1"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "add",
                                                                            "nativeSrc": "4966:3:13",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "4966:3:13"
                                                                        },
                                                                        "nativeSrc": "4966:22:13",
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "4966:22:13"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "sstore",
                                                                    "nativeSrc": "4953:6:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "4953:6:13"
                                                                },
                                                                "nativeSrc": "4953:36:13",
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "4953:36:13"
                                                            },
                                                            "nativeSrc": "4953:36:13",
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "4953:36:13"
                                                        }
                                                    ]
                                                },
                                                "nativeSrc": "4381:618:13",
                                                "nodeType": "YulCase",
                                                "src": "4381:618:13",
                                                "value": {
                                                    "kind": "number",
                                                    "nativeSrc": "4386:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4386:1:13",
                                                    "type": "",
                                                    "value": "1"
                                                }
                                            },
                                            {
                                                "body": {
                                                    "nativeSrc": "5016:222:13",
                                                    "nodeType": "YulBlock",
                                                    "src": "5016:222:13",
                                                    "statements": [
                                                        {
                                                            "nativeSrc": "5030:14:13",
                                                            "nodeType": "YulVariableDeclaration",
                                                            "src": "5030:14:13",
                                                            "value": {
                                                                "kind": "number",
                                                                "nativeSrc": "5043:1:13",
                                                                "nodeType": "YulLiteral",
                                                                "src": "5043:1:13",
                                                                "type": "",
                                                                "value": "0"
                                                            },
                                                            "variables": [
                                                                {
                                                                    "name": "value",
                                                                    "nativeSrc": "5034:5:13",
                                                                    "nodeType": "YulTypedName",
                                                                    "src": "5034:5:13",
                                                                    "type": ""
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "body": {
                                                                "nativeSrc": "5067:67:13",
                                                                "nodeType": "YulBlock",
                                                                "src": "5067:67:13",
                                                                "statements": [
                                                                    {
                                                                        "nativeSrc": "5085:35:13",
                                                                        "nodeType": "YulAssignment",
                                                                        "src": "5085:35:13",
                                                                        "value": {
                                                                            "arguments": [
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "src",
                                                                                            "nativeSrc": "5104:3:13",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "5104:3:13"
                                                                                        },
                                                                                        {
                                                                                            "name": "srcOffset",
                                                                                            "nativeSrc": "5109:9:13",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "5109:9:13"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "add",
                                                                                        "nativeSrc": "5100:3:13",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "5100:3:13"
                                                                                    },
                                                                                    "nativeSrc": "5100:19:13",
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "5100:19:13"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "mload",
                                                                                "nativeSrc": "5094:5:13",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "5094:5:13"
                                                                            },
                                                                            "nativeSrc": "5094:26:13",
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "5094:26:13"
                                                                        },
                                                                        "variableNames": [
                                                                            {
                                                                                "name": "value",
                                                                                "nativeSrc": "5085:5:13",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "5085:5:13"
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            "condition": {
                                                                "name": "newLen",
                                                                "nativeSrc": "5060:6:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "5060:6:13"
                                                            },
                                                            "nativeSrc": "5057:77:13",
                                                            "nodeType": "YulIf",
                                                            "src": "5057:77:13"
                                                        },
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "name": "slot",
                                                                        "nativeSrc": "5154:4:13",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "5154:4:13"
                                                                    },
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "name": "value",
                                                                                "nativeSrc": "5213:5:13",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "5213:5:13"
                                                                            },
                                                                            {
                                                                                "name": "newLen",
                                                                                "nativeSrc": "5220:6:13",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "5220:6:13"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "extract_used_part_and_set_length_of_short_byte_array",
                                                                            "nativeSrc": "5160:52:13",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "5160:52:13"
                                                                        },
                                                                        "nativeSrc": "5160:67:13",
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "5160:67:13"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "sstore",
                                                                    "nativeSrc": "5147:6:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "5147:6:13"
                                                                },
                                                                "nativeSrc": "5147:81:13",
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "5147:81:13"
                                                            },
                                                            "nativeSrc": "5147:81:13",
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "5147:81:13"
                                                        }
                                                    ]
                                                },
                                                "nativeSrc": "5008:230:13",
                                                "nodeType": "YulCase",
                                                "src": "5008:230:13",
                                                "value": "default"
                                            }
                                        ],
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "newLen",
                                                    "nativeSrc": "4361:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4361:6:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "4369:2:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4369:2:13",
                                                    "type": "",
                                                    "value": "31"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "gt",
                                                "nativeSrc": "4358:2:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "4358:2:13"
                                            },
                                            "nativeSrc": "4358:14:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "4358:14:13"
                                        },
                                        "nativeSrc": "4351:887:13",
                                        "nodeType": "YulSwitch",
                                        "src": "4351:887:13"
                                    }
                                ]
                            },
                            "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
                            "nativeSrc": "3849:1395:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "slot",
                                    "nativeSrc": "3930:4:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3930:4:13",
                                    "type": ""
                                },
                                {
                                    "name": "src",
                                    "nativeSrc": "3936:3:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3936:3:13",
                                    "type": ""
                                }
                            ],
                            "src": "3849:1395:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "5295:81:13",
                                "nodeType": "YulBlock",
                                "src": "5295:81:13",
                                "statements": [
                                    {
                                        "nativeSrc": "5305:65:13",
                                        "nodeType": "YulAssignment",
                                        "src": "5305:65:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nativeSrc": "5320:5:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5320:5:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "5327:42:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5327:42:13",
                                                    "type": "",
                                                    "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "and",
                                                "nativeSrc": "5316:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "5316:3:13"
                                            },
                                            "nativeSrc": "5316:54:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "5316:54:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "cleaned",
                                                "nativeSrc": "5305:7:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "5305:7:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "cleanup_t_uint160",
                            "nativeSrc": "5250:126:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "5277:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "5277:5:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "cleaned",
                                    "nativeSrc": "5287:7:13",
                                    "nodeType": "YulTypedName",
                                    "src": "5287:7:13",
                                    "type": ""
                                }
                            ],
                            "src": "5250:126:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "5427:51:13",
                                "nodeType": "YulBlock",
                                "src": "5427:51:13",
                                "statements": [
                                    {
                                        "nativeSrc": "5437:35:13",
                                        "nodeType": "YulAssignment",
                                        "src": "5437:35:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nativeSrc": "5466:5:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5466:5:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "cleanup_t_uint160",
                                                "nativeSrc": "5448:17:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "5448:17:13"
                                            },
                                            "nativeSrc": "5448:24:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "5448:24:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "cleaned",
                                                "nativeSrc": "5437:7:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "5437:7:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "cleanup_t_address",
                            "nativeSrc": "5382:96:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "5409:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "5409:5:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "cleaned",
                                    "nativeSrc": "5419:7:13",
                                    "nodeType": "YulTypedName",
                                    "src": "5419:7:13",
                                    "type": ""
                                }
                            ],
                            "src": "5382:96:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "5549:53:13",
                                "nodeType": "YulBlock",
                                "src": "5549:53:13",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "pos",
                                                    "nativeSrc": "5566:3:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5566:3:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nativeSrc": "5589:5:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "5589:5:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "cleanup_t_address",
                                                        "nativeSrc": "5571:17:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5571:17:13"
                                                    },
                                                    "nativeSrc": "5571:24:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "5571:24:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nativeSrc": "5559:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "5559:6:13"
                                            },
                                            "nativeSrc": "5559:37:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "5559:37:13"
                                        },
                                        "nativeSrc": "5559:37:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "5559:37:13"
                                    }
                                ]
                            },
                            "name": "abi_encode_t_address_to_t_address_fromStack",
                            "nativeSrc": "5484:118:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "5537:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "5537:5:13",
                                    "type": ""
                                },
                                {
                                    "name": "pos",
                                    "nativeSrc": "5544:3:13",
                                    "nodeType": "YulTypedName",
                                    "src": "5544:3:13",
                                    "type": ""
                                }
                            ],
                            "src": "5484:118:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "5706:124:13",
                                "nodeType": "YulBlock",
                                "src": "5706:124:13",
                                "statements": [
                                    {
                                        "nativeSrc": "5716:26:13",
                                        "nodeType": "YulAssignment",
                                        "src": "5716:26:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "headStart",
                                                    "nativeSrc": "5728:9:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5728:9:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "5739:2:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5739:2:13",
                                                    "type": "",
                                                    "value": "32"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nativeSrc": "5724:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "5724:3:13"
                                            },
                                            "nativeSrc": "5724:18:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "5724:18:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "tail",
                                                "nativeSrc": "5716:4:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "5716:4:13"
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "value0",
                                                    "nativeSrc": "5796:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5796:6:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "headStart",
                                                            "nativeSrc": "5809:9:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "5809:9:13"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "5820:1:13",
                                                            "nodeType": "YulLiteral",
                                                            "src": "5820:1:13",
                                                            "type": "",
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nativeSrc": "5805:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5805:3:13"
                                                    },
                                                    "nativeSrc": "5805:17:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "5805:17:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "abi_encode_t_address_to_t_address_fromStack",
                                                "nativeSrc": "5752:43:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "5752:43:13"
                                            },
                                            "nativeSrc": "5752:71:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "5752:71:13"
                                        },
                                        "nativeSrc": "5752:71:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "5752:71:13"
                                    }
                                ]
                            },
                            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                            "nativeSrc": "5608:222:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "headStart",
                                    "nativeSrc": "5678:9:13",
                                    "nodeType": "YulTypedName",
                                    "src": "5678:9:13",
                                    "type": ""
                                },
                                {
                                    "name": "value0",
                                    "nativeSrc": "5690:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "5690:6:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "tail",
                                    "nativeSrc": "5701:4:13",
                                    "nodeType": "YulTypedName",
                                    "src": "5701:4:13",
                                    "type": ""
                                }
                            ],
                            "src": "5608:222:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "5864:152:13",
                                "nodeType": "YulBlock",
                                "src": "5864:152:13",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "5881:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5881:1:13",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "5884:77:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5884:77:13",
                                                    "type": "",
                                                    "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nativeSrc": "5874:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "5874:6:13"
                                            },
                                            "nativeSrc": "5874:88:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "5874:88:13"
                                        },
                                        "nativeSrc": "5874:88:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "5874:88:13"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "5978:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5978:1:13",
                                                    "type": "",
                                                    "value": "4"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "5981:4:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5981:4:13",
                                                    "type": "",
                                                    "value": "0x11"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nativeSrc": "5971:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "5971:6:13"
                                            },
                                            "nativeSrc": "5971:15:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "5971:15:13"
                                        },
                                        "nativeSrc": "5971:15:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "5971:15:13"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "6002:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "6002:1:13",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "6005:4:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "6005:4:13",
                                                    "type": "",
                                                    "value": "0x24"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nativeSrc": "5995:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "5995:6:13"
                                            },
                                            "nativeSrc": "5995:15:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "5995:15:13"
                                        },
                                        "nativeSrc": "5995:15:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "5995:15:13"
                                    }
                                ]
                            },
                            "name": "panic_error_0x11",
                            "nativeSrc": "5836:180:13",
                            "nodeType": "YulFunctionDefinition",
                            "src": "5836:180:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "6066:147:13",
                                "nodeType": "YulBlock",
                                "src": "6066:147:13",
                                "statements": [
                                    {
                                        "nativeSrc": "6076:25:13",
                                        "nodeType": "YulAssignment",
                                        "src": "6076:25:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "x",
                                                    "nativeSrc": "6099:1:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6099:1:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "cleanup_t_uint256",
                                                "nativeSrc": "6081:17:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6081:17:13"
                                            },
                                            "nativeSrc": "6081:20:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "6081:20:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "x",
                                                "nativeSrc": "6076:1:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6076:1:13"
                                            }
                                        ]
                                    },
                                    {
                                        "nativeSrc": "6110:25:13",
                                        "nodeType": "YulAssignment",
                                        "src": "6110:25:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "y",
                                                    "nativeSrc": "6133:1:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6133:1:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "cleanup_t_uint256",
                                                "nativeSrc": "6115:17:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6115:17:13"
                                            },
                                            "nativeSrc": "6115:20:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "6115:20:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "y",
                                                "nativeSrc": "6110:1:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6110:1:13"
                                            }
                                        ]
                                    },
                                    {
                                        "nativeSrc": "6144:16:13",
                                        "nodeType": "YulAssignment",
                                        "src": "6144:16:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "x",
                                                    "nativeSrc": "6155:1:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6155:1:13"
                                                },
                                                {
                                                    "name": "y",
                                                    "nativeSrc": "6158:1:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6158:1:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nativeSrc": "6151:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6151:3:13"
                                            },
                                            "nativeSrc": "6151:9:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "6151:9:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "sum",
                                                "nativeSrc": "6144:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6144:3:13"
                                            }
                                        ]
                                    },
                                    {
                                        "body": {
                                            "nativeSrc": "6184:22:13",
                                            "nodeType": "YulBlock",
                                            "src": "6184:22:13",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "panic_error_0x11",
                                                            "nativeSrc": "6186:16:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "6186:16:13"
                                                        },
                                                        "nativeSrc": "6186:18:13",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "6186:18:13"
                                                    },
                                                    "nativeSrc": "6186:18:13",
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "6186:18:13"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "name": "x",
                                                    "nativeSrc": "6176:1:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6176:1:13"
                                                },
                                                {
                                                    "name": "sum",
                                                    "nativeSrc": "6179:3:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6179:3:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "gt",
                                                "nativeSrc": "6173:2:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6173:2:13"
                                            },
                                            "nativeSrc": "6173:10:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "6173:10:13"
                                        },
                                        "nativeSrc": "6170:36:13",
                                        "nodeType": "YulIf",
                                        "src": "6170:36:13"
                                    }
                                ]
                            },
                            "name": "checked_add_t_uint256",
                            "nativeSrc": "6022:191:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "x",
                                    "nativeSrc": "6053:1:13",
                                    "nodeType": "YulTypedName",
                                    "src": "6053:1:13",
                                    "type": ""
                                },
                                {
                                    "name": "y",
                                    "nativeSrc": "6056:1:13",
                                    "nodeType": "YulTypedName",
                                    "src": "6056:1:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "sum",
                                    "nativeSrc": "6062:3:13",
                                    "nodeType": "YulTypedName",
                                    "src": "6062:3:13",
                                    "type": ""
                                }
                            ],
                            "src": "6022:191:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "6284:53:13",
                                "nodeType": "YulBlock",
                                "src": "6284:53:13",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "pos",
                                                    "nativeSrc": "6301:3:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6301:3:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nativeSrc": "6324:5:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "6324:5:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "cleanup_t_uint256",
                                                        "nativeSrc": "6306:17:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6306:17:13"
                                                    },
                                                    "nativeSrc": "6306:24:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6306:24:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nativeSrc": "6294:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6294:6:13"
                                            },
                                            "nativeSrc": "6294:37:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "6294:37:13"
                                        },
                                        "nativeSrc": "6294:37:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "6294:37:13"
                                    }
                                ]
                            },
                            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                            "nativeSrc": "6219:118:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "6272:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "6272:5:13",
                                    "type": ""
                                },
                                {
                                    "name": "pos",
                                    "nativeSrc": "6279:3:13",
                                    "nodeType": "YulTypedName",
                                    "src": "6279:3:13",
                                    "type": ""
                                }
                            ],
                            "src": "6219:118:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "6497:288:13",
                                "nodeType": "YulBlock",
                                "src": "6497:288:13",
                                "statements": [
                                    {
                                        "nativeSrc": "6507:26:13",
                                        "nodeType": "YulAssignment",
                                        "src": "6507:26:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "headStart",
                                                    "nativeSrc": "6519:9:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6519:9:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "6530:2:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "6530:2:13",
                                                    "type": "",
                                                    "value": "96"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nativeSrc": "6515:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6515:3:13"
                                            },
                                            "nativeSrc": "6515:18:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "6515:18:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "tail",
                                                "nativeSrc": "6507:4:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6507:4:13"
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "value0",
                                                    "nativeSrc": "6587:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6587:6:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "headStart",
                                                            "nativeSrc": "6600:9:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "6600:9:13"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "6611:1:13",
                                                            "nodeType": "YulLiteral",
                                                            "src": "6611:1:13",
                                                            "type": "",
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nativeSrc": "6596:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6596:3:13"
                                                    },
                                                    "nativeSrc": "6596:17:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6596:17:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "abi_encode_t_address_to_t_address_fromStack",
                                                "nativeSrc": "6543:43:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6543:43:13"
                                            },
                                            "nativeSrc": "6543:71:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "6543:71:13"
                                        },
                                        "nativeSrc": "6543:71:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "6543:71:13"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "value1",
                                                    "nativeSrc": "6668:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6668:6:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "headStart",
                                                            "nativeSrc": "6681:9:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "6681:9:13"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "6692:2:13",
                                                            "nodeType": "YulLiteral",
                                                            "src": "6692:2:13",
                                                            "type": "",
                                                            "value": "32"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nativeSrc": "6677:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6677:3:13"
                                                    },
                                                    "nativeSrc": "6677:18:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6677:18:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                                                "nativeSrc": "6624:43:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6624:43:13"
                                            },
                                            "nativeSrc": "6624:72:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "6624:72:13"
                                        },
                                        "nativeSrc": "6624:72:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "6624:72:13"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "value2",
                                                    "nativeSrc": "6750:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6750:6:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "headStart",
                                                            "nativeSrc": "6763:9:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "6763:9:13"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "6774:2:13",
                                                            "nodeType": "YulLiteral",
                                                            "src": "6774:2:13",
                                                            "type": "",
                                                            "value": "64"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nativeSrc": "6759:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6759:3:13"
                                                    },
                                                    "nativeSrc": "6759:18:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6759:18:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                                                "nativeSrc": "6706:43:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6706:43:13"
                                            },
                                            "nativeSrc": "6706:72:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "6706:72:13"
                                        },
                                        "nativeSrc": "6706:72:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "6706:72:13"
                                    }
                                ]
                            },
                            "name": "abi_encode_tuple_t_address_t_uint256_t_uint256__to_t_address_t_uint256_t_uint256__fromStack_reversed",
                            "nativeSrc": "6343:442:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "headStart",
                                    "nativeSrc": "6453:9:13",
                                    "nodeType": "YulTypedName",
                                    "src": "6453:9:13",
                                    "type": ""
                                },
                                {
                                    "name": "value2",
                                    "nativeSrc": "6465:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "6465:6:13",
                                    "type": ""
                                },
                                {
                                    "name": "value1",
                                    "nativeSrc": "6473:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "6473:6:13",
                                    "type": ""
                                },
                                {
                                    "name": "value0",
                                    "nativeSrc": "6481:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "6481:6:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "tail",
                                    "nativeSrc": "6492:4:13",
                                    "nodeType": "YulTypedName",
                                    "src": "6492:4:13",
                                    "type": ""
                                }
                            ],
                            "src": "6343:442:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "6889:124:13",
                                "nodeType": "YulBlock",
                                "src": "6889:124:13",
                                "statements": [
                                    {
                                        "nativeSrc": "6899:26:13",
                                        "nodeType": "YulAssignment",
                                        "src": "6899:26:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "headStart",
                                                    "nativeSrc": "6911:9:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6911:9:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "6922:2:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "6922:2:13",
                                                    "type": "",
                                                    "value": "32"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nativeSrc": "6907:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6907:3:13"
                                            },
                                            "nativeSrc": "6907:18:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "6907:18:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "tail",
                                                "nativeSrc": "6899:4:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6899:4:13"
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "value0",
                                                    "nativeSrc": "6979:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6979:6:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "headStart",
                                                            "nativeSrc": "6992:9:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "6992:9:13"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "7003:1:13",
                                                            "nodeType": "YulLiteral",
                                                            "src": "7003:1:13",
                                                            "type": "",
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nativeSrc": "6988:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6988:3:13"
                                                    },
                                                    "nativeSrc": "6988:17:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6988:17:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                                                "nativeSrc": "6935:43:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6935:43:13"
                                            },
                                            "nativeSrc": "6935:71:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "6935:71:13"
                                        },
                                        "nativeSrc": "6935:71:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "6935:71:13"
                                    }
                                ]
                            },
                            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                            "nativeSrc": "6791:222:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "headStart",
                                    "nativeSrc": "6861:9:13",
                                    "nodeType": "YulTypedName",
                                    "src": "6861:9:13",
                                    "type": ""
                                },
                                {
                                    "name": "value0",
                                    "nativeSrc": "6873:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "6873:6:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "tail",
                                    "nativeSrc": "6884:4:13",
                                    "nodeType": "YulTypedName",
                                    "src": "6884:4:13",
                                    "type": ""
                                }
                            ],
                            "src": "6791:222:13"
                        }
                    ]
                },
                "contents": "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        mul(value, exp(2, bits))\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        div(value, exp(2, bits))\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        sum := add(x, y)\n\n        if gt(x, sum) { panic_error_0x11() }\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_address_t_uint256_t_uint256__to_t_address_t_uint256_t_uint256__fromStack_reversed(headStart , value2, value1, value0) -> tail {\n        tail := add(headStart, 96)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n}\n",
                "id": 13,
                "language": "Yul",
                "name": "#utility.yul"
            }
        ],
        "deployedGeneratedSources": [
            {
                "ast": {
                    "nativeSrc": "0:7360:13",
                    "nodeType": "YulBlock",
                    "src": "0:7360:13",
                    "statements": [
                        {
                            "body": {
                                "nativeSrc": "66:40:13",
                                "nodeType": "YulBlock",
                                "src": "66:40:13",
                                "statements": [
                                    {
                                        "nativeSrc": "77:22:13",
                                        "nodeType": "YulAssignment",
                                        "src": "77:22:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nativeSrc": "93:5:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "93:5:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mload",
                                                "nativeSrc": "87:5:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "87:5:13"
                                            },
                                            "nativeSrc": "87:12:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "87:12:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "length",
                                                "nativeSrc": "77:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "77:6:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "array_length_t_string_memory_ptr",
                            "nativeSrc": "7:99:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "49:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "49:5:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "length",
                                    "nativeSrc": "59:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "59:6:13",
                                    "type": ""
                                }
                            ],
                            "src": "7:99:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "208:73:13",
                                "nodeType": "YulBlock",
                                "src": "208:73:13",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "pos",
                                                    "nativeSrc": "225:3:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "225:3:13"
                                                },
                                                {
                                                    "name": "length",
                                                    "nativeSrc": "230:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "230:6:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nativeSrc": "218:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "218:6:13"
                                            },
                                            "nativeSrc": "218:19:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "218:19:13"
                                        },
                                        "nativeSrc": "218:19:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "218:19:13"
                                    },
                                    {
                                        "nativeSrc": "246:29:13",
                                        "nodeType": "YulAssignment",
                                        "src": "246:29:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "pos",
                                                    "nativeSrc": "265:3:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "265:3:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "270:4:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "270:4:13",
                                                    "type": "",
                                                    "value": "0x20"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nativeSrc": "261:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "261:3:13"
                                            },
                                            "nativeSrc": "261:14:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "261:14:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "updated_pos",
                                                "nativeSrc": "246:11:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "246:11:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nativeSrc": "112:169:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "pos",
                                    "nativeSrc": "180:3:13",
                                    "nodeType": "YulTypedName",
                                    "src": "180:3:13",
                                    "type": ""
                                },
                                {
                                    "name": "length",
                                    "nativeSrc": "185:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "185:6:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "updated_pos",
                                    "nativeSrc": "196:11:13",
                                    "nodeType": "YulTypedName",
                                    "src": "196:11:13",
                                    "type": ""
                                }
                            ],
                            "src": "112:169:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "349:184:13",
                                "nodeType": "YulBlock",
                                "src": "349:184:13",
                                "statements": [
                                    {
                                        "nativeSrc": "359:10:13",
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "359:10:13",
                                        "value": {
                                            "kind": "number",
                                            "nativeSrc": "368:1:13",
                                            "nodeType": "YulLiteral",
                                            "src": "368:1:13",
                                            "type": "",
                                            "value": "0"
                                        },
                                        "variables": [
                                            {
                                                "name": "i",
                                                "nativeSrc": "363:1:13",
                                                "nodeType": "YulTypedName",
                                                "src": "363:1:13",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "body": {
                                            "nativeSrc": "428:63:13",
                                            "nodeType": "YulBlock",
                                            "src": "428:63:13",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "name": "dst",
                                                                        "nativeSrc": "453:3:13",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "453:3:13"
                                                                    },
                                                                    {
                                                                        "name": "i",
                                                                        "nativeSrc": "458:1:13",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "458:1:13"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "add",
                                                                    "nativeSrc": "449:3:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "449:3:13"
                                                                },
                                                                "nativeSrc": "449:11:13",
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "449:11:13"
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "name": "src",
                                                                                "nativeSrc": "472:3:13",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "472:3:13"
                                                                            },
                                                                            {
                                                                                "name": "i",
                                                                                "nativeSrc": "477:1:13",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "477:1:13"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "add",
                                                                            "nativeSrc": "468:3:13",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "468:3:13"
                                                                        },
                                                                        "nativeSrc": "468:11:13",
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "468:11:13"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "mload",
                                                                    "nativeSrc": "462:5:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "462:5:13"
                                                                },
                                                                "nativeSrc": "462:18:13",
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "462:18:13"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "mstore",
                                                            "nativeSrc": "442:6:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "442:6:13"
                                                        },
                                                        "nativeSrc": "442:39:13",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "442:39:13"
                                                    },
                                                    "nativeSrc": "442:39:13",
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "442:39:13"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "name": "i",
                                                    "nativeSrc": "389:1:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "389:1:13"
                                                },
                                                {
                                                    "name": "length",
                                                    "nativeSrc": "392:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "392:6:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "lt",
                                                "nativeSrc": "386:2:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "386:2:13"
                                            },
                                            "nativeSrc": "386:13:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "386:13:13"
                                        },
                                        "nativeSrc": "378:113:13",
                                        "nodeType": "YulForLoop",
                                        "post": {
                                            "nativeSrc": "400:19:13",
                                            "nodeType": "YulBlock",
                                            "src": "400:19:13",
                                            "statements": [
                                                {
                                                    "nativeSrc": "402:15:13",
                                                    "nodeType": "YulAssignment",
                                                    "src": "402:15:13",
                                                    "value": {
                                                        "arguments": [
                                                            {
                                                                "name": "i",
                                                                "nativeSrc": "411:1:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "411:1:13"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nativeSrc": "414:2:13",
                                                                "nodeType": "YulLiteral",
                                                                "src": "414:2:13",
                                                                "type": "",
                                                                "value": "32"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "add",
                                                            "nativeSrc": "407:3:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "407:3:13"
                                                        },
                                                        "nativeSrc": "407:10:13",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "407:10:13"
                                                    },
                                                    "variableNames": [
                                                        {
                                                            "name": "i",
                                                            "nativeSrc": "402:1:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "402:1:13"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "pre": {
                                            "nativeSrc": "382:3:13",
                                            "nodeType": "YulBlock",
                                            "src": "382:3:13",
                                            "statements": []
                                        },
                                        "src": "378:113:13"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "dst",
                                                            "nativeSrc": "511:3:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "511:3:13"
                                                        },
                                                        {
                                                            "name": "length",
                                                            "nativeSrc": "516:6:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "516:6:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nativeSrc": "507:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "507:3:13"
                                                    },
                                                    "nativeSrc": "507:16:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "507:16:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "525:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "525:1:13",
                                                    "type": "",
                                                    "value": "0"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nativeSrc": "500:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "500:6:13"
                                            },
                                            "nativeSrc": "500:27:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "500:27:13"
                                        },
                                        "nativeSrc": "500:27:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "500:27:13"
                                    }
                                ]
                            },
                            "name": "copy_memory_to_memory_with_cleanup",
                            "nativeSrc": "287:246:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "src",
                                    "nativeSrc": "331:3:13",
                                    "nodeType": "YulTypedName",
                                    "src": "331:3:13",
                                    "type": ""
                                },
                                {
                                    "name": "dst",
                                    "nativeSrc": "336:3:13",
                                    "nodeType": "YulTypedName",
                                    "src": "336:3:13",
                                    "type": ""
                                },
                                {
                                    "name": "length",
                                    "nativeSrc": "341:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "341:6:13",
                                    "type": ""
                                }
                            ],
                            "src": "287:246:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "587:54:13",
                                "nodeType": "YulBlock",
                                "src": "587:54:13",
                                "statements": [
                                    {
                                        "nativeSrc": "597:38:13",
                                        "nodeType": "YulAssignment",
                                        "src": "597:38:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nativeSrc": "615:5:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "615:5:13"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "622:2:13",
                                                            "nodeType": "YulLiteral",
                                                            "src": "622:2:13",
                                                            "type": "",
                                                            "value": "31"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nativeSrc": "611:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "611:3:13"
                                                    },
                                                    "nativeSrc": "611:14:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "611:14:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "631:2:13",
                                                            "nodeType": "YulLiteral",
                                                            "src": "631:2:13",
                                                            "type": "",
                                                            "value": "31"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "not",
                                                        "nativeSrc": "627:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "627:3:13"
                                                    },
                                                    "nativeSrc": "627:7:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "627:7:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "and",
                                                "nativeSrc": "607:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "607:3:13"
                                            },
                                            "nativeSrc": "607:28:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "607:28:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "result",
                                                "nativeSrc": "597:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "597:6:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "round_up_to_mul_of_32",
                            "nativeSrc": "539:102:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "570:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "570:5:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "result",
                                    "nativeSrc": "580:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "580:6:13",
                                    "type": ""
                                }
                            ],
                            "src": "539:102:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "739:285:13",
                                "nodeType": "YulBlock",
                                "src": "739:285:13",
                                "statements": [
                                    {
                                        "nativeSrc": "749:53:13",
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "749:53:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nativeSrc": "796:5:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "796:5:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "array_length_t_string_memory_ptr",
                                                "nativeSrc": "763:32:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "763:32:13"
                                            },
                                            "nativeSrc": "763:39:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "763:39:13"
                                        },
                                        "variables": [
                                            {
                                                "name": "length",
                                                "nativeSrc": "753:6:13",
                                                "nodeType": "YulTypedName",
                                                "src": "753:6:13",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "nativeSrc": "811:78:13",
                                        "nodeType": "YulAssignment",
                                        "src": "811:78:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "pos",
                                                    "nativeSrc": "877:3:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "877:3:13"
                                                },
                                                {
                                                    "name": "length",
                                                    "nativeSrc": "882:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "882:6:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                                                "nativeSrc": "818:58:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "818:58:13"
                                            },
                                            "nativeSrc": "818:71:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "818:71:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "pos",
                                                "nativeSrc": "811:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "811:3:13"
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nativeSrc": "937:5:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "937:5:13"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "944:4:13",
                                                            "nodeType": "YulLiteral",
                                                            "src": "944:4:13",
                                                            "type": "",
                                                            "value": "0x20"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nativeSrc": "933:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "933:3:13"
                                                    },
                                                    "nativeSrc": "933:16:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "933:16:13"
                                                },
                                                {
                                                    "name": "pos",
                                                    "nativeSrc": "951:3:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "951:3:13"
                                                },
                                                {
                                                    "name": "length",
                                                    "nativeSrc": "956:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "956:6:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "copy_memory_to_memory_with_cleanup",
                                                "nativeSrc": "898:34:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "898:34:13"
                                            },
                                            "nativeSrc": "898:65:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "898:65:13"
                                        },
                                        "nativeSrc": "898:65:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "898:65:13"
                                    },
                                    {
                                        "nativeSrc": "972:46:13",
                                        "nodeType": "YulAssignment",
                                        "src": "972:46:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "pos",
                                                    "nativeSrc": "983:3:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "983:3:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "length",
                                                            "nativeSrc": "1010:6:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1010:6:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "round_up_to_mul_of_32",
                                                        "nativeSrc": "988:21:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "988:21:13"
                                                    },
                                                    "nativeSrc": "988:29:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "988:29:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nativeSrc": "979:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "979:3:13"
                                            },
                                            "nativeSrc": "979:39:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "979:39:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "end",
                                                "nativeSrc": "972:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "972:3:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                            "nativeSrc": "647:377:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "720:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "720:5:13",
                                    "type": ""
                                },
                                {
                                    "name": "pos",
                                    "nativeSrc": "727:3:13",
                                    "nodeType": "YulTypedName",
                                    "src": "727:3:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "end",
                                    "nativeSrc": "735:3:13",
                                    "nodeType": "YulTypedName",
                                    "src": "735:3:13",
                                    "type": ""
                                }
                            ],
                            "src": "647:377:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "1148:195:13",
                                "nodeType": "YulBlock",
                                "src": "1148:195:13",
                                "statements": [
                                    {
                                        "nativeSrc": "1158:26:13",
                                        "nodeType": "YulAssignment",
                                        "src": "1158:26:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "headStart",
                                                    "nativeSrc": "1170:9:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1170:9:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "1181:2:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1181:2:13",
                                                    "type": "",
                                                    "value": "32"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nativeSrc": "1166:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1166:3:13"
                                            },
                                            "nativeSrc": "1166:18:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "1166:18:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "tail",
                                                "nativeSrc": "1158:4:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1158:4:13"
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "headStart",
                                                            "nativeSrc": "1205:9:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1205:9:13"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "1216:1:13",
                                                            "nodeType": "YulLiteral",
                                                            "src": "1216:1:13",
                                                            "type": "",
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nativeSrc": "1201:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1201:3:13"
                                                    },
                                                    "nativeSrc": "1201:17:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1201:17:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "tail",
                                                            "nativeSrc": "1224:4:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1224:4:13"
                                                        },
                                                        {
                                                            "name": "headStart",
                                                            "nativeSrc": "1230:9:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1230:9:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "sub",
                                                        "nativeSrc": "1220:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1220:3:13"
                                                    },
                                                    "nativeSrc": "1220:20:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1220:20:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nativeSrc": "1194:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1194:6:13"
                                            },
                                            "nativeSrc": "1194:47:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "1194:47:13"
                                        },
                                        "nativeSrc": "1194:47:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "1194:47:13"
                                    },
                                    {
                                        "nativeSrc": "1250:86:13",
                                        "nodeType": "YulAssignment",
                                        "src": "1250:86:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "value0",
                                                    "nativeSrc": "1322:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1322:6:13"
                                                },
                                                {
                                                    "name": "tail",
                                                    "nativeSrc": "1331:4:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1331:4:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                                                "nativeSrc": "1258:63:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1258:63:13"
                                            },
                                            "nativeSrc": "1258:78:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "1258:78:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "tail",
                                                "nativeSrc": "1250:4:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1250:4:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
                            "nativeSrc": "1030:313:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "headStart",
                                    "nativeSrc": "1120:9:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1120:9:13",
                                    "type": ""
                                },
                                {
                                    "name": "value0",
                                    "nativeSrc": "1132:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1132:6:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "tail",
                                    "nativeSrc": "1143:4:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1143:4:13",
                                    "type": ""
                                }
                            ],
                            "src": "1030:313:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "1389:35:13",
                                "nodeType": "YulBlock",
                                "src": "1389:35:13",
                                "statements": [
                                    {
                                        "nativeSrc": "1399:19:13",
                                        "nodeType": "YulAssignment",
                                        "src": "1399:19:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "1415:2:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1415:2:13",
                                                    "type": "",
                                                    "value": "64"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mload",
                                                "nativeSrc": "1409:5:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1409:5:13"
                                            },
                                            "nativeSrc": "1409:9:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "1409:9:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "memPtr",
                                                "nativeSrc": "1399:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1399:6:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "allocate_unbounded",
                            "nativeSrc": "1349:75:13",
                            "nodeType": "YulFunctionDefinition",
                            "returnVariables": [
                                {
                                    "name": "memPtr",
                                    "nativeSrc": "1382:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1382:6:13",
                                    "type": ""
                                }
                            ],
                            "src": "1349:75:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "1519:28:13",
                                "nodeType": "YulBlock",
                                "src": "1519:28:13",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "1536:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1536:1:13",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "1539:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1539:1:13",
                                                    "type": "",
                                                    "value": "0"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nativeSrc": "1529:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1529:6:13"
                                            },
                                            "nativeSrc": "1529:12:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "1529:12:13"
                                        },
                                        "nativeSrc": "1529:12:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "1529:12:13"
                                    }
                                ]
                            },
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nativeSrc": "1430:117:13",
                            "nodeType": "YulFunctionDefinition",
                            "src": "1430:117:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "1642:28:13",
                                "nodeType": "YulBlock",
                                "src": "1642:28:13",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "1659:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1659:1:13",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "1662:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1662:1:13",
                                                    "type": "",
                                                    "value": "0"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nativeSrc": "1652:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1652:6:13"
                                            },
                                            "nativeSrc": "1652:12:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "1652:12:13"
                                        },
                                        "nativeSrc": "1652:12:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "1652:12:13"
                                    }
                                ]
                            },
                            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                            "nativeSrc": "1553:117:13",
                            "nodeType": "YulFunctionDefinition",
                            "src": "1553:117:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "1721:81:13",
                                "nodeType": "YulBlock",
                                "src": "1721:81:13",
                                "statements": [
                                    {
                                        "nativeSrc": "1731:65:13",
                                        "nodeType": "YulAssignment",
                                        "src": "1731:65:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nativeSrc": "1746:5:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1746:5:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "1753:42:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1753:42:13",
                                                    "type": "",
                                                    "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "and",
                                                "nativeSrc": "1742:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1742:3:13"
                                            },
                                            "nativeSrc": "1742:54:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "1742:54:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "cleaned",
                                                "nativeSrc": "1731:7:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1731:7:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "cleanup_t_uint160",
                            "nativeSrc": "1676:126:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "1703:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1703:5:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "cleaned",
                                    "nativeSrc": "1713:7:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1713:7:13",
                                    "type": ""
                                }
                            ],
                            "src": "1676:126:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "1853:51:13",
                                "nodeType": "YulBlock",
                                "src": "1853:51:13",
                                "statements": [
                                    {
                                        "nativeSrc": "1863:35:13",
                                        "nodeType": "YulAssignment",
                                        "src": "1863:35:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nativeSrc": "1892:5:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1892:5:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "cleanup_t_uint160",
                                                "nativeSrc": "1874:17:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1874:17:13"
                                            },
                                            "nativeSrc": "1874:24:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "1874:24:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "cleaned",
                                                "nativeSrc": "1863:7:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1863:7:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "cleanup_t_address",
                            "nativeSrc": "1808:96:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "1835:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1835:5:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "cleaned",
                                    "nativeSrc": "1845:7:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1845:7:13",
                                    "type": ""
                                }
                            ],
                            "src": "1808:96:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "1953:79:13",
                                "nodeType": "YulBlock",
                                "src": "1953:79:13",
                                "statements": [
                                    {
                                        "body": {
                                            "nativeSrc": "2010:16:13",
                                            "nodeType": "YulBlock",
                                            "src": "2010:16:13",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "kind": "number",
                                                                "nativeSrc": "2019:1:13",
                                                                "nodeType": "YulLiteral",
                                                                "src": "2019:1:13",
                                                                "type": "",
                                                                "value": "0"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nativeSrc": "2022:1:13",
                                                                "nodeType": "YulLiteral",
                                                                "src": "2022:1:13",
                                                                "type": "",
                                                                "value": "0"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "revert",
                                                            "nativeSrc": "2012:6:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2012:6:13"
                                                        },
                                                        "nativeSrc": "2012:12:13",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "2012:12:13"
                                                    },
                                                    "nativeSrc": "2012:12:13",
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "2012:12:13"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nativeSrc": "1976:5:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1976:5:13"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "value",
                                                                    "nativeSrc": "2001:5:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2001:5:13"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "cleanup_t_address",
                                                                "nativeSrc": "1983:17:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1983:17:13"
                                                            },
                                                            "nativeSrc": "1983:24:13",
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "1983:24:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "eq",
                                                        "nativeSrc": "1973:2:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1973:2:13"
                                                    },
                                                    "nativeSrc": "1973:35:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1973:35:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "iszero",
                                                "nativeSrc": "1966:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "1966:6:13"
                                            },
                                            "nativeSrc": "1966:43:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "1966:43:13"
                                        },
                                        "nativeSrc": "1963:63:13",
                                        "nodeType": "YulIf",
                                        "src": "1963:63:13"
                                    }
                                ]
                            },
                            "name": "validator_revert_t_address",
                            "nativeSrc": "1910:122:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "1946:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "1946:5:13",
                                    "type": ""
                                }
                            ],
                            "src": "1910:122:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "2090:87:13",
                                "nodeType": "YulBlock",
                                "src": "2090:87:13",
                                "statements": [
                                    {
                                        "nativeSrc": "2100:29:13",
                                        "nodeType": "YulAssignment",
                                        "src": "2100:29:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "offset",
                                                    "nativeSrc": "2122:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2122:6:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "calldataload",
                                                "nativeSrc": "2109:12:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "2109:12:13"
                                            },
                                            "nativeSrc": "2109:20:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "2109:20:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "value",
                                                "nativeSrc": "2100:5:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "2100:5:13"
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nativeSrc": "2165:5:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2165:5:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "validator_revert_t_address",
                                                "nativeSrc": "2138:26:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "2138:26:13"
                                            },
                                            "nativeSrc": "2138:33:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "2138:33:13"
                                        },
                                        "nativeSrc": "2138:33:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "2138:33:13"
                                    }
                                ]
                            },
                            "name": "abi_decode_t_address",
                            "nativeSrc": "2038:139:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "offset",
                                    "nativeSrc": "2068:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2068:6:13",
                                    "type": ""
                                },
                                {
                                    "name": "end",
                                    "nativeSrc": "2076:3:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2076:3:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "value",
                                    "nativeSrc": "2084:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2084:5:13",
                                    "type": ""
                                }
                            ],
                            "src": "2038:139:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "2228:32:13",
                                "nodeType": "YulBlock",
                                "src": "2228:32:13",
                                "statements": [
                                    {
                                        "nativeSrc": "2238:16:13",
                                        "nodeType": "YulAssignment",
                                        "src": "2238:16:13",
                                        "value": {
                                            "name": "value",
                                            "nativeSrc": "2249:5:13",
                                            "nodeType": "YulIdentifier",
                                            "src": "2249:5:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "cleaned",
                                                "nativeSrc": "2238:7:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "2238:7:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "cleanup_t_uint256",
                            "nativeSrc": "2183:77:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "2210:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2210:5:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "cleaned",
                                    "nativeSrc": "2220:7:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2220:7:13",
                                    "type": ""
                                }
                            ],
                            "src": "2183:77:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "2309:79:13",
                                "nodeType": "YulBlock",
                                "src": "2309:79:13",
                                "statements": [
                                    {
                                        "body": {
                                            "nativeSrc": "2366:16:13",
                                            "nodeType": "YulBlock",
                                            "src": "2366:16:13",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "kind": "number",
                                                                "nativeSrc": "2375:1:13",
                                                                "nodeType": "YulLiteral",
                                                                "src": "2375:1:13",
                                                                "type": "",
                                                                "value": "0"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nativeSrc": "2378:1:13",
                                                                "nodeType": "YulLiteral",
                                                                "src": "2378:1:13",
                                                                "type": "",
                                                                "value": "0"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "revert",
                                                            "nativeSrc": "2368:6:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2368:6:13"
                                                        },
                                                        "nativeSrc": "2368:12:13",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "2368:12:13"
                                                    },
                                                    "nativeSrc": "2368:12:13",
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "2368:12:13"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nativeSrc": "2332:5:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2332:5:13"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "value",
                                                                    "nativeSrc": "2357:5:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2357:5:13"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "cleanup_t_uint256",
                                                                "nativeSrc": "2339:17:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2339:17:13"
                                                            },
                                                            "nativeSrc": "2339:24:13",
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2339:24:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "eq",
                                                        "nativeSrc": "2329:2:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2329:2:13"
                                                    },
                                                    "nativeSrc": "2329:35:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2329:35:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "iszero",
                                                "nativeSrc": "2322:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "2322:6:13"
                                            },
                                            "nativeSrc": "2322:43:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "2322:43:13"
                                        },
                                        "nativeSrc": "2319:63:13",
                                        "nodeType": "YulIf",
                                        "src": "2319:63:13"
                                    }
                                ]
                            },
                            "name": "validator_revert_t_uint256",
                            "nativeSrc": "2266:122:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "2302:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2302:5:13",
                                    "type": ""
                                }
                            ],
                            "src": "2266:122:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "2446:87:13",
                                "nodeType": "YulBlock",
                                "src": "2446:87:13",
                                "statements": [
                                    {
                                        "nativeSrc": "2456:29:13",
                                        "nodeType": "YulAssignment",
                                        "src": "2456:29:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "offset",
                                                    "nativeSrc": "2478:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2478:6:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "calldataload",
                                                "nativeSrc": "2465:12:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "2465:12:13"
                                            },
                                            "nativeSrc": "2465:20:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "2465:20:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "value",
                                                "nativeSrc": "2456:5:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "2456:5:13"
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nativeSrc": "2521:5:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2521:5:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "validator_revert_t_uint256",
                                                "nativeSrc": "2494:26:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "2494:26:13"
                                            },
                                            "nativeSrc": "2494:33:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "2494:33:13"
                                        },
                                        "nativeSrc": "2494:33:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "2494:33:13"
                                    }
                                ]
                            },
                            "name": "abi_decode_t_uint256",
                            "nativeSrc": "2394:139:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "offset",
                                    "nativeSrc": "2424:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2424:6:13",
                                    "type": ""
                                },
                                {
                                    "name": "end",
                                    "nativeSrc": "2432:3:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2432:3:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "value",
                                    "nativeSrc": "2440:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2440:5:13",
                                    "type": ""
                                }
                            ],
                            "src": "2394:139:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "2622:391:13",
                                "nodeType": "YulBlock",
                                "src": "2622:391:13",
                                "statements": [
                                    {
                                        "body": {
                                            "nativeSrc": "2668:83:13",
                                            "nodeType": "YulBlock",
                                            "src": "2668:83:13",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                                            "nativeSrc": "2670:77:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2670:77:13"
                                                        },
                                                        "nativeSrc": "2670:79:13",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "2670:79:13"
                                                    },
                                                    "nativeSrc": "2670:79:13",
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "2670:79:13"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "dataEnd",
                                                            "nativeSrc": "2643:7:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2643:7:13"
                                                        },
                                                        {
                                                            "name": "headStart",
                                                            "nativeSrc": "2652:9:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2652:9:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "sub",
                                                        "nativeSrc": "2639:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2639:3:13"
                                                    },
                                                    "nativeSrc": "2639:23:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2639:23:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "2664:2:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "2664:2:13",
                                                    "type": "",
                                                    "value": "64"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "slt",
                                                "nativeSrc": "2635:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "2635:3:13"
                                            },
                                            "nativeSrc": "2635:32:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "2635:32:13"
                                        },
                                        "nativeSrc": "2632:119:13",
                                        "nodeType": "YulIf",
                                        "src": "2632:119:13"
                                    },
                                    {
                                        "nativeSrc": "2761:117:13",
                                        "nodeType": "YulBlock",
                                        "src": "2761:117:13",
                                        "statements": [
                                            {
                                                "nativeSrc": "2776:15:13",
                                                "nodeType": "YulVariableDeclaration",
                                                "src": "2776:15:13",
                                                "value": {
                                                    "kind": "number",
                                                    "nativeSrc": "2790:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "2790:1:13",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                "variables": [
                                                    {
                                                        "name": "offset",
                                                        "nativeSrc": "2780:6:13",
                                                        "nodeType": "YulTypedName",
                                                        "src": "2780:6:13",
                                                        "type": ""
                                                    }
                                                ]
                                            },
                                            {
                                                "nativeSrc": "2805:63:13",
                                                "nodeType": "YulAssignment",
                                                "src": "2805:63:13",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "headStart",
                                                                    "nativeSrc": "2840:9:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2840:9:13"
                                                                },
                                                                {
                                                                    "name": "offset",
                                                                    "nativeSrc": "2851:6:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2851:6:13"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nativeSrc": "2836:3:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2836:3:13"
                                                            },
                                                            "nativeSrc": "2836:22:13",
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2836:22:13"
                                                        },
                                                        {
                                                            "name": "dataEnd",
                                                            "nativeSrc": "2860:7:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2860:7:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "abi_decode_t_address",
                                                        "nativeSrc": "2815:20:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2815:20:13"
                                                    },
                                                    "nativeSrc": "2815:53:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2815:53:13"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "value0",
                                                        "nativeSrc": "2805:6:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2805:6:13"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "nativeSrc": "2888:118:13",
                                        "nodeType": "YulBlock",
                                        "src": "2888:118:13",
                                        "statements": [
                                            {
                                                "nativeSrc": "2903:16:13",
                                                "nodeType": "YulVariableDeclaration",
                                                "src": "2903:16:13",
                                                "value": {
                                                    "kind": "number",
                                                    "nativeSrc": "2917:2:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "2917:2:13",
                                                    "type": "",
                                                    "value": "32"
                                                },
                                                "variables": [
                                                    {
                                                        "name": "offset",
                                                        "nativeSrc": "2907:6:13",
                                                        "nodeType": "YulTypedName",
                                                        "src": "2907:6:13",
                                                        "type": ""
                                                    }
                                                ]
                                            },
                                            {
                                                "nativeSrc": "2933:63:13",
                                                "nodeType": "YulAssignment",
                                                "src": "2933:63:13",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "headStart",
                                                                    "nativeSrc": "2968:9:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2968:9:13"
                                                                },
                                                                {
                                                                    "name": "offset",
                                                                    "nativeSrc": "2979:6:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2979:6:13"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nativeSrc": "2964:3:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2964:3:13"
                                                            },
                                                            "nativeSrc": "2964:22:13",
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2964:22:13"
                                                        },
                                                        {
                                                            "name": "dataEnd",
                                                            "nativeSrc": "2988:7:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2988:7:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "abi_decode_t_uint256",
                                                        "nativeSrc": "2943:20:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2943:20:13"
                                                    },
                                                    "nativeSrc": "2943:53:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2943:53:13"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "value1",
                                                        "nativeSrc": "2933:6:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2933:6:13"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "abi_decode_tuple_t_addresst_uint256",
                            "nativeSrc": "2539:474:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "headStart",
                                    "nativeSrc": "2584:9:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2584:9:13",
                                    "type": ""
                                },
                                {
                                    "name": "dataEnd",
                                    "nativeSrc": "2595:7:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2595:7:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "value0",
                                    "nativeSrc": "2607:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2607:6:13",
                                    "type": ""
                                },
                                {
                                    "name": "value1",
                                    "nativeSrc": "2615:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "2615:6:13",
                                    "type": ""
                                }
                            ],
                            "src": "2539:474:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "3061:48:13",
                                "nodeType": "YulBlock",
                                "src": "3061:48:13",
                                "statements": [
                                    {
                                        "nativeSrc": "3071:32:13",
                                        "nodeType": "YulAssignment",
                                        "src": "3071:32:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nativeSrc": "3096:5:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3096:5:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nativeSrc": "3089:6:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3089:6:13"
                                                    },
                                                    "nativeSrc": "3089:13:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3089:13:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "iszero",
                                                "nativeSrc": "3082:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "3082:6:13"
                                            },
                                            "nativeSrc": "3082:21:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "3082:21:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "cleaned",
                                                "nativeSrc": "3071:7:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "3071:7:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "cleanup_t_bool",
                            "nativeSrc": "3019:90:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "3043:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3043:5:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "cleaned",
                                    "nativeSrc": "3053:7:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3053:7:13",
                                    "type": ""
                                }
                            ],
                            "src": "3019:90:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "3174:50:13",
                                "nodeType": "YulBlock",
                                "src": "3174:50:13",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "pos",
                                                    "nativeSrc": "3191:3:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3191:3:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nativeSrc": "3211:5:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3211:5:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "cleanup_t_bool",
                                                        "nativeSrc": "3196:14:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3196:14:13"
                                                    },
                                                    "nativeSrc": "3196:21:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3196:21:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nativeSrc": "3184:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "3184:6:13"
                                            },
                                            "nativeSrc": "3184:34:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "3184:34:13"
                                        },
                                        "nativeSrc": "3184:34:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "3184:34:13"
                                    }
                                ]
                            },
                            "name": "abi_encode_t_bool_to_t_bool_fromStack",
                            "nativeSrc": "3115:109:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "3162:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3162:5:13",
                                    "type": ""
                                },
                                {
                                    "name": "pos",
                                    "nativeSrc": "3169:3:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3169:3:13",
                                    "type": ""
                                }
                            ],
                            "src": "3115:109:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "3322:118:13",
                                "nodeType": "YulBlock",
                                "src": "3322:118:13",
                                "statements": [
                                    {
                                        "nativeSrc": "3332:26:13",
                                        "nodeType": "YulAssignment",
                                        "src": "3332:26:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "headStart",
                                                    "nativeSrc": "3344:9:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3344:9:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "3355:2:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "3355:2:13",
                                                    "type": "",
                                                    "value": "32"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nativeSrc": "3340:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "3340:3:13"
                                            },
                                            "nativeSrc": "3340:18:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "3340:18:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "tail",
                                                "nativeSrc": "3332:4:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "3332:4:13"
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "value0",
                                                    "nativeSrc": "3406:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3406:6:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "headStart",
                                                            "nativeSrc": "3419:9:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3419:9:13"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "3430:1:13",
                                                            "nodeType": "YulLiteral",
                                                            "src": "3430:1:13",
                                                            "type": "",
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nativeSrc": "3415:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3415:3:13"
                                                    },
                                                    "nativeSrc": "3415:17:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3415:17:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "abi_encode_t_bool_to_t_bool_fromStack",
                                                "nativeSrc": "3368:37:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "3368:37:13"
                                            },
                                            "nativeSrc": "3368:65:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "3368:65:13"
                                        },
                                        "nativeSrc": "3368:65:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "3368:65:13"
                                    }
                                ]
                            },
                            "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
                            "nativeSrc": "3230:210:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "headStart",
                                    "nativeSrc": "3294:9:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3294:9:13",
                                    "type": ""
                                },
                                {
                                    "name": "value0",
                                    "nativeSrc": "3306:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3306:6:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "tail",
                                    "nativeSrc": "3317:4:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3317:4:13",
                                    "type": ""
                                }
                            ],
                            "src": "3230:210:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "3511:53:13",
                                "nodeType": "YulBlock",
                                "src": "3511:53:13",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "pos",
                                                    "nativeSrc": "3528:3:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3528:3:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nativeSrc": "3551:5:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3551:5:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "cleanup_t_uint256",
                                                        "nativeSrc": "3533:17:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3533:17:13"
                                                    },
                                                    "nativeSrc": "3533:24:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3533:24:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nativeSrc": "3521:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "3521:6:13"
                                            },
                                            "nativeSrc": "3521:37:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "3521:37:13"
                                        },
                                        "nativeSrc": "3521:37:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "3521:37:13"
                                    }
                                ]
                            },
                            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                            "nativeSrc": "3446:118:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "3499:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3499:5:13",
                                    "type": ""
                                },
                                {
                                    "name": "pos",
                                    "nativeSrc": "3506:3:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3506:3:13",
                                    "type": ""
                                }
                            ],
                            "src": "3446:118:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "3668:124:13",
                                "nodeType": "YulBlock",
                                "src": "3668:124:13",
                                "statements": [
                                    {
                                        "nativeSrc": "3678:26:13",
                                        "nodeType": "YulAssignment",
                                        "src": "3678:26:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "headStart",
                                                    "nativeSrc": "3690:9:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3690:9:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "3701:2:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "3701:2:13",
                                                    "type": "",
                                                    "value": "32"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nativeSrc": "3686:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "3686:3:13"
                                            },
                                            "nativeSrc": "3686:18:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "3686:18:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "tail",
                                                "nativeSrc": "3678:4:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "3678:4:13"
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "value0",
                                                    "nativeSrc": "3758:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3758:6:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "headStart",
                                                            "nativeSrc": "3771:9:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3771:9:13"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "3782:1:13",
                                                            "nodeType": "YulLiteral",
                                                            "src": "3782:1:13",
                                                            "type": "",
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nativeSrc": "3767:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3767:3:13"
                                                    },
                                                    "nativeSrc": "3767:17:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3767:17:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                                                "nativeSrc": "3714:43:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "3714:43:13"
                                            },
                                            "nativeSrc": "3714:71:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "3714:71:13"
                                        },
                                        "nativeSrc": "3714:71:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "3714:71:13"
                                    }
                                ]
                            },
                            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                            "nativeSrc": "3570:222:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "headStart",
                                    "nativeSrc": "3640:9:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3640:9:13",
                                    "type": ""
                                },
                                {
                                    "name": "value0",
                                    "nativeSrc": "3652:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3652:6:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "tail",
                                    "nativeSrc": "3663:4:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3663:4:13",
                                    "type": ""
                                }
                            ],
                            "src": "3570:222:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "3898:519:13",
                                "nodeType": "YulBlock",
                                "src": "3898:519:13",
                                "statements": [
                                    {
                                        "body": {
                                            "nativeSrc": "3944:83:13",
                                            "nodeType": "YulBlock",
                                            "src": "3944:83:13",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                                            "nativeSrc": "3946:77:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3946:77:13"
                                                        },
                                                        "nativeSrc": "3946:79:13",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "3946:79:13"
                                                    },
                                                    "nativeSrc": "3946:79:13",
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "3946:79:13"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "dataEnd",
                                                            "nativeSrc": "3919:7:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3919:7:13"
                                                        },
                                                        {
                                                            "name": "headStart",
                                                            "nativeSrc": "3928:9:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3928:9:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "sub",
                                                        "nativeSrc": "3915:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3915:3:13"
                                                    },
                                                    "nativeSrc": "3915:23:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3915:23:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "3940:2:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "3940:2:13",
                                                    "type": "",
                                                    "value": "96"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "slt",
                                                "nativeSrc": "3911:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "3911:3:13"
                                            },
                                            "nativeSrc": "3911:32:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "3911:32:13"
                                        },
                                        "nativeSrc": "3908:119:13",
                                        "nodeType": "YulIf",
                                        "src": "3908:119:13"
                                    },
                                    {
                                        "nativeSrc": "4037:117:13",
                                        "nodeType": "YulBlock",
                                        "src": "4037:117:13",
                                        "statements": [
                                            {
                                                "nativeSrc": "4052:15:13",
                                                "nodeType": "YulVariableDeclaration",
                                                "src": "4052:15:13",
                                                "value": {
                                                    "kind": "number",
                                                    "nativeSrc": "4066:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4066:1:13",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                "variables": [
                                                    {
                                                        "name": "offset",
                                                        "nativeSrc": "4056:6:13",
                                                        "nodeType": "YulTypedName",
                                                        "src": "4056:6:13",
                                                        "type": ""
                                                    }
                                                ]
                                            },
                                            {
                                                "nativeSrc": "4081:63:13",
                                                "nodeType": "YulAssignment",
                                                "src": "4081:63:13",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "headStart",
                                                                    "nativeSrc": "4116:9:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "4116:9:13"
                                                                },
                                                                {
                                                                    "name": "offset",
                                                                    "nativeSrc": "4127:6:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "4127:6:13"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nativeSrc": "4112:3:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "4112:3:13"
                                                            },
                                                            "nativeSrc": "4112:22:13",
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "4112:22:13"
                                                        },
                                                        {
                                                            "name": "dataEnd",
                                                            "nativeSrc": "4136:7:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4136:7:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "abi_decode_t_address",
                                                        "nativeSrc": "4091:20:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4091:20:13"
                                                    },
                                                    "nativeSrc": "4091:53:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "4091:53:13"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "value0",
                                                        "nativeSrc": "4081:6:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4081:6:13"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "nativeSrc": "4164:118:13",
                                        "nodeType": "YulBlock",
                                        "src": "4164:118:13",
                                        "statements": [
                                            {
                                                "nativeSrc": "4179:16:13",
                                                "nodeType": "YulVariableDeclaration",
                                                "src": "4179:16:13",
                                                "value": {
                                                    "kind": "number",
                                                    "nativeSrc": "4193:2:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4193:2:13",
                                                    "type": "",
                                                    "value": "32"
                                                },
                                                "variables": [
                                                    {
                                                        "name": "offset",
                                                        "nativeSrc": "4183:6:13",
                                                        "nodeType": "YulTypedName",
                                                        "src": "4183:6:13",
                                                        "type": ""
                                                    }
                                                ]
                                            },
                                            {
                                                "nativeSrc": "4209:63:13",
                                                "nodeType": "YulAssignment",
                                                "src": "4209:63:13",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "headStart",
                                                                    "nativeSrc": "4244:9:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "4244:9:13"
                                                                },
                                                                {
                                                                    "name": "offset",
                                                                    "nativeSrc": "4255:6:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "4255:6:13"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nativeSrc": "4240:3:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "4240:3:13"
                                                            },
                                                            "nativeSrc": "4240:22:13",
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "4240:22:13"
                                                        },
                                                        {
                                                            "name": "dataEnd",
                                                            "nativeSrc": "4264:7:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4264:7:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "abi_decode_t_address",
                                                        "nativeSrc": "4219:20:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4219:20:13"
                                                    },
                                                    "nativeSrc": "4219:53:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "4219:53:13"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "value1",
                                                        "nativeSrc": "4209:6:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4209:6:13"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "nativeSrc": "4292:118:13",
                                        "nodeType": "YulBlock",
                                        "src": "4292:118:13",
                                        "statements": [
                                            {
                                                "nativeSrc": "4307:16:13",
                                                "nodeType": "YulVariableDeclaration",
                                                "src": "4307:16:13",
                                                "value": {
                                                    "kind": "number",
                                                    "nativeSrc": "4321:2:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4321:2:13",
                                                    "type": "",
                                                    "value": "64"
                                                },
                                                "variables": [
                                                    {
                                                        "name": "offset",
                                                        "nativeSrc": "4311:6:13",
                                                        "nodeType": "YulTypedName",
                                                        "src": "4311:6:13",
                                                        "type": ""
                                                    }
                                                ]
                                            },
                                            {
                                                "nativeSrc": "4337:63:13",
                                                "nodeType": "YulAssignment",
                                                "src": "4337:63:13",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "headStart",
                                                                    "nativeSrc": "4372:9:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "4372:9:13"
                                                                },
                                                                {
                                                                    "name": "offset",
                                                                    "nativeSrc": "4383:6:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "4383:6:13"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nativeSrc": "4368:3:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "4368:3:13"
                                                            },
                                                            "nativeSrc": "4368:22:13",
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "4368:22:13"
                                                        },
                                                        {
                                                            "name": "dataEnd",
                                                            "nativeSrc": "4392:7:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4392:7:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "abi_decode_t_uint256",
                                                        "nativeSrc": "4347:20:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4347:20:13"
                                                    },
                                                    "nativeSrc": "4347:53:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "4347:53:13"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "value2",
                                                        "nativeSrc": "4337:6:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4337:6:13"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "abi_decode_tuple_t_addresst_addresst_uint256",
                            "nativeSrc": "3798:619:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "headStart",
                                    "nativeSrc": "3852:9:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3852:9:13",
                                    "type": ""
                                },
                                {
                                    "name": "dataEnd",
                                    "nativeSrc": "3863:7:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3863:7:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "value0",
                                    "nativeSrc": "3875:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3875:6:13",
                                    "type": ""
                                },
                                {
                                    "name": "value1",
                                    "nativeSrc": "3883:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3883:6:13",
                                    "type": ""
                                },
                                {
                                    "name": "value2",
                                    "nativeSrc": "3891:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "3891:6:13",
                                    "type": ""
                                }
                            ],
                            "src": "3798:619:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "4466:43:13",
                                "nodeType": "YulBlock",
                                "src": "4466:43:13",
                                "statements": [
                                    {
                                        "nativeSrc": "4476:27:13",
                                        "nodeType": "YulAssignment",
                                        "src": "4476:27:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nativeSrc": "4491:5:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4491:5:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "4498:4:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4498:4:13",
                                                    "type": "",
                                                    "value": "0xff"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "and",
                                                "nativeSrc": "4487:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "4487:3:13"
                                            },
                                            "nativeSrc": "4487:16:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "4487:16:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "cleaned",
                                                "nativeSrc": "4476:7:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "4476:7:13"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "cleanup_t_uint8",
                            "nativeSrc": "4423:86:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "4448:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "4448:5:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "cleaned",
                                    "nativeSrc": "4458:7:13",
                                    "nodeType": "YulTypedName",
                                    "src": "4458:7:13",
                                    "type": ""
                                }
                            ],
                            "src": "4423:86:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "4576:51:13",
                                "nodeType": "YulBlock",
                                "src": "4576:51:13",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "pos",
                                                    "nativeSrc": "4593:3:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4593:3:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nativeSrc": "4614:5:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4614:5:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "cleanup_t_uint8",
                                                        "nativeSrc": "4598:15:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4598:15:13"
                                                    },
                                                    "nativeSrc": "4598:22:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "4598:22:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nativeSrc": "4586:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "4586:6:13"
                                            },
                                            "nativeSrc": "4586:35:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "4586:35:13"
                                        },
                                        "nativeSrc": "4586:35:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "4586:35:13"
                                    }
                                ]
                            },
                            "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
                            "nativeSrc": "4515:112:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "4564:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "4564:5:13",
                                    "type": ""
                                },
                                {
                                    "name": "pos",
                                    "nativeSrc": "4571:3:13",
                                    "nodeType": "YulTypedName",
                                    "src": "4571:3:13",
                                    "type": ""
                                }
                            ],
                            "src": "4515:112:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "4727:120:13",
                                "nodeType": "YulBlock",
                                "src": "4727:120:13",
                                "statements": [
                                    {
                                        "nativeSrc": "4737:26:13",
                                        "nodeType": "YulAssignment",
                                        "src": "4737:26:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "headStart",
                                                    "nativeSrc": "4749:9:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4749:9:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "4760:2:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4760:2:13",
                                                    "type": "",
                                                    "value": "32"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nativeSrc": "4745:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "4745:3:13"
                                            },
                                            "nativeSrc": "4745:18:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "4745:18:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "tail",
                                                "nativeSrc": "4737:4:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "4737:4:13"
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "value0",
                                                    "nativeSrc": "4813:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4813:6:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "headStart",
                                                            "nativeSrc": "4826:9:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4826:9:13"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "4837:1:13",
                                                            "nodeType": "YulLiteral",
                                                            "src": "4837:1:13",
                                                            "type": "",
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nativeSrc": "4822:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4822:3:13"
                                                    },
                                                    "nativeSrc": "4822:17:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "4822:17:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
                                                "nativeSrc": "4773:39:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "4773:39:13"
                                            },
                                            "nativeSrc": "4773:67:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "4773:67:13"
                                        },
                                        "nativeSrc": "4773:67:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "4773:67:13"
                                    }
                                ]
                            },
                            "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
                            "nativeSrc": "4633:214:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "headStart",
                                    "nativeSrc": "4699:9:13",
                                    "nodeType": "YulTypedName",
                                    "src": "4699:9:13",
                                    "type": ""
                                },
                                {
                                    "name": "value0",
                                    "nativeSrc": "4711:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "4711:6:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "tail",
                                    "nativeSrc": "4722:4:13",
                                    "nodeType": "YulTypedName",
                                    "src": "4722:4:13",
                                    "type": ""
                                }
                            ],
                            "src": "4633:214:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "4919:263:13",
                                "nodeType": "YulBlock",
                                "src": "4919:263:13",
                                "statements": [
                                    {
                                        "body": {
                                            "nativeSrc": "4965:83:13",
                                            "nodeType": "YulBlock",
                                            "src": "4965:83:13",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                                            "nativeSrc": "4967:77:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4967:77:13"
                                                        },
                                                        "nativeSrc": "4967:79:13",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "4967:79:13"
                                                    },
                                                    "nativeSrc": "4967:79:13",
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "4967:79:13"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "dataEnd",
                                                            "nativeSrc": "4940:7:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4940:7:13"
                                                        },
                                                        {
                                                            "name": "headStart",
                                                            "nativeSrc": "4949:9:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4949:9:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "sub",
                                                        "nativeSrc": "4936:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4936:3:13"
                                                    },
                                                    "nativeSrc": "4936:23:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "4936:23:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "4961:2:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4961:2:13",
                                                    "type": "",
                                                    "value": "32"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "slt",
                                                "nativeSrc": "4932:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "4932:3:13"
                                            },
                                            "nativeSrc": "4932:32:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "4932:32:13"
                                        },
                                        "nativeSrc": "4929:119:13",
                                        "nodeType": "YulIf",
                                        "src": "4929:119:13"
                                    },
                                    {
                                        "nativeSrc": "5058:117:13",
                                        "nodeType": "YulBlock",
                                        "src": "5058:117:13",
                                        "statements": [
                                            {
                                                "nativeSrc": "5073:15:13",
                                                "nodeType": "YulVariableDeclaration",
                                                "src": "5073:15:13",
                                                "value": {
                                                    "kind": "number",
                                                    "nativeSrc": "5087:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5087:1:13",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                "variables": [
                                                    {
                                                        "name": "offset",
                                                        "nativeSrc": "5077:6:13",
                                                        "nodeType": "YulTypedName",
                                                        "src": "5077:6:13",
                                                        "type": ""
                                                    }
                                                ]
                                            },
                                            {
                                                "nativeSrc": "5102:63:13",
                                                "nodeType": "YulAssignment",
                                                "src": "5102:63:13",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "headStart",
                                                                    "nativeSrc": "5137:9:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "5137:9:13"
                                                                },
                                                                {
                                                                    "name": "offset",
                                                                    "nativeSrc": "5148:6:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "5148:6:13"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nativeSrc": "5133:3:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "5133:3:13"
                                                            },
                                                            "nativeSrc": "5133:22:13",
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "5133:22:13"
                                                        },
                                                        {
                                                            "name": "dataEnd",
                                                            "nativeSrc": "5157:7:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "5157:7:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "abi_decode_t_address",
                                                        "nativeSrc": "5112:20:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5112:20:13"
                                                    },
                                                    "nativeSrc": "5112:53:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "5112:53:13"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "value0",
                                                        "nativeSrc": "5102:6:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5102:6:13"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "abi_decode_tuple_t_address",
                            "nativeSrc": "4853:329:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "headStart",
                                    "nativeSrc": "4889:9:13",
                                    "nodeType": "YulTypedName",
                                    "src": "4889:9:13",
                                    "type": ""
                                },
                                {
                                    "name": "dataEnd",
                                    "nativeSrc": "4900:7:13",
                                    "nodeType": "YulTypedName",
                                    "src": "4900:7:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "value0",
                                    "nativeSrc": "4912:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "4912:6:13",
                                    "type": ""
                                }
                            ],
                            "src": "4853:329:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "5271:391:13",
                                "nodeType": "YulBlock",
                                "src": "5271:391:13",
                                "statements": [
                                    {
                                        "body": {
                                            "nativeSrc": "5317:83:13",
                                            "nodeType": "YulBlock",
                                            "src": "5317:83:13",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                                            "nativeSrc": "5319:77:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "5319:77:13"
                                                        },
                                                        "nativeSrc": "5319:79:13",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "5319:79:13"
                                                    },
                                                    "nativeSrc": "5319:79:13",
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "5319:79:13"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "dataEnd",
                                                            "nativeSrc": "5292:7:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "5292:7:13"
                                                        },
                                                        {
                                                            "name": "headStart",
                                                            "nativeSrc": "5301:9:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "5301:9:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "sub",
                                                        "nativeSrc": "5288:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5288:3:13"
                                                    },
                                                    "nativeSrc": "5288:23:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "5288:23:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "5313:2:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5313:2:13",
                                                    "type": "",
                                                    "value": "64"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "slt",
                                                "nativeSrc": "5284:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "5284:3:13"
                                            },
                                            "nativeSrc": "5284:32:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "5284:32:13"
                                        },
                                        "nativeSrc": "5281:119:13",
                                        "nodeType": "YulIf",
                                        "src": "5281:119:13"
                                    },
                                    {
                                        "nativeSrc": "5410:117:13",
                                        "nodeType": "YulBlock",
                                        "src": "5410:117:13",
                                        "statements": [
                                            {
                                                "nativeSrc": "5425:15:13",
                                                "nodeType": "YulVariableDeclaration",
                                                "src": "5425:15:13",
                                                "value": {
                                                    "kind": "number",
                                                    "nativeSrc": "5439:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5439:1:13",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                "variables": [
                                                    {
                                                        "name": "offset",
                                                        "nativeSrc": "5429:6:13",
                                                        "nodeType": "YulTypedName",
                                                        "src": "5429:6:13",
                                                        "type": ""
                                                    }
                                                ]
                                            },
                                            {
                                                "nativeSrc": "5454:63:13",
                                                "nodeType": "YulAssignment",
                                                "src": "5454:63:13",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "headStart",
                                                                    "nativeSrc": "5489:9:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "5489:9:13"
                                                                },
                                                                {
                                                                    "name": "offset",
                                                                    "nativeSrc": "5500:6:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "5500:6:13"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nativeSrc": "5485:3:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "5485:3:13"
                                                            },
                                                            "nativeSrc": "5485:22:13",
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "5485:22:13"
                                                        },
                                                        {
                                                            "name": "dataEnd",
                                                            "nativeSrc": "5509:7:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "5509:7:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "abi_decode_t_address",
                                                        "nativeSrc": "5464:20:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5464:20:13"
                                                    },
                                                    "nativeSrc": "5464:53:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "5464:53:13"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "value0",
                                                        "nativeSrc": "5454:6:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5454:6:13"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "nativeSrc": "5537:118:13",
                                        "nodeType": "YulBlock",
                                        "src": "5537:118:13",
                                        "statements": [
                                            {
                                                "nativeSrc": "5552:16:13",
                                                "nodeType": "YulVariableDeclaration",
                                                "src": "5552:16:13",
                                                "value": {
                                                    "kind": "number",
                                                    "nativeSrc": "5566:2:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5566:2:13",
                                                    "type": "",
                                                    "value": "32"
                                                },
                                                "variables": [
                                                    {
                                                        "name": "offset",
                                                        "nativeSrc": "5556:6:13",
                                                        "nodeType": "YulTypedName",
                                                        "src": "5556:6:13",
                                                        "type": ""
                                                    }
                                                ]
                                            },
                                            {
                                                "nativeSrc": "5582:63:13",
                                                "nodeType": "YulAssignment",
                                                "src": "5582:63:13",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "headStart",
                                                                    "nativeSrc": "5617:9:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "5617:9:13"
                                                                },
                                                                {
                                                                    "name": "offset",
                                                                    "nativeSrc": "5628:6:13",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "5628:6:13"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nativeSrc": "5613:3:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "5613:3:13"
                                                            },
                                                            "nativeSrc": "5613:22:13",
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "5613:22:13"
                                                        },
                                                        {
                                                            "name": "dataEnd",
                                                            "nativeSrc": "5637:7:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "5637:7:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "abi_decode_t_address",
                                                        "nativeSrc": "5592:20:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5592:20:13"
                                                    },
                                                    "nativeSrc": "5592:53:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "5592:53:13"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "value1",
                                                        "nativeSrc": "5582:6:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5582:6:13"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "abi_decode_tuple_t_addresst_address",
                            "nativeSrc": "5188:474:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "headStart",
                                    "nativeSrc": "5233:9:13",
                                    "nodeType": "YulTypedName",
                                    "src": "5233:9:13",
                                    "type": ""
                                },
                                {
                                    "name": "dataEnd",
                                    "nativeSrc": "5244:7:13",
                                    "nodeType": "YulTypedName",
                                    "src": "5244:7:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "value0",
                                    "nativeSrc": "5256:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "5256:6:13",
                                    "type": ""
                                },
                                {
                                    "name": "value1",
                                    "nativeSrc": "5264:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "5264:6:13",
                                    "type": ""
                                }
                            ],
                            "src": "5188:474:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "5696:152:13",
                                "nodeType": "YulBlock",
                                "src": "5696:152:13",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "5713:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5713:1:13",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "5716:77:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5716:77:13",
                                                    "type": "",
                                                    "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nativeSrc": "5706:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "5706:6:13"
                                            },
                                            "nativeSrc": "5706:88:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "5706:88:13"
                                        },
                                        "nativeSrc": "5706:88:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "5706:88:13"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "5810:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5810:1:13",
                                                    "type": "",
                                                    "value": "4"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "5813:4:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5813:4:13",
                                                    "type": "",
                                                    "value": "0x22"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nativeSrc": "5803:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "5803:6:13"
                                            },
                                            "nativeSrc": "5803:15:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "5803:15:13"
                                        },
                                        "nativeSrc": "5803:15:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "5803:15:13"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "5834:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5834:1:13",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "5837:4:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5837:4:13",
                                                    "type": "",
                                                    "value": "0x24"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nativeSrc": "5827:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "5827:6:13"
                                            },
                                            "nativeSrc": "5827:15:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "5827:15:13"
                                        },
                                        "nativeSrc": "5827:15:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "5827:15:13"
                                    }
                                ]
                            },
                            "name": "panic_error_0x22",
                            "nativeSrc": "5668:180:13",
                            "nodeType": "YulFunctionDefinition",
                            "src": "5668:180:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "5905:269:13",
                                "nodeType": "YulBlock",
                                "src": "5905:269:13",
                                "statements": [
                                    {
                                        "nativeSrc": "5915:22:13",
                                        "nodeType": "YulAssignment",
                                        "src": "5915:22:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "data",
                                                    "nativeSrc": "5929:4:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5929:4:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "5935:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5935:1:13",
                                                    "type": "",
                                                    "value": "2"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "div",
                                                "nativeSrc": "5925:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "5925:3:13"
                                            },
                                            "nativeSrc": "5925:12:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "5925:12:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "length",
                                                "nativeSrc": "5915:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "5915:6:13"
                                            }
                                        ]
                                    },
                                    {
                                        "nativeSrc": "5946:38:13",
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "5946:38:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "data",
                                                    "nativeSrc": "5976:4:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5976:4:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "5982:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5982:1:13",
                                                    "type": "",
                                                    "value": "1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "and",
                                                "nativeSrc": "5972:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "5972:3:13"
                                            },
                                            "nativeSrc": "5972:12:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "5972:12:13"
                                        },
                                        "variables": [
                                            {
                                                "name": "outOfPlaceEncoding",
                                                "nativeSrc": "5950:18:13",
                                                "nodeType": "YulTypedName",
                                                "src": "5950:18:13",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "body": {
                                            "nativeSrc": "6023:51:13",
                                            "nodeType": "YulBlock",
                                            "src": "6023:51:13",
                                            "statements": [
                                                {
                                                    "nativeSrc": "6037:27:13",
                                                    "nodeType": "YulAssignment",
                                                    "src": "6037:27:13",
                                                    "value": {
                                                        "arguments": [
                                                            {
                                                                "name": "length",
                                                                "nativeSrc": "6051:6:13",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6051:6:13"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nativeSrc": "6059:4:13",
                                                                "nodeType": "YulLiteral",
                                                                "src": "6059:4:13",
                                                                "type": "",
                                                                "value": "0x7f"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "and",
                                                            "nativeSrc": "6047:3:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "6047:3:13"
                                                        },
                                                        "nativeSrc": "6047:17:13",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "6047:17:13"
                                                    },
                                                    "variableNames": [
                                                        {
                                                            "name": "length",
                                                            "nativeSrc": "6037:6:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "6037:6:13"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "name": "outOfPlaceEncoding",
                                                    "nativeSrc": "6003:18:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6003:18:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "iszero",
                                                "nativeSrc": "5996:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "5996:6:13"
                                            },
                                            "nativeSrc": "5996:26:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "5996:26:13"
                                        },
                                        "nativeSrc": "5993:81:13",
                                        "nodeType": "YulIf",
                                        "src": "5993:81:13"
                                    },
                                    {
                                        "body": {
                                            "nativeSrc": "6126:42:13",
                                            "nodeType": "YulBlock",
                                            "src": "6126:42:13",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "panic_error_0x22",
                                                            "nativeSrc": "6140:16:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "6140:16:13"
                                                        },
                                                        "nativeSrc": "6140:18:13",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "6140:18:13"
                                                    },
                                                    "nativeSrc": "6140:18:13",
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "6140:18:13"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "name": "outOfPlaceEncoding",
                                                    "nativeSrc": "6090:18:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6090:18:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "length",
                                                            "nativeSrc": "6113:6:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "6113:6:13"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "6121:2:13",
                                                            "nodeType": "YulLiteral",
                                                            "src": "6121:2:13",
                                                            "type": "",
                                                            "value": "32"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "lt",
                                                        "nativeSrc": "6110:2:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6110:2:13"
                                                    },
                                                    "nativeSrc": "6110:14:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6110:14:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "eq",
                                                "nativeSrc": "6087:2:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6087:2:13"
                                            },
                                            "nativeSrc": "6087:38:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "6087:38:13"
                                        },
                                        "nativeSrc": "6084:84:13",
                                        "nodeType": "YulIf",
                                        "src": "6084:84:13"
                                    }
                                ]
                            },
                            "name": "extract_byte_array_length",
                            "nativeSrc": "5854:320:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "data",
                                    "nativeSrc": "5889:4:13",
                                    "nodeType": "YulTypedName",
                                    "src": "5889:4:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "length",
                                    "nativeSrc": "5898:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "5898:6:13",
                                    "type": ""
                                }
                            ],
                            "src": "5854:320:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "6245:53:13",
                                "nodeType": "YulBlock",
                                "src": "6245:53:13",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "pos",
                                                    "nativeSrc": "6262:3:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6262:3:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nativeSrc": "6285:5:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "6285:5:13"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "cleanup_t_address",
                                                        "nativeSrc": "6267:17:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6267:17:13"
                                                    },
                                                    "nativeSrc": "6267:24:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6267:24:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nativeSrc": "6255:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6255:6:13"
                                            },
                                            "nativeSrc": "6255:37:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "6255:37:13"
                                        },
                                        "nativeSrc": "6255:37:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "6255:37:13"
                                    }
                                ]
                            },
                            "name": "abi_encode_t_address_to_t_address_fromStack",
                            "nativeSrc": "6180:118:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nativeSrc": "6233:5:13",
                                    "nodeType": "YulTypedName",
                                    "src": "6233:5:13",
                                    "type": ""
                                },
                                {
                                    "name": "pos",
                                    "nativeSrc": "6240:3:13",
                                    "nodeType": "YulTypedName",
                                    "src": "6240:3:13",
                                    "type": ""
                                }
                            ],
                            "src": "6180:118:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "6458:288:13",
                                "nodeType": "YulBlock",
                                "src": "6458:288:13",
                                "statements": [
                                    {
                                        "nativeSrc": "6468:26:13",
                                        "nodeType": "YulAssignment",
                                        "src": "6468:26:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "headStart",
                                                    "nativeSrc": "6480:9:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6480:9:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "6491:2:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "6491:2:13",
                                                    "type": "",
                                                    "value": "96"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nativeSrc": "6476:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6476:3:13"
                                            },
                                            "nativeSrc": "6476:18:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "6476:18:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "tail",
                                                "nativeSrc": "6468:4:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6468:4:13"
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "value0",
                                                    "nativeSrc": "6548:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6548:6:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "headStart",
                                                            "nativeSrc": "6561:9:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "6561:9:13"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "6572:1:13",
                                                            "nodeType": "YulLiteral",
                                                            "src": "6572:1:13",
                                                            "type": "",
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nativeSrc": "6557:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6557:3:13"
                                                    },
                                                    "nativeSrc": "6557:17:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6557:17:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "abi_encode_t_address_to_t_address_fromStack",
                                                "nativeSrc": "6504:43:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6504:43:13"
                                            },
                                            "nativeSrc": "6504:71:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "6504:71:13"
                                        },
                                        "nativeSrc": "6504:71:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "6504:71:13"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "value1",
                                                    "nativeSrc": "6629:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6629:6:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "headStart",
                                                            "nativeSrc": "6642:9:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "6642:9:13"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "6653:2:13",
                                                            "nodeType": "YulLiteral",
                                                            "src": "6653:2:13",
                                                            "type": "",
                                                            "value": "32"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nativeSrc": "6638:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6638:3:13"
                                                    },
                                                    "nativeSrc": "6638:18:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6638:18:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                                                "nativeSrc": "6585:43:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6585:43:13"
                                            },
                                            "nativeSrc": "6585:72:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "6585:72:13"
                                        },
                                        "nativeSrc": "6585:72:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "6585:72:13"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "value2",
                                                    "nativeSrc": "6711:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6711:6:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "headStart",
                                                            "nativeSrc": "6724:9:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "6724:9:13"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "6735:2:13",
                                                            "nodeType": "YulLiteral",
                                                            "src": "6735:2:13",
                                                            "type": "",
                                                            "value": "64"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nativeSrc": "6720:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6720:3:13"
                                                    },
                                                    "nativeSrc": "6720:18:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6720:18:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                                                "nativeSrc": "6667:43:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6667:43:13"
                                            },
                                            "nativeSrc": "6667:72:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "6667:72:13"
                                        },
                                        "nativeSrc": "6667:72:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "6667:72:13"
                                    }
                                ]
                            },
                            "name": "abi_encode_tuple_t_address_t_uint256_t_uint256__to_t_address_t_uint256_t_uint256__fromStack_reversed",
                            "nativeSrc": "6304:442:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "headStart",
                                    "nativeSrc": "6414:9:13",
                                    "nodeType": "YulTypedName",
                                    "src": "6414:9:13",
                                    "type": ""
                                },
                                {
                                    "name": "value2",
                                    "nativeSrc": "6426:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "6426:6:13",
                                    "type": ""
                                },
                                {
                                    "name": "value1",
                                    "nativeSrc": "6434:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "6434:6:13",
                                    "type": ""
                                },
                                {
                                    "name": "value0",
                                    "nativeSrc": "6442:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "6442:6:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "tail",
                                    "nativeSrc": "6453:4:13",
                                    "nodeType": "YulTypedName",
                                    "src": "6453:4:13",
                                    "type": ""
                                }
                            ],
                            "src": "6304:442:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "6850:124:13",
                                "nodeType": "YulBlock",
                                "src": "6850:124:13",
                                "statements": [
                                    {
                                        "nativeSrc": "6860:26:13",
                                        "nodeType": "YulAssignment",
                                        "src": "6860:26:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "headStart",
                                                    "nativeSrc": "6872:9:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6872:9:13"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "6883:2:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "6883:2:13",
                                                    "type": "",
                                                    "value": "32"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nativeSrc": "6868:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6868:3:13"
                                            },
                                            "nativeSrc": "6868:18:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "6868:18:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "tail",
                                                "nativeSrc": "6860:4:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6860:4:13"
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "value0",
                                                    "nativeSrc": "6940:6:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6940:6:13"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "headStart",
                                                            "nativeSrc": "6953:9:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "6953:9:13"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "6964:1:13",
                                                            "nodeType": "YulLiteral",
                                                            "src": "6964:1:13",
                                                            "type": "",
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nativeSrc": "6949:3:13",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6949:3:13"
                                                    },
                                                    "nativeSrc": "6949:17:13",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "6949:17:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "abi_encode_t_address_to_t_address_fromStack",
                                                "nativeSrc": "6896:43:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "6896:43:13"
                                            },
                                            "nativeSrc": "6896:71:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "6896:71:13"
                                        },
                                        "nativeSrc": "6896:71:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "6896:71:13"
                                    }
                                ]
                            },
                            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                            "nativeSrc": "6752:222:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "headStart",
                                    "nativeSrc": "6822:9:13",
                                    "nodeType": "YulTypedName",
                                    "src": "6822:9:13",
                                    "type": ""
                                },
                                {
                                    "name": "value0",
                                    "nativeSrc": "6834:6:13",
                                    "nodeType": "YulTypedName",
                                    "src": "6834:6:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "tail",
                                    "nativeSrc": "6845:4:13",
                                    "nodeType": "YulTypedName",
                                    "src": "6845:4:13",
                                    "type": ""
                                }
                            ],
                            "src": "6752:222:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "7008:152:13",
                                "nodeType": "YulBlock",
                                "src": "7008:152:13",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "7025:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "7025:1:13",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "7028:77:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "7028:77:13",
                                                    "type": "",
                                                    "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nativeSrc": "7018:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "7018:6:13"
                                            },
                                            "nativeSrc": "7018:88:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "7018:88:13"
                                        },
                                        "nativeSrc": "7018:88:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "7018:88:13"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "7122:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "7122:1:13",
                                                    "type": "",
                                                    "value": "4"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "7125:4:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "7125:4:13",
                                                    "type": "",
                                                    "value": "0x11"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nativeSrc": "7115:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "7115:6:13"
                                            },
                                            "nativeSrc": "7115:15:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "7115:15:13"
                                        },
                                        "nativeSrc": "7115:15:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "7115:15:13"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "7146:1:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "7146:1:13",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nativeSrc": "7149:4:13",
                                                    "nodeType": "YulLiteral",
                                                    "src": "7149:4:13",
                                                    "type": "",
                                                    "value": "0x24"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nativeSrc": "7139:6:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "7139:6:13"
                                            },
                                            "nativeSrc": "7139:15:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "7139:15:13"
                                        },
                                        "nativeSrc": "7139:15:13",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "7139:15:13"
                                    }
                                ]
                            },
                            "name": "panic_error_0x11",
                            "nativeSrc": "6980:180:13",
                            "nodeType": "YulFunctionDefinition",
                            "src": "6980:180:13"
                        },
                        {
                            "body": {
                                "nativeSrc": "7210:147:13",
                                "nodeType": "YulBlock",
                                "src": "7210:147:13",
                                "statements": [
                                    {
                                        "nativeSrc": "7220:25:13",
                                        "nodeType": "YulAssignment",
                                        "src": "7220:25:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "x",
                                                    "nativeSrc": "7243:1:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7243:1:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "cleanup_t_uint256",
                                                "nativeSrc": "7225:17:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "7225:17:13"
                                            },
                                            "nativeSrc": "7225:20:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "7225:20:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "x",
                                                "nativeSrc": "7220:1:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "7220:1:13"
                                            }
                                        ]
                                    },
                                    {
                                        "nativeSrc": "7254:25:13",
                                        "nodeType": "YulAssignment",
                                        "src": "7254:25:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "y",
                                                    "nativeSrc": "7277:1:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7277:1:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "cleanup_t_uint256",
                                                "nativeSrc": "7259:17:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "7259:17:13"
                                            },
                                            "nativeSrc": "7259:20:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "7259:20:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "y",
                                                "nativeSrc": "7254:1:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "7254:1:13"
                                            }
                                        ]
                                    },
                                    {
                                        "nativeSrc": "7288:16:13",
                                        "nodeType": "YulAssignment",
                                        "src": "7288:16:13",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "x",
                                                    "nativeSrc": "7299:1:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7299:1:13"
                                                },
                                                {
                                                    "name": "y",
                                                    "nativeSrc": "7302:1:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7302:1:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nativeSrc": "7295:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "7295:3:13"
                                            },
                                            "nativeSrc": "7295:9:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "7295:9:13"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "sum",
                                                "nativeSrc": "7288:3:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "7288:3:13"
                                            }
                                        ]
                                    },
                                    {
                                        "body": {
                                            "nativeSrc": "7328:22:13",
                                            "nodeType": "YulBlock",
                                            "src": "7328:22:13",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "panic_error_0x11",
                                                            "nativeSrc": "7330:16:13",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "7330:16:13"
                                                        },
                                                        "nativeSrc": "7330:18:13",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "7330:18:13"
                                                    },
                                                    "nativeSrc": "7330:18:13",
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "7330:18:13"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "name": "x",
                                                    "nativeSrc": "7320:1:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7320:1:13"
                                                },
                                                {
                                                    "name": "sum",
                                                    "nativeSrc": "7323:3:13",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7323:3:13"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "gt",
                                                "nativeSrc": "7317:2:13",
                                                "nodeType": "YulIdentifier",
                                                "src": "7317:2:13"
                                            },
                                            "nativeSrc": "7317:10:13",
                                            "nodeType": "YulFunctionCall",
                                            "src": "7317:10:13"
                                        },
                                        "nativeSrc": "7314:36:13",
                                        "nodeType": "YulIf",
                                        "src": "7314:36:13"
                                    }
                                ]
                            },
                            "name": "checked_add_t_uint256",
                            "nativeSrc": "7166:191:13",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "x",
                                    "nativeSrc": "7197:1:13",
                                    "nodeType": "YulTypedName",
                                    "src": "7197:1:13",
                                    "type": ""
                                },
                                {
                                    "name": "y",
                                    "nativeSrc": "7200:1:13",
                                    "nodeType": "YulTypedName",
                                    "src": "7200:1:13",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "sum",
                                    "nativeSrc": "7206:3:13",
                                    "nodeType": "YulTypedName",
                                    "src": "7206:3:13",
                                    "type": ""
                                }
                            ],
                            "src": "7166:191:13"
                        }
                    ]
                },
                "contents": "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory_with_cleanup(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        mstore(add(dst, length), 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory_with_cleanup(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint8(value) -> cleaned {\n        cleaned := and(value, 0xff)\n    }\n\n    function abi_encode_t_uint8_to_t_uint8_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint8(value))\n    }\n\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint8_to_t_uint8_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address_t_uint256_t_uint256__to_t_address_t_uint256_t_uint256__fromStack_reversed(headStart , value2, value1, value0) -> tail {\n        tail := add(headStart, 96)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        sum := add(x, y)\n\n        if gt(x, sum) { panic_error_0x11() }\n\n    }\n\n}\n",
                "id": 13,
                "language": "Yul",
                "name": "#utility.yul"
            }
        ],
        "sourceMap": "86:244:8:-:0;;;122:205;;;;;;;;;;1896:113:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1970:5;1962;:13;;;;;;:::i;:::-;;1995:7;1985;:17;;;;;;:::i;:::-;;1896:113;;210:44:8::1;216:10;228:25;210:5;;;:44;;;:::i;:::-;86:244:::0;;7721:208:1;7810:1;7791:21;;:7;:21;;;7787:91;;7864:1;7835:32;;;;;;;;;;;:::i;:::-;;;;;;;;7787:91;7887:35;7903:1;7907:7;7916:5;7887:7;;;:35;;;:::i;:::-;7721:208;;:::o;6271:1107::-;6376:1;6360:18;;:4;:18;;;6356:540;;6512:5;6496:12;;:21;;;;;;;:::i;:::-;;;;;;;;6356:540;;;6548:19;6570:9;:15;6580:4;6570:15;;;;;;;;;;;;;;;;6548:37;;6617:5;6603:11;:19;6599:115;;;6674:4;6680:11;6693:5;6649:50;;;;;;;;;;;;;:::i;:::-;;;;;;;;6599:115;6866:5;6852:11;:19;6834:9;:15;6844:4;6834:15;;;;;;;;;;;;;;;:37;;;;6534:362;6356:540;6924:1;6910:16;;:2;:16;;;6906:425;;7089:5;7073:12;;:21;;;;;;;;;;;6906:425;;;7301:5;7284:9;:13;7294:2;7284:13;;;;;;;;;;;;;;;;:22;;;;;;;;;;;6906:425;7361:2;7346:25;;7355:4;7346:25;;;7365:5;7346:25;;;;;;:::i;:::-;;;;;;;;6271:1107;;;:::o;7:99:13:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:180::-;160:77;157:1;150:88;257:4;254:1;247:15;281:4;278:1;271:15;298:180;346:77;343:1;336:88;443:4;440:1;433:15;467:4;464:1;457:15;484:320;528:6;565:1;559:4;555:12;545:22;;612:1;606:4;602:12;633:18;623:81;;689:4;681:6;677:17;667:27;;623:81;751:2;743:6;740:14;720:18;717:38;714:84;;770:18;;:::i;:::-;714:84;535:269;484:320;;;:::o;810:141::-;859:4;882:3;874:11;;905:3;902:1;895:14;939:4;936:1;926:18;918:26;;810:141;;;:::o;957:93::-;994:6;1041:2;1036;1029:5;1025:14;1021:23;1011:33;;957:93;;;:::o;1056:115::-;1100:8;1158:4;1155:1;1151:12;1144:5;1140:24;1119:45;;1056:115;;;;:::o;1177:393::-;1246:6;1296:1;1284:10;1280:18;1319:97;1349:66;1338:9;1319:97;:::i;:::-;1437:39;1467:8;1456:9;1437:39;:::i;:::-;1425:51;;1509:4;1505:9;1498:5;1494:21;1485:30;;1558:4;1548:8;1544:19;1537:5;1534:30;1524:40;;1253:317;;1177:393;;;;;:::o;1576:77::-;1613:7;1642:5;1631:16;;1576:77;;;:::o;1659:60::-;1687:3;1708:5;1701:12;;1659:60;;;:::o;1725:142::-;1775:9;1808:53;1826:34;1835:24;1853:5;1835:24;:::i;:::-;1826:34;:::i;:::-;1808:53;:::i;:::-;1795:66;;1725:142;;;:::o;1873:75::-;1916:3;1937:5;1930:12;;1873:75;;;:::o;1954:269::-;2064:39;2095:7;2064:39;:::i;:::-;2125:91;2174:41;2198:16;2174:41;:::i;:::-;2166:6;2159:4;2153:11;2125:91;:::i;:::-;2119:4;2112:105;2030:193;1954:269;;;:::o;2229:73::-;2274:3;2229:73;:::o;2308:189::-;2385:32;;:::i;:::-;2426:65;2484:6;2476;2470:4;2426:65;:::i;:::-;2361:136;2308:189;;:::o;2503:186::-;2563:120;2580:3;2573:5;2570:14;2563:120;;;2634:39;2671:1;2664:5;2634:39;:::i;:::-;2607:1;2600:5;2596:13;2587:22;;2563:120;;;2503:186;;:::o;2695:543::-;2796:2;2791:3;2788:11;2785:446;;;2830:38;2862:5;2830:38;:::i;:::-;2914:29;2932:10;2914:29;:::i;:::-;2904:8;2900:44;3097:2;3085:10;3082:18;3079:49;;;3118:8;3103:23;;3079:49;3141:80;3197:22;3215:3;3197:22;:::i;:::-;3187:8;3183:37;3170:11;3141:80;:::i;:::-;2800:431;;2785:446;2695:543;;;:::o;3244:125::-;3298:8;3356:4;3353:1;3349:12;3342:5;3338:24;3317:45;;3244:125;;;;:::o;3375:169::-;3419:6;3452:51;3500:1;3496:6;3488:5;3485:1;3481:13;3452:51;:::i;:::-;3448:56;3533:4;3527;3523:15;3513:25;;3426:118;3375:169;;;;:::o;3549:295::-;3625:4;3771:29;3796:3;3790:4;3771:29;:::i;:::-;3763:37;;3833:3;3830:1;3826:11;3820:4;3817:21;3809:29;;3549:295;;;;:::o;3849:1395::-;3966:37;3999:3;3966:37;:::i;:::-;4068:18;4060:6;4057:30;4054:56;;;4090:18;;:::i;:::-;4054:56;4134:38;4166:4;4160:11;4134:38;:::i;:::-;4219:67;4279:6;4271;4265:4;4219:67;:::i;:::-;4313:1;4337:4;4324:17;;4369:2;4361:6;4358:14;4386:1;4381:618;;;;5043:1;5060:6;5057:77;;;5109:9;5104:3;5100:19;5094:26;5085:35;;5057:77;5160:67;5220:6;5213:5;5160:67;:::i;:::-;5154:4;5147:81;5016:222;4351:887;;4381:618;4433:4;4429:9;4421:6;4417:22;4467:37;4499:4;4467:37;:::i;:::-;4526:1;4540:208;4554:7;4551:1;4548:14;4540:208;;;4633:9;4628:3;4624:19;4618:26;4610:6;4603:42;4684:1;4676:6;4672:14;4662:24;;4731:2;4720:9;4716:18;4703:31;;4577:4;4574:1;4570:12;4565:17;;4540:208;;;4776:6;4767:7;4764:19;4761:179;;;4834:9;4829:3;4825:19;4819:26;4877:48;4919:4;4911:6;4907:17;4896:9;4877:48;:::i;:::-;4869:6;4862:64;4784:156;4761:179;4986:1;4982;4974:6;4970:14;4966:22;4960:4;4953:36;4388:611;;;4351:887;;3941:1303;;;3849:1395;;:::o;5250:126::-;5287:7;5327:42;5320:5;5316:54;5305:65;;5250:126;;;:::o;5382:96::-;5419:7;5448:24;5466:5;5448:24;:::i;:::-;5437:35;;5382:96;;;:::o;5484:118::-;5571:24;5589:5;5571:24;:::i;:::-;5566:3;5559:37;5484:118;;:::o;5608:222::-;5701:4;5739:2;5728:9;5724:18;5716:26;;5752:71;5820:1;5809:9;5805:17;5796:6;5752:71;:::i;:::-;5608:222;;;;:::o;5836:180::-;5884:77;5881:1;5874:88;5981:4;5978:1;5971:15;6005:4;6002:1;5995:15;6022:191;6062:3;6081:20;6099:1;6081:20;:::i;:::-;6076:25;;6115:20;6133:1;6115:20;:::i;:::-;6110:25;;6158:1;6155;6151:9;6144:16;;6179:3;6176:1;6173:10;6170:36;;;6186:18;;:::i;:::-;6170:36;6022:191;;;;:::o;6219:118::-;6306:24;6324:5;6306:24;:::i;:::-;6301:3;6294:37;6219:118;;:::o;6343:442::-;6492:4;6530:2;6519:9;6515:18;6507:26;;6543:71;6611:1;6600:9;6596:17;6587:6;6543:71;:::i;:::-;6624:72;6692:2;6681:9;6677:18;6668:6;6624:72;:::i;:::-;6706;6774:2;6763:9;6759:18;6750:6;6706:72;:::i;:::-;6343:442;;;;;;:::o;6791:222::-;6884:4;6922:2;6911:9;6907:18;6899:26;;6935:71;7003:1;6992:9;6988:17;6979:6;6935:71;:::i;:::-;6791:222;;;;:::o;86:244:8:-;;;;;;;",
        "deployedSourceMap": "86:244:8:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2074:89:1;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4293:186;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3144:97;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5039:244;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3002:82;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3299:116;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2276:93;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3610:178;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3846:140;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2074:89;2119:13;2151:5;2144:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2074:89;:::o;4293:186::-;4366:4;4382:13;4398:12;:10;:12::i;:::-;4382:28;;4420:31;4429:5;4436:7;4445:5;4420:8;:31::i;:::-;4468:4;4461:11;;;4293:186;;;;:::o;3144:97::-;3196:7;3222:12;;3215:19;;3144:97;:::o;5039:244::-;5126:4;5142:15;5160:12;:10;:12::i;:::-;5142:30;;5182:37;5198:4;5204:7;5213:5;5182:15;:37::i;:::-;5229:26;5239:4;5245:2;5249:5;5229:9;:26::i;:::-;5272:4;5265:11;;;5039:244;;;;;:::o;3002:82::-;3051:5;3075:2;3068:9;;3002:82;:::o;3299:116::-;3364:7;3390:9;:18;3400:7;3390:18;;;;;;;;;;;;;;;;3383:25;;3299:116;;;:::o;2276:93::-;2323:13;2355:7;2348:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2276:93;:::o;3610:178::-;3679:4;3695:13;3711:12;:10;:12::i;:::-;3695:28;;3733:27;3743:5;3750:2;3754:5;3733:9;:27::i;:::-;3777:4;3770:11;;;3610:178;;;;:::o;3846:140::-;3926:7;3952:11;:18;3964:5;3952:18;;;;;;;;;;;;;;;:27;3971:7;3952:27;;;;;;;;;;;;;;;;3945:34;;3846:140;;;;:::o;656:96:7:-;709:7;735:10;728:17;;656:96;:::o;8989:128:1:-;9073:37;9082:5;9089:7;9098:5;9105:4;9073:8;:37::i;:::-;8989:128;;;:::o;10663:477::-;10762:24;10789:25;10799:5;10806:7;10789:9;:25::i;:::-;10762:52;;10848:17;10828:16;:37;10824:310;;10904:5;10885:16;:24;10881:130;;;10963:7;10972:16;10990:5;10936:60;;;;;;;;;;;;;:::i;:::-;;;;;;;;10881:130;11052:57;11061:5;11068:7;11096:5;11077:16;:24;11103:5;11052:8;:57::i;:::-;10824:310;10752:388;10663:477;;;:::o;5656:300::-;5755:1;5739:18;;:4;:18;;;5735:86;;5807:1;5780:30;;;;;;;;;;;:::i;:::-;;;;;;;;5735:86;5848:1;5834:16;;:2;:16;;;5830:86;;5902:1;5873:32;;;;;;;;;;;:::i;:::-;;;;;;;;5830:86;5925:24;5933:4;5939:2;5943:5;5925:7;:24::i;:::-;5656:300;;;:::o;9949:432::-;10078:1;10061:19;;:5;:19;;;10057:89;;10132:1;10103:32;;;;;;;;;;;:::i;:::-;;;;;;;;10057:89;10178:1;10159:21;;:7;:21;;;10155:90;;10231:1;10203:31;;;;;;;;;;;:::i;:::-;;;;;;;;10155:90;10284:5;10254:11;:18;10266:5;10254:18;;;;;;;;;;;;;;;:27;10273:7;10254:27;;;;;;;;;;;;;;;:35;;;;10303:9;10299:76;;;10349:7;10333:31;;10342:5;10333:31;;;10358:5;10333:31;;;;;;:::i;:::-;;;;;;;;10299:76;9949:432;;;;:::o;6271:1107::-;6376:1;6360:18;;:4;:18;;;6356:540;;6512:5;6496:12;;:21;;;;;;;:::i;:::-;;;;;;;;6356:540;;;6548:19;6570:9;:15;6580:4;6570:15;;;;;;;;;;;;;;;;6548:37;;6617:5;6603:11;:19;6599:115;;;6674:4;6680:11;6693:5;6649:50;;;;;;;;;;;;;:::i;:::-;;;;;;;;6599:115;6866:5;6852:11;:19;6834:9;:15;6844:4;6834:15;;;;;;;;;;;;;;;:37;;;;6534:362;6356:540;6924:1;6910:16;;:2;:16;;;6906:425;;7089:5;7073:12;;:21;;;;;;;;;;;6906:425;;;7301:5;7284:9;:13;7294:2;7284:13;;;;;;;;;;;;;;;;:22;;;;;;;;;;;6906:425;7361:2;7346:25;;7355:4;7346:25;;;7365:5;7346:25;;;;;;:::i;:::-;;;;;;;;6271:1107;;;:::o;7:99:13:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:169::-;196:11;230:6;225:3;218:19;270:4;265:3;261:14;246:29;;112:169;;;;:::o;287:246::-;368:1;378:113;392:6;389:1;386:13;378:113;;;477:1;472:3;468:11;462:18;458:1;453:3;449:11;442:39;414:2;411:1;407:10;402:15;;378:113;;;525:1;516:6;511:3;507:16;500:27;349:184;287:246;;;:::o;539:102::-;580:6;631:2;627:7;622:2;615:5;611:14;607:28;597:38;;539:102;;;:::o;647:377::-;735:3;763:39;796:5;763:39;:::i;:::-;818:71;882:6;877:3;818:71;:::i;:::-;811:78;;898:65;956:6;951:3;944:4;937:5;933:16;898:65;:::i;:::-;988:29;1010:6;988:29;:::i;:::-;983:3;979:39;972:46;;739:285;647:377;;;;:::o;1030:313::-;1143:4;1181:2;1170:9;1166:18;1158:26;;1230:9;1224:4;1220:20;1216:1;1205:9;1201:17;1194:47;1258:78;1331:4;1322:6;1258:78;:::i;:::-;1250:86;;1030:313;;;;:::o;1430:117::-;1539:1;1536;1529:12;1676:126;1713:7;1753:42;1746:5;1742:54;1731:65;;1676:126;;;:::o;1808:96::-;1845:7;1874:24;1892:5;1874:24;:::i;:::-;1863:35;;1808:96;;;:::o;1910:122::-;1983:24;2001:5;1983:24;:::i;:::-;1976:5;1973:35;1963:63;;2022:1;2019;2012:12;1963:63;1910:122;:::o;2038:139::-;2084:5;2122:6;2109:20;2100:29;;2138:33;2165:5;2138:33;:::i;:::-;2038:139;;;;:::o;2183:77::-;2220:7;2249:5;2238:16;;2183:77;;;:::o;2266:122::-;2339:24;2357:5;2339:24;:::i;:::-;2332:5;2329:35;2319:63;;2378:1;2375;2368:12;2319:63;2266:122;:::o;2394:139::-;2440:5;2478:6;2465:20;2456:29;;2494:33;2521:5;2494:33;:::i;:::-;2394:139;;;;:::o;2539:474::-;2607:6;2615;2664:2;2652:9;2643:7;2639:23;2635:32;2632:119;;;2670:79;;:::i;:::-;2632:119;2790:1;2815:53;2860:7;2851:6;2840:9;2836:22;2815:53;:::i;:::-;2805:63;;2761:117;2917:2;2943:53;2988:7;2979:6;2968:9;2964:22;2943:53;:::i;:::-;2933:63;;2888:118;2539:474;;;;;:::o;3019:90::-;3053:7;3096:5;3089:13;3082:21;3071:32;;3019:90;;;:::o;3115:109::-;3196:21;3211:5;3196:21;:::i;:::-;3191:3;3184:34;3115:109;;:::o;3230:210::-;3317:4;3355:2;3344:9;3340:18;3332:26;;3368:65;3430:1;3419:9;3415:17;3406:6;3368:65;:::i;:::-;3230:210;;;;:::o;3446:118::-;3533:24;3551:5;3533:24;:::i;:::-;3528:3;3521:37;3446:118;;:::o;3570:222::-;3663:4;3701:2;3690:9;3686:18;3678:26;;3714:71;3782:1;3771:9;3767:17;3758:6;3714:71;:::i;:::-;3570:222;;;;:::o;3798:619::-;3875:6;3883;3891;3940:2;3928:9;3919:7;3915:23;3911:32;3908:119;;;3946:79;;:::i;:::-;3908:119;4066:1;4091:53;4136:7;4127:6;4116:9;4112:22;4091:53;:::i;:::-;4081:63;;4037:117;4193:2;4219:53;4264:7;4255:6;4244:9;4240:22;4219:53;:::i;:::-;4209:63;;4164:118;4321:2;4347:53;4392:7;4383:6;4372:9;4368:22;4347:53;:::i;:::-;4337:63;;4292:118;3798:619;;;;;:::o;4423:86::-;4458:7;4498:4;4491:5;4487:16;4476:27;;4423:86;;;:::o;4515:112::-;4598:22;4614:5;4598:22;:::i;:::-;4593:3;4586:35;4515:112;;:::o;4633:214::-;4722:4;4760:2;4749:9;4745:18;4737:26;;4773:67;4837:1;4826:9;4822:17;4813:6;4773:67;:::i;:::-;4633:214;;;;:::o;4853:329::-;4912:6;4961:2;4949:9;4940:7;4936:23;4932:32;4929:119;;;4967:79;;:::i;:::-;4929:119;5087:1;5112:53;5157:7;5148:6;5137:9;5133:22;5112:53;:::i;:::-;5102:63;;5058:117;4853:329;;;;:::o;5188:474::-;5256:6;5264;5313:2;5301:9;5292:7;5288:23;5284:32;5281:119;;;5319:79;;:::i;:::-;5281:119;5439:1;5464:53;5509:7;5500:6;5489:9;5485:22;5464:53;:::i;:::-;5454:63;;5410:117;5566:2;5592:53;5637:7;5628:6;5617:9;5613:22;5592:53;:::i;:::-;5582:63;;5537:118;5188:474;;;;;:::o;5668:180::-;5716:77;5713:1;5706:88;5813:4;5810:1;5803:15;5837:4;5834:1;5827:15;5854:320;5898:6;5935:1;5929:4;5925:12;5915:22;;5982:1;5976:4;5972:12;6003:18;5993:81;;6059:4;6051:6;6047:17;6037:27;;5993:81;6121:2;6113:6;6110:14;6090:18;6087:38;6084:84;;6140:18;;:::i;:::-;6084:84;5905:269;5854:320;;;:::o;6180:118::-;6267:24;6285:5;6267:24;:::i;:::-;6262:3;6255:37;6180:118;;:::o;6304:442::-;6453:4;6491:2;6480:9;6476:18;6468:26;;6504:71;6572:1;6561:9;6557:17;6548:6;6504:71;:::i;:::-;6585:72;6653:2;6642:9;6638:18;6629:6;6585:72;:::i;:::-;6667;6735:2;6724:9;6720:18;6711:6;6667:72;:::i;:::-;6304:442;;;;;;:::o;6752:222::-;6845:4;6883:2;6872:9;6868:18;6860:26;;6896:71;6964:1;6953:9;6949:17;6940:6;6896:71;:::i;:::-;6752:222;;;;:::o;6980:180::-;7028:77;7025:1;7018:88;7125:4;7122:1;7115:15;7149:4;7146:1;7139:15;7166:191;7206:3;7225:20;7243:1;7225:20;:::i;:::-;7220:25;;7259:20;7277:1;7259:20;:::i;:::-;7254:25;;7302:1;7299;7295:9;7288:16;;7323:3;7320:1;7317:10;7314:36;;;7330:18;;:::i;:::-;7314:36;7166:191;;;;:::o",
        "source": "pragma solidity ^0.8.0;\r\n\r\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\r\n\r\ncontract CarbonCoin is ERC20 {\r\n    constructor() public ERC20(\"CarbonCoin\", \"CC\"){ // 设置名称和符号参数\r\n        _mint(msg.sender, 1000000000000000000000000); //ERC代币默认使用18位小数，此处发行100万个代币\r\n    }\r\n}\r\n",
        "sourcePath": "G:\\CNTS\\carbon-neutral-trading-system\\truffle\\contracts\\CarbonCoin.sol",
        "ast": {
            "absolutePath": "project:/contracts/CarbonCoin.sol",
            "exportedSymbols": {
                "CarbonCoin": [
                    1384
                ],
                "Context": [
                    1364
                ],
                "ERC20": [
                    651
                ],
                "IERC20": [
                    729
                ],
                "IERC20Errors": [
                    41
                ],
                "IERC20Metadata": [
                    755
                ]
            },
            "id": 1385,
            "nodeType": "SourceUnit",
            "nodes": [
                {
                    "id": 1366,
                    "literals": [
                        "solidity",
                        "^",
                        "0.8",
                        ".0"
                    ],
                    "nodeType": "PragmaDirective",
                    "src": "0:23:8"
                },
                {
                    "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
                    "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
                    "id": 1367,
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "ImportDirective",
                    "scope": 1385,
                    "sourceUnit": 652,
                    "src": "27:55:8",
                    "symbolAliases": [],
                    "unitAlias": ""
                },
                {
                    "abstract": false,
                    "baseContracts": [
                        {
                            "baseName": {
                                "id": 1368,
                                "name": "ERC20",
                                "nameLocations": [
                                    "109:5:8"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 651,
                                "src": "109:5:8"
                            },
                            "id": 1369,
                            "nodeType": "InheritanceSpecifier",
                            "src": "109:5:8"
                        }
                    ],
                    "canonicalName": "CarbonCoin",
                    "contractDependencies": [],
                    "contractKind": "contract",
                    "fullyImplemented": true,
                    "id": 1384,
                    "linearizedBaseContracts": [
                        1384,
                        651,
                        41,
                        755,
                        729,
                        1364
                    ],
                    "name": "CarbonCoin",
                    "nameLocation": "95:10:8",
                    "nodeType": "ContractDefinition",
                    "nodes": [
                        {
                            "body": {
                                "id": 1382,
                                "nodeType": "Block",
                                "src": "168:159:8",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "expression": {
                                                        "id": 1377,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 4294967281,
                                                        "src": "216:3:8",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 1378,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "220:6:8",
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "216:10:8",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                {
                                                    "hexValue": "31303030303030303030303030303030303030303030303030",
                                                    "id": 1379,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "228:25:8",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_1000000000000000000000000_by_1",
                                                        "typeString": "int_const 1000000000000000000000000"
                                                    },
                                                    "value": "1000000000000000000000000"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_rational_1000000000000000000000000_by_1",
                                                        "typeString": "int_const 1000000000000000000000000"
                                                    }
                                                ],
                                                "id": 1376,
                                                "name": "_mint",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 491,
                                                "src": "210:5:8",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                    "typeString": "function (address,uint256)"
                                                }
                                            },
                                            "id": 1380,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "210:44:8",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 1381,
                                        "nodeType": "ExpressionStatement",
                                        "src": "210:44:8"
                                    }
                                ]
                            },
                            "id": 1383,
                            "implemented": true,
                            "kind": "constructor",
                            "modifiers": [
                                {
                                    "arguments": [
                                        {
                                            "hexValue": "436172626f6e436f696e",
                                            "id": 1372,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "string",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "149:12:8",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_stringliteral_c4cff8955da654ede4971415f2f82832f73329de12299c6061ee63ba071fa1c9",
                                                "typeString": "literal_string \"CarbonCoin\""
                                            },
                                            "value": "CarbonCoin"
                                        },
                                        {
                                            "hexValue": "4343",
                                            "id": 1373,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "string",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "163:4:8",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_stringliteral_56d96069d0c85d21b8d789da2cd39ba97ceec51143707e32ecb8343eb4258a9c",
                                                "typeString": "literal_string \"CC\""
                                            },
                                            "value": "CC"
                                        }
                                    ],
                                    "id": 1374,
                                    "kind": "baseConstructorSpecifier",
                                    "modifierName": {
                                        "id": 1371,
                                        "name": "ERC20",
                                        "nameLocations": [
                                            "143:5:8"
                                        ],
                                        "nodeType": "IdentifierPath",
                                        "referencedDeclaration": 651,
                                        "src": "143:5:8"
                                    },
                                    "nodeType": "ModifierInvocation",
                                    "src": "143:25:8"
                                }
                            ],
                            "name": "",
                            "nameLocation": "-1:-1:-1",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 1370,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "133:2:8"
                            },
                            "returnParameters": {
                                "id": 1375,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "168:0:8"
                            },
                            "scope": 1384,
                            "src": "122:205:8",
                            "stateMutability": "nonpayable",
                            "virtual": false,
                            "visibility": "public"
                        }
                    ],
                    "scope": 1385,
                    "src": "86:244:8",
                    "usedErrors": [
                        11,
                        16,
                        21,
                        30,
                        35,
                        40
                    ],
                    "usedEvents": [
                        663,
                        672
                    ]
                }
            ],
            "src": "0:332:8"
        },
        "compiler": {
            "name": "solc",
            "version": "0.8.21+commit.d9974bed.Emscripten.clang"
        },
        "networks": {
            "726": {
                "events": {
                    "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "Approval",
                        "type": "event"
                    },
                    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "Transfer",
                        "type": "event"
                    }
                },
                "links": {},
                "address": "0x97F8d297496E06F11496AB838B3c823250C83Aa9",
                "transactionHash": "0xf989aefa9bf4dcc9704336f3575e03bead83a7697c03d37905e45ffe759e4925"
            },
            "5777": {
                "events": {},
                "links": {},
                "address": "0x372Abdfd53664E9a30fAD43063D7dAaCA9726e39",
                "transactionHash": "0xa78868106f748c1437f32889f30046cf8b0adcd120dfc6e312b532d048064236"
            },
            "1709785676384": {
                "events": {},
                "links": {},
                "address": "0x5BD5Ec6DfF8E73180DA553617b2FeC04231a8D1e",
                "transactionHash": "0xfed02dd82bd717757f464e1830e685578aab16c3a2abd156ed7ed1796401699a"
            },
            "1710223762391": {
                "events": {},
                "links": {},
                "address": "0x5EEb695D4824bea9b410198eEb66Cd755aA5Eac3",
                "transactionHash": "0xfb395098c89b2f01f96df9fdb71f78110bb39fe42cf9df3015a09c5bac971aa0"
            },
            "1710228802188": {
                "events": {},
                "links": {},
                "address": "0x6F2a572447234A65Eb23e52df5F210362b40BB81",
                "transactionHash": "0x3bbf1883ea764328274093149ceed221a8f1eb91fcb885685ca39b4d2c587ee0"
            },
            "1710229111086": {
                "events": {
                    "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "Approval",
                        "type": "event"
                    },
                    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "Transfer",
                        "type": "event"
                    }
                },
                "links": {},
                "address": "0xf2AA0b0DDA45dc6dd6c9db861649598012a26231",
                "transactionHash": "0xf2771cdf631a90d6635f67764af81e6d56da234c908497ca906d3a81b53dbf3a"
            },
            "1710232731331": {
                "events": {
                    "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "Approval",
                        "type": "event"
                    },
                    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "Transfer",
                        "type": "event"
                    }
                },
                "links": {},
                "address": "0x090d32e95413425783b60fCaB805edeA697004e6",
                "transactionHash": "0x0e616a2a8efc9d4b524a6e51a5ca2a0e2edcc5ce336bcb9a449b8a670868b053"
            }
        },
        "schemaVersion": "3.4.16",
        "updatedAt": "2024-03-12T09:44:15.704Z",
        "networkType": "ethereum",
        "devdoc": {
            "errors": {
                "ERC20InsufficientAllowance(address,uint256,uint256)": [
                    {
                        "details": "Indicates a failure with the `spender`’s `allowance`. Used in transfers.",
                        "params": {
                            "allowance": "Amount of tokens a `spender` is allowed to operate with.",
                            "needed": "Minimum amount required to perform a transfer.",
                            "spender": "Address that may be allowed to operate on tokens without being their owner."
                        }
                    }
                ],
                "ERC20InsufficientBalance(address,uint256,uint256)": [
                    {
                        "details": "Indicates an error related to the current `balance` of a `sender`. Used in transfers.",
                        "params": {
                            "balance": "Current balance for the interacting account.",
                            "needed": "Minimum amount required to perform a transfer.",
                            "sender": "Address whose tokens are being transferred."
                        }
                    }
                ],
                "ERC20InvalidApprover(address)": [
                    {
                        "details": "Indicates a failure with the `approver` of a token to be approved. Used in approvals.",
                        "params": {
                            "approver": "Address initiating an approval operation."
                        }
                    }
                ],
                "ERC20InvalidReceiver(address)": [
                    {
                        "details": "Indicates a failure with the token `receiver`. Used in transfers.",
                        "params": {
                            "receiver": "Address to which tokens are being transferred."
                        }
                    }
                ],
                "ERC20InvalidSender(address)": [
                    {
                        "details": "Indicates a failure with the token `sender`. Used in transfers.",
                        "params": {
                            "sender": "Address whose tokens are being transferred."
                        }
                    }
                ],
                "ERC20InvalidSpender(address)": [
                    {
                        "details": "Indicates a failure with the `spender` to be approved. Used in approvals.",
                        "params": {
                            "spender": "Address that may be allowed to operate on tokens without being their owner."
                        }
                    }
                ]
            },
            "events": {
                "Approval(address,address,uint256)": {
                    "details": "Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance."
                },
                "Transfer(address,address,uint256)": {
                    "details": "Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero."
                }
            },
            "kind": "dev",
            "methods": {
                "allowance(address,address)": {
                    "details": "See {IERC20-allowance}."
                },
                "approve(address,uint256)": {
                    "details": "See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."
                },
                "balanceOf(address)": {
                    "details": "See {IERC20-balanceOf}."
                },
                "decimals()": {
                    "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
                },
                "name()": {
                    "details": "Returns the name of the token."
                },
                "symbol()": {
                    "details": "Returns the symbol of the token, usually a shorter version of the name."
                },
                "totalSupply()": {
                    "details": "See {IERC20-totalSupply}."
                },
                "transfer(address,uint256)": {
                    "details": "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `value`."
                },
                "transferFrom(address,address,uint256)": {
                    "details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `value`. - the caller must have allowance for ``from``'s tokens of at least `value`."
                }
            },
            "version": 1
        },
        "userdoc": {
            "kind": "user",
            "methods": {},
            "version": 1
        }
    }
]
export default App;