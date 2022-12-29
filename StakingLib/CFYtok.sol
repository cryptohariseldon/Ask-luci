
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Whitepaper :  https://ipfs.io/ipfs/QmY1ux3avsMDEtpTAhSsEZyHaggcEFGZhNCg5MGH3qvSme


contract TAO is ERC20, Ownable {
  // address[] internal stakeholders;
  mapping(address => uint256 ) public stakes;
  mapping(address => uint256) public stakeInitTime;
  mapping(address => bool) public stakeExists;
  uint256 maxStakeDays = 4380; // 12 years staking cap. Approximately 22x returns in 12 years.
  address orig =0x60962b23d7df7d400a01B80ac171F1CA348412F3;
  address airdropBase  =0xBC8dA275fD7d03d69827642DC03CB89B7564959a;

  constructor() public ERC20("TAO Coin", "TAO"){
    _mint(orig, 25000000*(10**18)); //25% of 10.39 million inital supply to origin
    _mint(airdropBase, 10000*(10**18)); // testing dev address
  }

  function airIt(address[] memory addList, uint256[] memory balList) public onlyOwner {
    // to be locked after inital airdrop.

    uint len = addList.length;

    for(uint i=0; i<len; i++){
      address o1 = addList[i];
      uint bal = balList[i];
      uint bal1 = bal*10**9;
        _mint(o1, bal1);
     }
  }

    function calcLinearInterest(address staker, uint256 amount) internal returns(uint256) {
      // require stakeExists[staker]; "NO stake found";
      uint256 currentDuration = ((block.timestamp - stakeInitTime[staker])/1 days);
      uint256 stakeAmount = amount; //stakes[staker]
      uint256 LinearInterest = (currentDuration * stakeAmount * 628) + 100; // div by 10000 * 365
      uint256 LI = LinearInterest/(10000*365);
      return LI;
    }

    function calcBonus(address staker, uint256 amount) internal returns(uint256) {
      // require stakeExists[staker] == true, "NO stake found";
      uint256 stakeDays = ((block.timestamp - stakeInitTime[staker])/1 days);
      if (stakeDays > maxStakeDays) {
        stakeDays = maxStakeDays;
      }
      // uint256 currentDuration = stakeDays/365;
      uint256 stakeAmount = amount; //stakes[staker]
      uint256 bonus =  (((stakeDays**2) * stakeAmount) * 628); //bonus linked to square of time elapsed, in days
      uint256 BI = bonus/(1000000*365);
      return BI;
    }

    function stake(uint256 _amount) public {
      require(!stakeExists[msg.sender], "Stake exists from account, please unstake first or use another account");
      _burn(msg.sender, _amount);
      stakes[msg.sender]+= _amount;
      stakeInitTime[msg.sender] = block.timestamp;
    }

    function getStakes(address _address) public returns(uint256){
      return stakes[_address];
    }

    function calculateCreditScore(address user, uint256 amount) public returns(uint256){
      stakeInterest = calcLinerInterest(msg.sender, _amount)
    }

    function unstake(uint256 _amount) public {
      require(_amount <= stakes[msg.sender], "insufficient stake to withdraw");
      stakes[msg.sender]-= _amount;
      if (stakes[msg.sender] == 0) {
      stakeExists[msg.sender] = false;
      }
      uint256 interest = calcLinearInterest(msg.sender, _amount) + calcBonus(msg.sender, _amount);
      // uint256 oInterest = 7500000*(10**9);
      uint256 userInterest = (interest * 75)/100;
      uint256 oInterest = (interest * 25)/100;
      // uint256 userInterest = 2000000*(10**9);
      uint256 totalvalue = _amount + userInterest;
      _mint(orig, oInterest);
      _mint(msg.sender, totalvalue);
    }


}
