
const { BN, constants, expectEvent, expectRevert, expectThrow } = require('@openzeppelin/test-helpers');
const { ZERO_ADDRESS } = constants;
// const { DATAFILE2} = require('./filedata.json')
var fs = require('fs');

const { expect } = require('chai');
// const { web3 } = require('web3')
const { ethers } = require('ethers');


const TAO = artifacts.require('TAO');
const StakeAmt = process.env.STAKE;
// const UNStakefull = web3.utils.toWei(UNStakeAmt);
const Stakefull = ethers.utils.parseEther(String(StakeAmt));
const wallet = new ethers.Wallet.fromMnemonic(process.env.MNEMONIC);
const addr = wallet.address;


module.exports = async (callback) => {
    const Coin = TAO.at("0x9FD4969573F9DEC7882409709C9B35F2dc3074ca");

    const coin2 = await Coin;
    console.log('TAOcoin contract connected');

    const numapp = ethers.utils.parseEther("100000");  //update if unstaking over 100,000 TAO
    const approval = await coin2.approve(addr, numapp);
    console.log("approval done");
    console.log(approval);

    const txn = await coin2.stake(Stakefull);
    console.log(txn);
    console.log("Staked TAO!")

  }
