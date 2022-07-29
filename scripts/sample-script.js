const hre = require("hardhat");

async function main() {
  const SayHi = await hre.ethers.getContractFactory("SayHi");
  const sayHi = await SayHi.deploy();
  await sayHi.deployed();
  console.log("SayHi deployed to:", sayHi.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
