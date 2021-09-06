const Liptoken = artifacts.require("LipToken");

module.exports = function (deployer) {
  deployer.deploy(Liptoken, "LipTokens", "LIPS");
};
