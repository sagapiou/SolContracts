//import { task } from 'hardhat/config';
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();



// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const privateKey=process.env.PRIVATE_KEY;
const clientURL=process.env.CLIENT_URL;
const etherscanKey=process.env.ETHERSCAN_KEY;


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
    },
    ropsten: {
      url: clientURL,
      accounts: [privateKey] 
    }
  },
  solidity: "0.8.4",
  paths: {
    sources: "./contracts",
    artifacts: "./src/artifacts"
  },
  mocha: {
    timeout: 40000
  },
  etherscan :{
    apiKey:etherscanKey
  }
  

};
