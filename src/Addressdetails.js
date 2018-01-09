import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App from "./App";
import { statelistname } from './statelist';


class Addressdetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address1:null,
            address2:null,
            stateValue:null,
            pincode:null,
            cityValue:null
        };
        this.cache = statelistname;
    }
    handleAddress1 = (e) => {

        this.setState({ address1: e.target.value }, () => {
            this.props.onChange(this.state);
        });
    }
    handleAddress2 = (e) => {
        this.setState({ address2: e.target.value }, () => {
            this.props.onChange(this.state);
        });
    }
    handleChangeStateValue = (e) => {
        this.setState({ stateValue: e.target.value }, () => {
            this.props.onChange(this.state);
        });
    }
    handleChangePcode = (e) => {
        this.setState({ pincode: e.target.value }, () => {
            this.props.onChange(this.state);
        });
    }
    handlecityValue = (e) => {
        this.setState({ cityValue: e.target.value }, () => {
            this.props.onChange(this.state);
        });
    }
    render() {
        var selectedState = this.state.stateValue;
        var selectedCity = [];
        if (selectedState && this.cache[selectedState]) {
            selectedCity = this.cache[selectedState];
        }
        return (
            <div>
                <div>
                    <label htmlFor='Address1' />Address1: <input type='text' id="a1" value={this.state.address1} placeholder='Enter your address...' onChange={this.handleAddress1} />
                </div>
                <div>
                    <label htmlFor='Address2' />Address2: <input type='text' id="a2" value={this.state.address2} placeholder='Enter your address...' onChange={this.handleAddress2} />
                </div>
                <div>
                    <label htmlFor='stateDrop' />State: <select defaultValue={this.cache.stateValue} onChange={this.handleChangeStateValue} id='statedd'>
                        {
                            this.cache.stateName.map((val) => {
                                return <option>{val}</option>
                            })
                        }
                    </select>
                </div>
                <br />
                <div>
                    <label htmlFor='cityDrop' />City:     <select id='citydd' value={this.cache.cityValue} onChange={this.handlecityValue} defaultValue={this.state.cityValue}>{
                        selectedCity.map((val) => {
                            return <option>{val}</option>
                        })
                    }
                    </select>
                </div>
                <br />
                <label htmlFor='pinCode' />
                Pincode:
              <input type='text' id="pc" value={this.state.pincode} placeholder='Enter pincode...' onChange={this.handleChangePcode} />
            </div>
        );
    }
}
export default Addressdetails;  