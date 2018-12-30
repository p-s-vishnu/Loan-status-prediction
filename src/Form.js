
import React, { Component } from 'react';
import './Form.css';
import './App.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        name: '',
        gender: '',
        maritalStatus: '',
        dependents: 0,
        education: 'graduate',
        selfEmployed: '',
        income: 0,
        spouseIncome: 0,
        loanAmount: 0,
        loanTerm: 0,
        creditHistory: 0,
        propertyArea: 'urban'

      };

  }

  handleChange(e) {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  handleSubmit(event) {
    alert(this.state.name + " " + this.state.gender + " " + this.state.creditHistory);
    event.preventDefault();
    fetch('https://mywebsite.com/endpoint/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: '',
        gender: this.state.name,
        maritalStatus: this.state.maritalStatus,
        dependents: this.state.dependents,
        education: this.state.education,
        selfEmployed: this.state.selfEmployed,
        income: this.state.income,
        spouseIncome: this.state.spouseIncome,
        loanAmount: this.state.loanAmount,
        loanTerm: this.state.loanTerm,
        creditHistory: this.state.creditHistory,
        propertyArea: this.state.propertyArea
      }),
    }).then((response) => response.json())
      .then((responseJson) => {
        //  return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (

      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div class="w3-half w3-left">
          <div class="form-style-8">
            <h2>Give Your Details</h2>

            <input type="text" name="name" placeholder=" Name" onChange={(e) => this.handleChange(e)} /><hr />

            <div class="space flex flexRow flexAlignSpaceBetween">Gender
          <div><input type="radio" name="gender" value="male" onChange={(e) => this.handleChange(e)} />Male</div>
              <div><input type="radio" name="gender" value="female" onChange={(e) => this.handleChange(e)} />Female</div>
            </div>
            <hr />

            <div class="space flex flexRow flexAlignSpaceBetween">Marital Status
              <div><input type="radio" name="maritalStatus" value={0} onChange={(e) => this.handleChange(e)} />Single</div>
              <div><input type="radio" name="maritalStatus" value={1} onChange={(e) => this.handleChange(e)} />Married</div>
            </div>
            <hr />

            <input type="number" name="dependents" placeholder="Number of dependents" onChange={(e) => this.handleChange(e)} />
            <hr />

            <div class="space flex flexRow flexAlignSpaceBetween">Education
          <select name="education" onChange={(e) => this.handleChange(e)}>
                <option value="graduate">Graduate</option>
                <option value="under-graduate">Under-Graduate</option>
              </select>
            </div>
            <hr />

            <div class="space flex flexRow flexAlignSpaceBetween">Self Employed
              <div><input type="radio" name="selfEmployed" value={0} onChange={(e) => this.handleChange(e)} />Yes</div>
              <div><input type="radio" name="selfEmployed" value={1} onChange={(e) => this.handleChange(e)} />No</div>
            </div>
            <hr />

          </div>
        </div>


        <div class="w3-half w3-right">
          <div class="form-style-8">
            <input type="number" name="income" placeholder="Income" onChange={(e) => this.handleChange(e)} /><hr />
            <input type="number" name="spouseIincome" placeholder="Spouse Income" onChange={(e) => this.handleChange(e)} /><hr />
            <input type="number" name="loanAmount" placeholder="Loan Amount" onChange={(e) => this.handleChange(e)} /><hr />
            <input type="number" name="loanTerm" placeholder="Duration of loan(in months)" onChange={(e) => this.handleChange(e)} /><hr />
            <div class="space flex flexRow flexAlignSpaceBetween">Previous Loan History
         <div><input type="radio" name="creditHistory" value={1} onChange={(e) => this.handleChange(e)} />Yes</div>
              <div><input type="radio" name="creditHistory" value={0} onChange={(e) => this.handleChange(e)} />No</div>
            </div><hr />
            <div class="space flex flexRow flexAlignSpaceBetween">Property Location
            <select name="propetyArea" onChange={(e) => this.handleChange(e)}>
                <option value="urban">Urban</option>
                <option value="semi-urban">Semi-Urban</option>
                <option value="rural">Rural</option>
              </select></div><hr />
            <div class="padding-17 flex flexAlignCenter">
              <input type="submit" value="Predict Chance" />
            </div>
          </div>
        </div>
      </form>

    );
  }
}
export default Form;



