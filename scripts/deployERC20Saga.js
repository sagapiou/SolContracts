const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {

  const tokenName = "The Saga Token";
  const tokenSymbol = "SAGAS";
  const [deployer] = await ethers.getSigners();
  console.log(`Address deploying the contract is --> ${deployer.address}`);


  // We get the contract to deploy
  const ERC20Saga = await hre.ethers.getContractFactory("ERC20Saga");
  const _ERC20Saga = await ERC20Saga.deploy(tokenName, tokenSymbol, 100);

  await _ERC20Saga.deployed();

  console.log("ERC20Saga deployed to:", _ERC20Saga.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
