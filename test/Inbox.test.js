// contract test code will go here
const mocha = require("mocha");
const ganache = require("ganache-cli");
const assert = require("assert");
const Web3 = require("web3");

const { interface, bytecode } = require("../compile");

const web3 = new Web3(ganache.provider());
let inbox, accounts;
const INITIAL_MESSAGE = "Hii there!";

beforeEach(async () => {
  try {
    accounts = await web3.eth.getAccounts();
    inbox = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: bytecode, arguments: [INITIAL_MESSAGE] })
      .send({ from: accounts[0], gas: "1000000" });
  } catch (err) {
    console.log(err);
  }
});

describe("deploy", () => {
  it("check for contract deployment", () => {
    assert.ok(inbox.options.address);
  });
  it("has a default message", async () => {
    const message = await inbox.methods.message().call(); //functions are always in methods object
    assert.equal(message, INITIAL_MESSAGE);
  });
  it("check set message method", async () => {
    await inbox.methods.setMessage("bye there").send({ from: accounts[0] });
    const newMessage = await inbox.methods.message().call();
    assert.equal(newMessage, "bye there");
  });
});
