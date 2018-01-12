import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import axios from 'axios';


class LinkPage extends Component{
    constructor(props){
        super(props);
        this.state ={
            filterItems :[],
            CountryCodeValue:"",
            tableData :[{
                id:"",
                name:"",
                countryCode:"",
                abbrev:"",
                type:"",
                infoURL:"",
                wikiURL:"",
                isisp:"",
                SearchRadio:""
                
            }]
        };
    }
        componentDidMount () {
            axios.get('https://launchlibrary.net/1.3/agency', {
            	responseType: 'json'
            }).then(response => {
                this.setState({ tableData: response.data.agencies });
            });
        }

        handleSearchCountry = (e) => {
                this.setState({ CountryCodeValue: e.target.value })
        }
        
        handleChangeRadio = (e) => {
            
            this.setState({SearchRadio : e.target.value})
            console.log(this.state.SearchRadio);

            
        }

    render(){
        var { tableData } = this.state,
        filterItems = tableData;
        
        
        if(this.state.SearchRadio === "option")
        {
            const { tableData } = this.state;
            var countrySearchValue = this.state.CountryCodeValue;
            filterItems = tableData.filter((el) => el.countryCode.toUpperCase().indexOf(countrySearchValue.toUpperCase()) > -1);
            
        }
        
        if(this.state.SearchRadio === "option1")
        {
            const { tableData } = this.state; 
            var countrySearchValue = this.state.CountryCodeValue;
            filterItems = tableData.filter((el) => el.countryCode.toUpperCase().startsWith(countrySearchValue.toUpperCase()));
        }
        if(this.state.SearchRadio === "option2")
        {
            const { tableData } = this.state;
            var countrySearchValue = this.state.CountryCodeValue;
             filterItems = tableData.filter((el) => el.countryCode.toUpperCase().endsWith(countrySearchValue.toUpperCase()));
        }
        return(
            <div>
                <div>
            <input type="text" id="searchID" value={this.state.CountryCodeValue} placeholder="Search..." onChange={this.handleSearchCountry}/>
            
            <div class='radioSearch'>
            
              <label htmlFor='Searchradio1'> Search: </label>
              <label htmlFor ='Searchradio'> 
              
              <input type="radio" name="search" value="option" onChange={this.handleChangeRadio} checked={
                  this.state.SearchRadio === "option" ? true : false
                }/>
              
              All Matches</label>

              <label>
                <input type="radio" name="search" value="option1" onChange={this.handleChangeRadio} checked={
                  this.state.SearchRadio === "option1" ? true : false
                }/>

                From Begining:
              </label>
              <label>
                <input type="radio" name="search" value="option2" onChange={this.handleChangeRadio} checked={
                  this.state.SearchRadio === "option2" ? true : false
                }/>

                From End:
              </label>
            
            </div>
            </div>

            <div>
            <ReactTable
                            data={filterItems}
							columns={[
                                {
                                    Header :"Details",
                                    columns: [
                                        {
                                            Header: "ID",
                                            accessor: 'id',
                                            
                                        },
                                        {
                                            Header: "Country Code",
                                            accessor: 'countryCode',
                                        },
                                        {
                                            Header: "Abbrevation",
                                            accessor: 'abbrev',
                                        },
                                        {
                                            Header : "Type",
                                            accessor: 'type',   
                                        },
                                        {
                                            Header: "InfoURL",
                                            accessor: 'infoURL',
                                        },
                                        {
                                            Header: "WikiURL",
                                            accessor: 'wikiURL',
                                        },
                                        {

                                            Header: "ISISP",
                                            accessor: 'isisp',
                                        },
                                    ],
                                },
                        ]}
							defaultPageSize={10}
							className="-striped -highlight"
					/>
                    </div>

            
            </div>
        );
    }
}
export default LinkPage;