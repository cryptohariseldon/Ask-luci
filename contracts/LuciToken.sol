
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LuciToken is ERC20Capped, Ownable {
  // address[] internal stakeholders;
  mapping(address => uint256) public stakeInitTime;
  uint256 supplyCap = 100000000000*(10**9);

  // Supply cap hardcoded at 100 Billion tokens
  constructor() public ERC20("Luci Credits", "LUCI") ERC20Capped(supplyCap) {
    //_mint(orig, 25000000*(10**18)); //25% of 10.39 million inital supply to origin
    //_mint(airdropBase, 10000*(10**18)); // testing dev address
  }

  uint256 TokenCounter = 0;
// Onlyowner function to bulk transfer tokens to all addresses that participated in question generation in the last cycle
  function IssueRewards(address[] memory addList, uint256[] memory balList) public onlyOwner {
    uint len = addList.length;

    for(uint i=0; i<len; i++){
      address o1 = addList[i];
      uint bal = balList[i];
      uint bal1 = bal*10**9;
      TokenCounter += bal1;
        _mint(o1, bal1);
     }
  }

// Only allows minting of 30% of total tokens issued as reward in the last reward phase, to treasury
  function TransferTreasuryShare(address Treasury) public onlyOwner {
    require(TokenCounter!=0, "error: no rewards pending");
    uint256 TreasuryShare = (30*TokenCounter/100);
    _mint(Treasury, TreasuryShare);
    TokenCounter = 0;

  }

}
