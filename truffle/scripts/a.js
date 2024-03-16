// const Web3 = require('web3');
const CarbonCoin = artifacts.require("CarbonCoin")
const CarbonCredits = artifacts.require("CarbonCredits")
// const web3 = new Web3('http://119.23.143.76:8545');
// const web3 = new Web3('http://localhost:8545');

const accounts = ["0x96a0cfE920bF1CcD1ef1cAe4b9592C41334CaC81",
                  "0xeca22D8b437C94c15C26CbA5EDbAF736Ff2fc214",
                  "0xfE903511B4d04aAD828c3473cf5253d6F61eaF65"]

module.exports = async function (callback) {
    const carbonCoin = await CarbonCoin.deployed()
    const carbonCredits = await CarbonCredits.deployed()

    balanceBeforeAccount0 = await carbonCoin.balanceOf(accounts[0])
    console.log(web3.utils.fromWei(balanceBeforeAccount0.toString()))



    // -- issue allowance
    // await carbonCredits.issueCarbonAllowance(accounts[0],accounts[1],1000)
    // await carbonCredits.issueCarbonAllowance(accounts[0],accounts[2],100)
    // allownance1 = await carbonCredits.allowanceOf(accounts[1])
    // allownance2 = await carbonCredits.allowanceOf(accounts[2])
    // console.log(
    //     "Allowance of account1 is "+
    //     allownance1.toString()
    // )
    // console.log(
    //     "Allowance of account2 is "+
    //     allownance2.toString()
    // )


    // -- transaction
    allownanceBefore1 = await carbonCredits.allowanceOf(accounts[1])
    allownanceBefore2 = await carbonCredits.allowanceOf(accounts[2])
    console.log(
        "Allowance of account1 before is "+
        allownanceBefore1.toString()
    )
    console.log(
        "Allowance of account2 before is "+
        allownanceBefore2.toString()
    )

    // 授权给合约地址
    await carbonCoin.approve(carbonCredits.address, web3.utils.toWei("100", "ether"))
    const allowanceAfter = await carbonCoin.allowance(accounts[1], carbonCredits.address)
    console.log(
    "Amount of CarbonCoin CarbonCredits is allowed to transfer on our behalf After: " +
        web3.utils.fromWei(allowanceAfter.toString())
    )
    await carbonCredits.carbonTransaction(accounts[2],100,web3.utils.toWei("100", "ether")) // 账户1向账户2购买100额度，价格100碳币
    

    allownanceAfter1 = await carbonCredits.allowanceOf(accounts[1])
    allownanceAfter2 = await carbonCredits.allowanceOf(accounts[2])
    console.log(
        "Allowance of account1 after is "+
        allownanceAfter1.toString()
    )
    console.log(
        "Allowance of account2 after is "+
        allownanceAfter2.toString()
    )



    // -- transfer
    // const carbonCoin = await CarbonCoin.deployed()
    // await carbonCoin.transfer("0x0e9756954Fd80fB81284f1F66aCeda962732ffDD",web3.utils.toWei("100", "ether"), { from: "0xfe9873c13d2e643ffd5135868b40524c1cd7b4fb" })

    callback()
}




// 运行该脚本文件： truffle exec .\scripts\a.js --network cchain