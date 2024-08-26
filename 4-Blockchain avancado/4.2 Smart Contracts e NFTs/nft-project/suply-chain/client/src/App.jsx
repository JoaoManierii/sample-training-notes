import React, { Component } from "react";
import ItemManager from "./contracts/ItemManager.json";
import Item from "./contracts/Item.json";
import getWeb3 from "./getWeb3";
import "./styles.css";

class App extends Component {
  state = {
    cost: 0,
    itemName: "exampleItem1",
    loaded: false,
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      this.web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      this.accounts = await this.web3.eth.getAccounts();

      // Get the contract instance.
      this.networkId = await this.web3.eth.net.getId();
      this.itemManager = new this.web3.eth.Contract(
        ItemManager.abi,
        ItemManager.networks[this.networkId] && ItemManager.networks[this.networkId].address,
      );
      this.item = new this.web3.eth.Contract(
        Item.abi,
        Item.networks[this.networkId] && Item.networks[this.networkId].address,
      );

      this.listenToPaymentEvent();
      this.setState({ loaded: true });
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: name === "cost" ? Number(value) : value,
    });
  };

  handleSubmit = async () => {
    const { cost, itemName } = this.state;
    try {
      const result = await this.itemManager.methods.createItem(itemName, cost).send({ from: this.accounts[0] });
      console.log(result);
      alert("Send " + cost + " Wei to " + result.events.SupplyChainStep.returnValues._address);
    } catch (error) {
      console.error(error);
      alert("There was an error creating the item.");
    }
  };

  listenToPaymentEvent = () => {
    this.itemManager.events.SupplyChainStep().on("data", async (evt) => {
      if (evt.returnValues._step === 1) {
        let item = await this.itemManager.methods.items(evt.returnValues._itemIndex).call();
        console.log(item);
        alert("Item " + item._identifier + " was paid, deliver it now!");
      }
      console.log(evt);
    });
  }

  render() {
    if (!this.state.loaded) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Simple Payment/Supply Chain Example!</h1>
        <h2>Items</h2>

        <h2>Add Element</h2>
        <div>
          Cost: <input type="number" name="cost" value={this.state.cost} onChange={this.handleInputChange} />
        </div>
        <div>
          Item Name: <input type="text" name="itemName" value={this.state.itemName} onChange={this.handleInputChange} />
        </div>
        <button type="button" onClick={this.handleSubmit}>
          Create new Item
        </button>
      </div>
    );
  }
}

export default App;
