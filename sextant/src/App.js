import React, { Component } from 'react';
import './App.css';
import Banner from './Banner'
import Exhibit from './Exhibit';
import IP from './IP';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner bannerText="Sextant" />
        <Exhibit name="IPv4 Address">
          <IP url='https://api.ipify.org?format=json' />
        </Exhibit>
        <Exhibit name="IPv6 Address">
          <IP url='https://api64.ipify.org?format=json' />
        </Exhibit>
      </div>
    );
  }
}

export default App;
