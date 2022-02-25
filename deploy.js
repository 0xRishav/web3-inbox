// deploy code will go here
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

// modify possible web course idle fiber female problem ketchup advance advice betray

const provider = new HDWalletProvider(
  "modify possible web course idle fiber female problem ketchup advance advice betray",
  "https://rinkeby.infura.io/v3/6e3bb3187ae04ad4a8930c2c18405aaa"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("deploying contract with account: ", accounts[0]);

  const deployedInbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hey there"] })
    .send({ from: accounts[0], gas: "1000000" });

  console.log("contract deployed to address: ", deployedInbox.options.address);
};

deploy();
