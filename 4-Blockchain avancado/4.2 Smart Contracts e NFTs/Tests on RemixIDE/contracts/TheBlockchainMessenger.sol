//SPDX-License-Identifier: MIT

pragma solidity 0.8.13;

contract TheBlockChainMessenger {
    uint public changeCounter;

    address public owner;

    string public theMessager;

    constructor() {
        owner = msg.sender;
    }

    function updateMessage(string memory _newMessage) public {
        if(msg.sender == owner) {
            theMessager = _newMessage;
            changeCounter++;
        }
    }
}