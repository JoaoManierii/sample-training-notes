//SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

contract ExempleBoolean {
   bool public myBool = true;

   function setMyBool(bool _myBool) public {
    myBool = true && _myBool;
   }
}