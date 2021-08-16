module.exports = {
  contracts_directory: './contracts',
  contracts_build_directory: './build',
  compilers: {
    solc: {
      version: '0.7.6',
      settings: {
        optimizer: {
          enabled: true,
          runs: 999999,
        },
        evmVersion: 'istanbul',
      },
    },
  },
};
