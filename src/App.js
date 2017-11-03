import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Apps extends Component {
  constructor(props){
    super(props);
    this.state={
      liked:false
    };
    this.handleClick=this.handleClick.bind(this);
  }
  getInitialState(){
    return {liked:false};
  }
  handleClick(event){
    this.setState({liked:!this.state.liked})
  }
  render() {
    var text = this.state.liked ? '喜欢' : '不喜欢';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p onClick={this.handleClick} style={{lineHeight:'40px',color:'red',cursor:'pointer'}}>
          你{text}我，点我切换状态。
        </p>
        <WebSite />
      </div>
    );
  }
}
class WebSite extends Component{
  constructor(props){
    super(props);
    this.state={
      name:'张涛',
      site:"https://raintao.github.io/"
    }
  }
  render(){
    return (
      <div>
        <Name name={this.state.name} />
        <Link site={this.state.site} />
      </div>
    )
  }
}
class Name extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <h1>{this.props.name}</h1>
    )
  }
}
class Link extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <a href={this.props.site} target="_blank">
       学习更多，点我
      </a>
    )
  }
}



class demo extends Component{
  constructor(props){
    super(props);
    this.state={
      name:'张涛'
    }
  }
  render(){
    return (
      <div>

      </div>
    )
  }
}

export default {
  Apps,
  WebSite
}
