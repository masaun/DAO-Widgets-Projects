import React, { Component } from "react";
import { AragonApp, Button } from '@aragon/ui'
import Aragon, { providers } from '@aragon/client'
import styled from 'styled-components'

export default class Widgets extends Component {

  render() {
    const { widgets } = this.props;  // assign this.props

    return (
      <Button
        onClick={() => this.props.get_widgets_length()}
        size="small">Get Index of Widgets</Button>
    );
  }
}
