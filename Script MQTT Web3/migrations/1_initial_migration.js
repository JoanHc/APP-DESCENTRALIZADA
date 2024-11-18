// constante que permitira que se despligue el contraro de manera correcta
const SensorsContract = artifacts.require("SensorsContract");
module.exports = function (deployer) {
  deployer.deploy(SensorsContract);
};
