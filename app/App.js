import React from 'react'
import {
  AragonApp,
  Button
} from '@aragon/ui'
import Aragon, { providers } from '@aragon/client'
import styled from 'styled-components'

import { FormApp } from './src/components/Form/FormApp';
//import { Widgets } from './src/components/Widgets/index';


/* Call getWidgetsLength function in contract of ContactNotebook */
// getWidgetsLength = async () => {
//   const { Widgets } = this.state;    // assign this.state to variable which is empty（Don't use）

//   console.log('contractの中身', contract)      // Debug（Don't use）

//   const response = await NumContact.methods.getWidgetsLength().call();
//   this.setState({ numberOfContact: response })  // Update state with the result（and append into this.state）

//   console.log('response of getWidgetsLength', response)  // Debug
// };




const AppContainer = styled(AragonApp)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default class App extends React.Component {
  render () {
    return (
      <AppContainer>
        <div>
          Hello World
        </div>

        <Button>Hello World</Button>

        <FormApp />

        {/* <Widgets get_widgets_length={this.getWidgetsLength} 
        {...this.state} /> */}
      </AppContainer>
    )
  }
}
