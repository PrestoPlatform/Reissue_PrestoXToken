const PrestoXToken = artifacts.require("./PrestoXToken");

module.exports = function(deployer) {
  deployer.deploy(PrestoXToken);
};
