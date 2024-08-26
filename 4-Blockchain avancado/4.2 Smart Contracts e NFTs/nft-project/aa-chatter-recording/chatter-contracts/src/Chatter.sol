// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

contract Chatter {
    event Menssage(address indexed user, string message);

    function sendMessage(string calldata message) public {
        emit Menssage(msg.sender, message);
    }

}
