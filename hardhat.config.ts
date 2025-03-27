import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  //1.기본 네트워크 설정 
  defaultNetwork: "kaia_testnet",

  //2.네트워크 구성 
  networks: {
    hardhat: {},
    kaia_testnet: {
      url: process.env.KAIA_TESTNET_URL || "https://public-en-kairos.node.kaia.io", //KAIA Testnet RPC URL 설정 
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 1001,
      gas: "auto",
      gasPrice: "auto",
    },
  },

  //3.Solidity 설정
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "paris",
    },
  },

  //4.파일 경로 설정 
  paths: {
    root: "./",
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },

  //5.mocha 테스트 설정 
  mocha: {
    timeout: 40000,
  },

};

export default config;
