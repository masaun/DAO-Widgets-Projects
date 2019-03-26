import React, { Component } from "react";
import { AragonApp, Button, Card, Text } from '@aragon/ui'
import Aragon, { providers } from '@aragon/client'
import styled from 'styled-components'

export default class Widgets extends Component {

  render() {
    const { widgets, widgetsLength } = this.props;  // assign this.props

    return (
      <div>
      	<Card>
	      	<h3> Your ContactNotebook Contract Instance </h3>

	        <Button onClick={() => this.props.get_widgets_length()} size="small" mode="outline">Get Index of Widgets</Button>

          <Button onClick={() => this.props.add_widget("0x0fED8b3f1024f6577E563c29CB8B8829EE2b87ef")} size="small" mode="outline">Get New Widget</Button>

          <br />

          {widgetsLength}

	    </Card>
	  </div>
    );
  }
}
