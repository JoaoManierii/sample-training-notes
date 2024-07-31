//SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

contract ExampleMapping {
    mapping (uint => bool) public myMapping;
    mapping (address => bool) public myAdressMapping;
    mapping (uint => mapping(uint => bool)) public uintuintBoolMapping;

    
    function setValue(uint _index) public {
        myMapping[_index] = true;
    }

    function setMyAdressToTrue() public {
        myAdressMapping[msg.sender] = true;
    }

}