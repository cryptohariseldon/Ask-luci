const Migrations = artifacts.require('Migrations')
const Stake2 = artifacts.require('LUCIToken')

module.exports = function (deployer) {
    deployer.deploy(Migrations);
    deployer.deploy(Stake2);
}
