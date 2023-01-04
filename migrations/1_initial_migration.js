const Migrations = artifacts.require('Migrations')
const Stake2 = artifacts.require('LuciToken')
const Flat = artifacts.require('LuciToken2')


module.exports = function (deployer) {
    //deployer.deploy(Migrations);
    deployer.deploy(Stake2);
    //deployer.deploy(Flat);

}
