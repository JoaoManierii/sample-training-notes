//SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

contract ExampleMappingWithdraws {

    mapping(address => uint) public balanceReceived;


    function sendmoney() public payable {
        balanceReceived[msg.sender] += msg.value;
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }


    function withDrawAllMoney(address payable _to) public {
        uint balanceToSendOut = balanceReceived[msg.sender];
        balanceReceived[msg.sender] = 0;
        _to.transfer(balanceToSendOut);
    }

}