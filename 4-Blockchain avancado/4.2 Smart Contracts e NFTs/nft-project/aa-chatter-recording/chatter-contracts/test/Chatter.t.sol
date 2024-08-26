// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test, console} from "forge-std/Test.sol";
import {Chatter} from "../src/Chatter.sol";

contract ChatterTest is Test {
   Chatter public chat;

    function setUp() public {
        chat = new Chatter();
    }

    function test_message() public {
        
        chat.sendMessage("Hello, World!");
    }
}
