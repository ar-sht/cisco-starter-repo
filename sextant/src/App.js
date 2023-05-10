import React, { Component } from 'react';
import './App.css';
import Banner from './Banner'
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant"/>
      <Exhibit name="Exhibit 1">
        <p>Hello</p>
        <p>Hi</p>
        <p>How are ya?</p>
      </Exhibit>
      <Exhibit name="Exhibit 2">
        <p>Howdy</p>
        <p>How's it going?</p>
        <p>Nice to see you.</p>
      </Exhibit>
      <Exhibit name="Exhibit 3">
        <p>Goodbye</p>
        <p>See you later</p>
        <p>Til next time</p>
      </Exhibit>
    </div>
  );
}

export default App;
