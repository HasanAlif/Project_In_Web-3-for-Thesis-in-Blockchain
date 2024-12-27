//https://eth-sepolia.g.alchemy.com/v2/09WnduTNVxQxko4bd4wVGjz4CtGNquqJ

//const { network } = require('hardhat');

require('@nomicfoundation/hardhat-toolbox');
//require('@nomicfoundation/hardhat-ethers');
//require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.28',
  networks: {
    hardhat: {
      sepolia: {
        url: 'https://eth-sepolia.g.alchemy.com/v2/09WnduTNVxQxko4bd4wVGjz4CtGNquqJ',
        accounts:['ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80']
      },
    },
  },
};

//--legacy-peer-deps