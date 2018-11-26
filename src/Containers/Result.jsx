import React, { Component} from 'react';
import {connect} from 'react-redux';
import Message from '../Components/Message.jsx';
import { updateIndexSelected } from '../Actions/Index.js';

class Result extends Component {
    constructor(props){
        super(props)
         setInterval(() =>  {
            this.props.updateThisCount()
         }, 1000)
         
         //If we want to get a new selectedHouse every second, we will call dispatch from setInterval.
    }


render(){
    console.log(this.props) //on verifié les props passés
  return (
       
    <div>
        <ul>
        {this.props.houses.housesList.map(house  =>  <li  key={house}>{house}</li>)}
        </ul>
        <Message  message={this.props.houses.selectedHouse}  />
    </div>  
    );
  }
} 
const mapStateToProps = store => store


const mapDispatchToProps = dispatch => ({
    updateThisCount: () => 
        dispatch(updateIndexSelected())
    
})


export  default  connect(mapStateToProps, mapDispatchToProps)(Result) 
//To make Result a Redux container we need to call Result from connect
//To get store information we need to pass the store to the Result props. 
//We do that with a function that take the store (also name as state) as argument and return the props: