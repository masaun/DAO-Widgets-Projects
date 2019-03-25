import React, { Component } from 'react';

export class FormApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      message: '',
      posts: []
    };

    this.handleInput = this.handleInput.bind(this);
    this.send = this.send.bind(this);
  }


  handleInput({ target: { value } }) {
    this.setState({ value });

    console.log("handleInput called!"); 
  }

  // handleInput(event) {
  //   let value = event.target.value;
  //   this.setState({ 
  //     value: value 
  //   });
  // }


  send() {
    const { value } = this.state;
    const postList = []

    this.setState({
      value: '',
      message: value,
      posts: postList.push(value)
    });

    console.log("send called!");
  }


  render() {
    const posts = this.props.posts;  // posts: [message, message, ...]
    let postList = []
    for (let i in posts) {
      postList.push(<li key={i}><Post post={posts[i]} /></li>)
    }

    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleInput} />
        <button onClick={this.send}>SEND</button>

        <div>{this.state.message}</div>

        <div>{this.state.posts}</div>
        <ul>{postList}</ul>
      </div>
    );
  }
}
