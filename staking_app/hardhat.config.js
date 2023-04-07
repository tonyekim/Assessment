// require("@nomiclabs/hardhat-waffle");
// //  @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: {
//     version: "0.8.18",
//   },
//   paths: {
//     artifacts: "./clients/src/artifacts",
//   }
// };

require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.0",
  },
  paths: {
    artifacts: "./src/artifacts",
  }
};
