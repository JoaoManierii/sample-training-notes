// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script} from "forge-std/Script.sol";
import {Chatter} from "../src/Chatter.sol";

contract ChatterScript is Script {

  function run() public {
    vm.broadcast();
    new Chatter();
  }
  
}