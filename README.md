# TAO COIN

This is the full Codebase For the TAO Coin and TAO Decentralised Time deposit(staking) contracts - which offer stakers exponential Returns.

Contract is deployed on Polygon Mainnet:
```
0x9FD4969573F9DEC7882409709C9B35F2dc3074ca
```

All users of Quickswap exhange (~133K unique address) have been airdropped TAO tokens as initial liquidity. 75 million tokens have been airdropped, while 25% remain in cold storage at the origin. Further tokens will be minted by the contract only as inflationary rewards to stakers. The airdrop is complete as of August 2nd, 2021. Ownership has been publicly renounced to make the protocol completely immutable.

[Proof of Ownership Renounced: https://polygonscan.com/tx/0x07804616dc9a35b8f131151057f4434803eff6cdf9ea8472e811b1fe7cc148ec]

TAO tests a unique game theory thesis that inflation in supply can actually cause a deflating liquid supply, if it is directed properly. TAO optimises the principles of Monetary Theory to create an asset that:
i) Appreciates in value quickly and massively, tending towards infinite value
ii) Aligns participants towards long-term success of the currency.
iii) Is purely reward based. Stakes can be withdrawn at any time with 0 penalty, apart from missing out on the ever growing bonus interest rate.

Mathematically, TAO offers bonus interest in proportion to the square of the days a person has staked.

# Staking Contract interface

We provide an easy-to-use staking CLI libraries.

First, clone the TAO-lib:
```
git clone https://github.com/cinatra06/TAOcoin
cd TAOcoin
npm install
```

To Stake TAO:

1. Export ENV variables:
```
export MNEMONIC = "mountain clouds ... "
export STAKE=<stake amount in TAO>
```

2. Give stake command:
```
truffle exec StakingLib/Stake.js --network=polygon_mainnet
```
If successful, you will see the transaction details, including transaction hash, printed on your console. Example Staking transaction for 1000 TAO: https://polygonscan.com/tx/0xfc34cfc0233f3a223e1359f71e10034a633585daaf8b55641eec496fa96671b1

To unstake TAO:

1. Export ENV variables:
```
export MNEMONIC="mountain clouds ... "
export UNSTAKE=<unstake amount in TAO>
```

2. Give unstake command:
```
truffle exec StakingLib/unStake.js --network=polygon_mainnet
```
If successful, you will see the transaction details, including transaction hash, printed on your console. Example Unstaking transaction for 100 TAO:
https://polygonscan.com/tx/0x63caa2b182e5b0030dd0959d9c685237796bc136242903bdd939f5ee338428c2


In addition, anyone can also stake by calling the "stake" and "unstake" functions directly on the contract address above using any custom library like web3.js, web3.py, or ethers.js

The functions are fairly intuitive and only take _amount_ as an argument.
You cannot stake again without withdrawing your previous stake. Unstake has a sanity check that staked amount >= unstake requested.

You can unstake any amount at any time with no penalties, your bonus interest will be calculated pro rata on the unstaked portion and given out, while the rest of your tokens continue to earn exponential interest.


Whitepaper :  https://ipfs.io/ipfs/QmY1ux3avsMDEtpTAhSsEZyHaggcEFGZhNCg5MGH3qvSme
