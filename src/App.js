import React, { Component } from 'react';
import { Progress } from 'antd';
import './App.css';
import "antd/dist/antd.css";
import logo from './icon.png'

class App extends Component{
state={
  yearpassed:0,
  isMobile: false
}
componentWillMount(){
  this.getProgress();
  if(this.detectmob()){
    this.setState({isMobile:this.detectmob()})
  }
  setInterval(()=>{
    this.getProgress();
  },1000)
  
}
   getProgress=()=>{
     console.log('get progress function')
     var now = new Date();
     var start = new Date(now.getFullYear(), 0, 1);  // Start of this year
     var end = new Date(now.getFullYear() + 1, 0, 1);  // End of this year
     var done = (now-start) / (end-start);
    this.setState({yearpassed:done});
  }
   detectmob=() =>{ 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       return true;
     }
    else {
       return false;
     }
   }
  render(){
    return(
      <div className='main-container'>
        <img src={logo} className='logo'></img>
      <div className='container' style={{left:`${this.state.isMobile? '50%':'45%'}`, width:`${this.state.isMobile ? '100%':''}`}}>
        
        <h1>ear in progress</h1>
        {this.state.isMobile ? <Progress type="circle" percent={(this.state.yearpassed*100).toFixed(2)} size='small' strokeColor='black' /> : <Progress percent={this.state.yearpassed*100} size="small"/>}
        
      </div>
      <p className='text-right'>follow <a href='http://twitter.com/yearinprogress' target='_blank'>@yearinprogress</a></p>
      <p className='text-left'><a href='https://github.com/randomriffs' target='_blank'> @randomriffs</a></p>

      </div>
    )
  }
}

export default App;
