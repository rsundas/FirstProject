import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App from "./App";

class Addressdetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.stateCache = {
            stateValue: "SELECT STATE",
            stateName: ["SELECT STATE", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka",
                "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
                "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"],

            "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Prakasam", "Srikakulam", "SriPotti Sri Ramulu Nellore",
                "Vishakhapatnam", "Vizianagaram", "West Godavari", "Cudappah"],

            "Arunachal Pradesh": ["Anjaw", "Changlang", "Dibang Valley", "East Siang", "East Kameng", "Kurung Kumey", "Lohit", "Longding", "Lower Dibang Valley", "Lower Subansiri", "Papum Pare",
                "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang"],

            assam: ["Baksa", "Barpeta", "Bongaigaon", "Cachar", "Chirang", "Darrang", "Dhemaji", "Dima Hasao", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Jorhat",
                "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "Tinsukia", "Udalguri"],

            bihar: ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur",
                "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa",
                "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"],

            Chhattisgarh: ["Bastar", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Jashpur", "Janjgir-Champa", "Korba", "Koriya", "Kanker", "Kabirdham (formerly Kawardha)", "Mahasamund",
                "Narayanpur", "Raigarh", "Rajnandgaon", "Raipur", "Surajpur", "Surguja"],

            dadra: ["Amal", "Silvassa"],

            daman: ["Daman", "Diu"],

            delhi: ["Delhi", "New Delhi", "North Delhi", "Noida", "Patparganj", "Sonabarsa", "Tughlakabad",],

            goa: ["Chapora", "Dabolim", "Madgaon", "Marmugao (Marmagao)", "Panaji Port", "Panjim", "Pellet Plant Jetty/Shiroda", "Talpona", "Vasco da Gama"],

            gujarat: ["Ahmedabad", "Amreli district", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Dahod", "Dang", "Gandhinagar", "Jamnagar", "Junagadh",
                "Kutch", "Kheda", "Mehsana", "Narmada", "Navsari", "Patan", "Panchmahal", "Porbandar", "Rajkot", "Sabarkantha", "Surendranagar", "Surat", "Tapi", "Vadodara", "Valsad"],

            haryana: ["Ambala", "Bhiwani", "Faridabad", "Fatehabad", "Gurgaon", "Hissar", "Jhajjar", "Jind", "Karnal", "Kaithal",
                "Kurukshetra", "Mahendragarh", "Mewat", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamuna Nagar"],

            himachal: ["Baddi", "Baitalpur", "Chamba", "Dharamsala", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul & Spiti", "Mandi", "Simla", "Sirmaur", "Solan", "Una"],

            wb: ["Alipurduar", "Bankura", "Bardhaman", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah",
                "Jalpaiguri", "Kolkata", "Maldah", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Medinipur", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"],

            uttarakhand: ["Almora", "Badrinath", "Bangla", "Barkot", "Bazpur", "Chamoli", "Chopra", "Dehra Dun", "Dwarahat", "Garhwal", "Haldwani", "Hardwar", "Haridwar", "Jamal", "Jwalapur", "Kalsi", "Kashipur", "Mall",
                "Mussoorie", "Nahar", "Naini", "Pantnagar", "Pauri", "Pithoragarh", "Rameshwar", "Rishikesh", "Rohni", "Roorkee", "Sama", "Saur"],

            up: ["Agra", "Allahabad", "Auraiya", "Banbasa", "Bareilly", "Berhni", "Bhadohi", "Dadri", "Dharchula", "Gandhar", "Gauriphanta", "Ghaziabad", "Gorakhpur", "Gunji",
                "Jarwa", "Jhulaghat (Pithoragarh)", "Kanpur", "Katarniyaghat", "Khunwa", "Loni", "Lucknow", "Meerut", "Moradabad", "Muzaffarnagar", "Nepalgunj Road", "Pakwara (Moradabad)",
                "Pantnagar", "Saharanpur", "Sonauli", "Surajpur", "Tikonia", "Varanasi"],

            sikkim: ["Chamurci", "Gangtok"],

            tn: ["Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mandapam", "Nagapattinam", "Nilgiris", "Namakkal", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivaganga", "Thanjavur", "Thiruvallur", "Tirupur",
                "Tiruchirapalli", "Theni", "Tirunelveli", "Thanjavur", "Thoothukudi", "Tiruvallur", "Tiruvannamalai", "Vellore", "Villupuram", "Viruthunagar"]
        };
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

    render() {
        var selectedState = this.state.stateValue;
        var arr = [];
        if (selectedState && this.stateCache[selectedState]) {
            arr = this.stateCache[selectedState];
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
                    <label htmlFor='stateDrop' />State: <select defaultValue={this.state.selectValue} onChange={this.handleChangeStateValue} id='statedd'>
                        {
                            this.stateCache.stateName.map((val) => {
                                return <option>{val}</option>
                            })
                        }

                    </select>
                </div>
                <br />

                <div>
                    <label htmlFor='cityDrop' />City:   <select id='citydd'>{
                        arr.map((val) => {
                            return <option>{val}</option>
                        })
                    }
                    </select>
                </div>
            </div>

        );
    }
}
export default Addressdetails;  