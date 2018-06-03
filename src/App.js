import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Text } from '@vx/text';

import TextBox from './TextBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">1896</h1>
        </header>
        <p className="App-intro">
          <svg id="cat" width="300" height="150">
            <rect stroke="red" width={300} height={150} fill="none" strokeDasharray="5,5">
            </rect>
            <Text
              // scaleToFit
              verticalAnchor="start"
              width={280}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </svg>
        </p>
        <p>
          <svg width="50" height="50">
            <rect stroke="blue" width={50} height={50} fill="none" strokeDasharray="5,5">
            </rect>
            <Text
              textAnchor="start"
              verticalAnchor="start"
              width={50}>1</Text>
            <Text
              dx={25}
              textAnchor="middle"
              verticalAnchor="start"
              width={50}>2</Text>
            <Text
              dx={50}
              textAnchor="end"
              verticalAnchor="start"
              width={50}>3</Text>

            <Text
              dy={25}
              textAnchor="start"
              verticalAnchor="middle"
              width={50}>4</Text>
            <Text
              dx={25}
              dy={25}
              textAnchor="middle"
              verticalAnchor="middle"
              width={50}>5</Text>
            <Text
              dx={50}
              dy={25}
              textAnchor="end"
              verticalAnchor="middle"
              width={50}>6</Text>

            <Text
              dy={50}
              textAnchor="start"
              verticalAnchor="end"
              width={50}>7</Text>
            <Text
              dx={25}
              dy={50}
              textAnchor="middle"
              verticalAnchor="end"
              width={50}>8</Text>
            <Text
              dx={50}
              dy={50}
              textAnchor="end"
              verticalAnchor="end"
              width={50}>9</Text>
          </svg>
        </p>
        <p>
          <svg width="100" height="100">
            <rect stroke="green" width={100} height={100} fill="none" strokeDasharray="5,5"></rect>
            <TextBox width={100} height={100}>
              1
            </TextBox>
            <TextBox width={100} height={100}
              align="center">
              2
            </TextBox>
            <TextBox width={100} height={100}
              align="right">
              3
            </TextBox>
            <TextBox width={100} height={100}
              valign="middle">
              4
            </TextBox>
            <TextBox width={100} height={100}
              valign="middle" align="center">
              5
            </TextBox>
            <TextBox width={100} height={100}
              valign="middle" align="right">
              6
            </TextBox>
            <TextBox width={100} height={100}
              valign="bottom">
              7
            </TextBox>
            <TextBox width={100} height={100}
              valign="bottom" align="center">
              8
            </TextBox>
            <TextBox width={100} height={100}
              valign="bottom" align="right">
              9
            </TextBox>
          </svg>
        </p>
      </div>
    );
  }
}

export default App;
