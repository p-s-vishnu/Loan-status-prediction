import React, { Component } from 'react';
import './App.css';

class Quote extends Component {

  constructor(props) {
    super(props);
    this.state = { result: this.props.result };
  }
  getResultText() {
    if (this.state.result == 0)
      return "Quote: Live Life";
    else if (this.state.result == 1)
      return "Congratss!!! Your loan is likely to be approved!!";
    else
      return "Sorry!!! Your Loan is less likely to be approved!!";
  }
  render() {
    return (
      <div class="w3-container w3-black w3-center w3-padding-64">
        <h1 class="w3-margin w3-xlarge">{this.getResultText()}</h1>
      </div>

    );
  }
}
export default Quote;
