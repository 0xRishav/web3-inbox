// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

// linter warnings (red underline) about pragma version can igonored!

// contract code will go here
contract Inbox {
    string public message;

    constructor(string memory initialString) public {
        message = initialString;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
