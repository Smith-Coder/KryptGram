require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/bbYzagC554ZEQ7y8gA9VYqNMzDVUWjAm',
      accounts: ['d355d40748466d473b960928bbd0614079e285378096677fae5e51c64bc46f3f']
    }
  }
};
