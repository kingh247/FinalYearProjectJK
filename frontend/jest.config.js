// module.exports = {
//   // other Jest configurations...
//   transform: {
//     '^.+\\.jsx?$': 'babel-jest',
//   },
  
// };
/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
  return {
    verbose: true,
  };
};