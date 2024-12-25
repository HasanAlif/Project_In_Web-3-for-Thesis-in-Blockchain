// async function main() {
//     const [deployer] = await ethers.getSigners();
  
//     console.log("Deploying contracts with the account:", deployer.address);
  
//     const balance = await deployer.provider.getBalance(deployer.address);
//     console.log("Account balance:", balance.toString());
  
//     const Token = await ethers.getContractFactory("Token");
//     const token = await Token.deploy();
  
//     console.log("Token address:", token.address);
//   }
  
//   main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//       console.error(error);
//       process.exit(1);
//     });







const main = async () => {
    const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
    const transactionsContract = await transactionsFactory.deploy();
  
    await transactionsContract.deployed();
  
    console.log("Transactions address: ", transactionsContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
  runMain();