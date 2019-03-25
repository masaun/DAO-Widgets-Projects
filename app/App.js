import React from 'react'
import {
  AragonApp,
  Button
} from '@aragon/ui'
import Aragon, { providers } from '@aragon/client'
import styled from 'styled-components'

import getWeb3, { getGanacheWeb3 } from './src/utils/getWeb3'; // import web3 and ganache-cli

import { FormApp } from './src/components/Form/FormApp';
import { Widgets } from './src/components/Widgets/index';


const AppContainer = styled(AragonApp)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default class App extends React.Component {
//export default class App extends Component {

  /* It is set every time */ 
  componentDidMount = async () => {
    let Widgets = {};  // Define variable of ContactNotebook
    try {
      Widgets = require("../build/contracts/Widgets.json"); // Load ABI of contract of ContactNotebook
      //Widgets = require("./contracts/Widgets.json"); // Load ABI of contract of ContactNotebook
    } catch (e) {
      console.log(e);
    }
    try {
      const isProd = process.env.NODE_ENV === 'production';
      if (!isProd) {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();
        let ganacheAccounts = [];
        try {
          ganacheAccounts = await this.getGanacheAddresses();
        } catch (e) {
          console.log('Ganache is not running');
        }
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const isMetaMask = web3.currentProvider.isMetaMask;
        let balance = accounts.length > 0 ? await web3.eth.getBalance(accounts[0]): web3.utils.toWei('0');
        balance = web3.utils.fromWei(balance, 'ether');
        let instance = null;  // This instance is contract of ContactNotebook
        let deployedNetwork = null;
        if (Widgets.networks) {
          deployedNetwork = Widgets.networks[networkId.toString()];
          if (deployedNetwork) {
            instance = new web3.eth.Contract(
              Widgets.abi, // This ABI is contract of Counter
              deployedNetwork && deployedNetwork.address,
            );
          }
        }
        
        // Set state of infomation of Web3 and Ganache to each instance
        if (instance) {
          // Set web3, accounts, and contract to the state, and then proceed with an
          // example of interacting with the contract's methods.
          this.setState({ web3, ganacheAccounts, accounts, balance, networkId,
            isMetaMask, Widgets: instanceWidgets }, () => {
              this.refreshValues(instance);
              setInterval(() => {
                this.refreshValues(instance);
              }, 5000);
            });
        }
        else {
          this.setState({ web3, ganacheAccounts, accounts, balance, networkId, isMetaMask });
        }
      }
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };


  /* Call getWidgetsLength function in contract of ContactNotebook */
  getWidgetsLength = async () => {
    const { Widgets } = this.state;    // assign this.state to variable which is empty（Don't use）

    console.log('contractの中身', contract)      // Debug（Don't use）

    const response = await Widgets.methods.getWidgetsLength().call();
    this.setState({ numberOfContact: response })  // Update state with the result（and append into this.state）

    console.log('response of getWidgetsLength', response)  // Debug
  };



  render () {
    return (
      <AppContainer>
        <div>
          Hello World
        </div>

        <Button>Hello World</Button>

        <FormApp />

        {/* <Widgets get_widgets_length={this.getWidgetsLength} 
        {...this.state} /> */ }
      </AppContainer>
    )
  }
}
