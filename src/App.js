import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QrReader from 'react-qr-reader'

class App extends Component {

  state = {
    qrContent: ''
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
    	  <QrReader
	      delay={300}
              facingMode={'environment'}
              style={{width: '30%'}}
              onScan={data => this.setState({qrContent: data})}
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
