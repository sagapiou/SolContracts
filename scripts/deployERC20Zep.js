const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {
  const initialSuppy = ethers.utils.parseEther("100000");
  const tokenName = "The Saga Zeppelin Token";
  const tokenSymbol = "SAGPAS";
  const [deployer] = await ethers.getSigners();
  console.log(`Address deploying the contract is --> ${deployer.address}`);


  // We get the contract to deploy
  const TheSagaCoin = await hre.ethers.getContractFactory("TheSagaCoin");
  const theSagaCoin = await TheSagaCoin.deploy(tokenName, tokenSymbol, initialSuppy);

  await theSagaCoin.deployed();

  console.log("TheSagaCoin deployed to:", theSagaCoin.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
