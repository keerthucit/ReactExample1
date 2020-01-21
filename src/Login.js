import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import { blue100 } from 'material-ui/styles/colors';
import { red100 } from 'material-ui/styles/colors';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
     //   this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
      //  alert('Form  was submitted: ' + this.state.value);
        alert('Full form submitted: ' + this.state.first_name + '\n'+
        this.state.last_name+'\n'+this.state.email+'\n'+this.state.password);
        event.preventDefault();
      
    }
   

    render() {
        return (
            <form onSubmit={() => this.handleSubmit}>>
                <label for="firstName">
                    First Name :
                <input type="text" class="form-control" name="first_name"
                        minlength="1" maxlength="10" style={style_input}
                        placeholder="First Name" 
                        onChange={(event, newValue) => this.setState({ first_name: newValue })}/>
                </label>

               
                <label>
                   Last Name:
           
                    <input type="text" style={style_input}  name="last_name" placeholder="Enter Last Name" 
                     onChange={(event, newValue) => this.setState({ last_name: newValue })}/>
                </label>
                <label>
                    <div class="row"></div>
                    Email:
            {/* <input type="text" name="LN" placeholder="Enter Last Name" value={this.state.value} onChange={this.handleChange} /> */}
                    <input type="text" style={style_input} name="email" placeholder="Enter Email" />
                </label>
                <label for="password">
                    First Name :
                <input type="password" class="form-control" name="password"
                        minlength="1" maxlength="10" style={style_input}
                        placeholder="Enter Password" />
                </label>
                <div class="row"></div>
                <select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
                <div class="row"></div>
                <div class="row"></div>
                
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
const style_input = {
    margin: 35,
    color: red100,
    position: 'relative',
    display: 'inline-block',
    height: 40,
    width: 400


    // font-size: 14,
    // line-height: 1.42857143,
    // font-family: Helvetica Neue,Helvetica,Arial,sans-serif,


};
export default Login;