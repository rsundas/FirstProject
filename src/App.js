import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Addressdetails from "./Addressdetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addressValue:"",
      stateValue : "SELECT STATE"
    };
  }
  handleChangeFname = (e) => {
    this.setState({ firstName: e.target.value })
  }
  handleChangeLname = (e) => {
    this.setState({ lastName: e.target.value })
  }
  handleChangeRadio = (e) => {
    this.setState({ genderChecked: e.target.value })

  }

  handleChangePcode = (e) => {
    this.setState({ pincode: e.target.value })
  }
  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value })
  }
  handleChangePnum = (e) => {

    this.setState({ pnumber: e.target.value })
  }
  handleChangeDob = (e) => {
    this.setState({ dateOfBirth: e.target.value })
  }

  handleChangeadd = (val) =>{
    this.setState({addressValue:val})
  }

  handleChangeadd1 = (val) =>{
    this.setState({addressValue1:val})
  }

  handleChangeState = (val) =>{
    this.setState({stateValue:val})
  }

  formValidation = () => {

    if (this.state.firstName === undefined || this.state.firstName === "") {
      alert("Enter the First name");
      return false;
    }
    if (!/^[a-zA-Z]*$/g.test(this.state.firstName)) {
      alert("Enter the valid First name");
      return false;
    }
    console.log(this.state.lastName);
    if (this.state.lastName === undefined || this.state.lastName === "") {
      alert("Enter the Last name");
      return false;
    }
    if (!/^[a-zA-Z]*$/g.test(this.state.lastName)) {
      alert("Enter the valid Last name");
      return false;
    }

    var d = new Date(this.state.dateOfBirth);
    var today = new Date();

    var dob = this.state.dateOfBirth;
    var pattern = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
    if (dob == null || dob == "" || !pattern.test(dob) || d > today) {
      alert("Invalid date of birth");
      return false;

    }

    if (this.state.genderChecked == null || this.state.genderChecked == "") {
      alert("Select the Gender..");
      return false;
    }

    if (this.state.addressValue === undefined || this.state.addressValue === "") {
      alert("Enter your address");
      return false;
  }

  if (this.state.addressValue1 === undefined || this.state.addressValue1 === "") {
      alert("Enter your address");
      return false;
  }

  if (this.state.stateValue === "SELECT STATE") {
    alert("Choose your state..");
    return false;
}

    var zip = /^\d{6}$/;
    var code = this.state.pincode;
    if (code == null || code == "" || !zip.test(code)) {
      alert("Enter the correct Pin Code");
      return false;
    }

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(this.state.email) === false) {
      alert('Invalid Email Address');
      return false;
    }
    console.log(this.state.pnumber);
    var phoneno = /^\d{10}$/;
    var num = this.state.pnumber;
    if (num == null || code == "" || !phoneno.test(num)) {
      alert("Invalid Phone Number");
    }
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">REGISTRATION FORM:</h1>
          </header>
          <br />
          <div className="App-form">
            <label htmlFor='fname' />First Name:<input type='text' value={this.state.firstName} placeholder='Your first name...' name='firstName' id="fn" onChange={this.handleChangeFname} />
            <br />
            <label htmlFor='lname' />Last Name: <input type='text' value={this.state.lastName} placeholder='Your last name...' id="ln" name='lastName' onChange={this.handleChangeLname} />
            <br />
            <label htmlFor='DOB' /> D.O.B:(dd/mm/yyyy) <input type="date" name="dateofbirth" id="dob" value={this.state.dateOfBirth} onChange={this.handleChangeDob} />

            <br />
            <div class='radioopt'>
              <label htmlFor='gender'> Gender: </label>
              <label>
                <input type="radio" name="gender" value="option1" onChange={this.handleChangeRadio} checked={
                  this.state.genderChecked === "option1" ? true : false
                } />

                Male
              </label>
              <label>
                <input type="radio" name="gender" value="option2" onChange={this.handleChangeRadio} checked={
                  this.state.genderChecked === "option2" ? true : false
                } />

                Female
              </label>
              <label>
                <input type="radio" name="gender" value="option3" onChange={this.handleChangeRadio} checked={
                  this.state.genderChecked === "option3" ? true : false
                } />

                Other
               </label>
            </div>
            <br />
            <div>
              <Addressdetails handleChangeadd={this.handleChangeadd} handleChangeadd1={this.handleChangeadd1} handleChangeState={this.handleChangeState}/>


            </div>
            <br />
            <label htmlFor='pinCode' />
            Pincode:
              <input type='text' id="pc" value={this.state.pincode} placeholder='Enter pincode...' onChange={this.handleChangePcode} />

            <div>
              <label htmlFor='email' />Email-id: <input type='text' id="eid" value={this.state.email} placeholder='Email-id.....' onChange={this.handleChangeEmail} />
            </div>
            <label htmlFor='phone' />Phone-No: <input type='text' id="pn" value={this.state.pnumber} placeholder='Number....' name='numb' onChange={this.handleChangePnum} />
            <div>
              <button className="sub-btn" onClick={this.formValidation}> Submit </button>
            </div>


          </div>
        </div>
      </div>
    );
  }
}
export default App;
