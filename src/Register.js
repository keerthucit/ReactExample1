import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import { blue100 } from 'material-ui/styles/colors';
import { red100 } from 'material-ui/styles/colors';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    handleClick(event) {
        alert('Full form submitted: ' + this.state.first_name + '\n'+
        this.state.last_name+'\n'+this.state.email+'\n'+this.state.password);
        event.preventDefault();
    }
    render() {
        return (
            // <form onSubmit={this.handleSubmit}>

            // <label>
            //   Name:
            //   <input type="text"  hintText="Enter your First Name"
            //      floatingLabelText="First Name" value={this.state.value} onChange={this.handleChange} />
            // </label>
            //    <input type="submit" value="Submit" />
            //        </form>

            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Registration Form"
                        />
                        <TextField
                            hintText="Enter your First Name"
                            floatingLabelText="First Name"
                            style={style_input}
                            onChange={(event, newValue) => this.setState({ first_name: newValue })}
                        />
                        <br />
                        <TextField
                            hintText="Enter your Last Name"
                            floatingLabelText="Last Name"
                            style={style_input}
                            onChange={(event, newValue) => this.setState({ last_name: newValue })}
                        />
                        <br />
                        <TextField
                            hintText="Enter your Email"
                            type="email"
                            floatingLabelText="Email"
                            style={style_input}
                            onChange={(event, newValue) => this.setState({ email: newValue })}
                        />
                        <br />
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            style={style_input}
                            onChange={(event, newValue) => this.setState({ password: newValue })}
                        />
                        <br />
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
                    </div>
                </MuiThemeProvider>
            </div>

        );
    }
}
const style = {
    margin: 55,
};
const style_input = {
    margin: 35,
    color: red100
};
export default Register;