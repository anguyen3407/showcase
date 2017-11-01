import React, { Component } from 'react';

export default class EvenAndOdd extends Component {

  constructor(){
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }



  render(){
      <div className= "puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className = "inputLine" onChange={(e) => }>
        <button className = "confirmationButton" onClick={(e) => }>
          <span className = "resultsBox"> {evenArray}</span>
          <span className = "resultBox"> {oddArray}</span>
          </div>
}
