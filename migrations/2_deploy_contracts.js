const NFTMinter = artifacts.require("NFTMinter");

module.exports = function(deployer) {
  deployer.deploy(NFTMinter);
};
