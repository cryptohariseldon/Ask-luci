// This script is for one-time Admin use only
// Proof of renounciation: 0x07804616dc9a35b8f131151057f4434803eff6cdf9ea8472e811b1fe7cc148ec

const { BN, constants, expectEvent, expectRevert, expectThrow } = require('@openzeppelin/test-helpers');
const { ZERO_ADDRESS } = constants;
var fs = require('fs');

const { expect } = require('chai');
const { ethers } = require('ethers');


const TAO = artifacts.require('TAO');
const StakeAmt = process.env.STAKE;
// const UNStakefull = web3.utils.toWei(UNStakeAmt);
const Stakefull = ethers.utils.parseEther(String(StakeAmt));
const wallet = new ethers.Wallet.fromMnemonic(process.env.MNEMONIC);
const addr = wallet.address;

function fsReadFileSynchToArray (filePath) {
    var data = JSON.parse(fs.readFileSync(filePath));
    console.log(data);
    return data;
}

module.exports = async (callback) => {
    const Coin = TAO.at("0x9FD4969573F9DEC7882409709C9B35F2dc3074ca");
    // let destadd = '0x4eA82B28708c2428d4FF04bB40cf61ca02EbF721';
    const l = [];
    // console.log('coin connected');

    const coin2 = await Coin;
    console.log('TAOcoin contract connected');


    const txn = await coin2.renounceOwnership();
    // console.log("Staked "+ StakeAmt.toString + "TAO!")
    console.log(txn);
    console.log("Renounced Ownership")
  }
