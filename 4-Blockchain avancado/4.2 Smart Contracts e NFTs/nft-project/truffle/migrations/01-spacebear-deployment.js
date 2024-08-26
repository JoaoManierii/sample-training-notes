const SpaceBear = artifacts.require("SpaceBear");

module.exports = async function(deployer, network, accounts) {
  // Use o primeiro endereço da conta como initialOwner, ou forneça um endereço específico
  const initialOwner = accounts[0];

  console.log(network, accounts);

  await deployer.deploy(SpaceBear, initialOwner);
};
