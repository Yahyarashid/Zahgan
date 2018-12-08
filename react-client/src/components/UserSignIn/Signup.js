import React from 'react'
import $ from 'jquery';
import {Redirect} from 'react-router-dom'
import './Signin.css';

class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        isSignedUp: false
      };


      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      var obj = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      }

      console.log(obj)
      $.ajax({
        type: "POST",
        url: '/account/signup',
        data: {
          firstName: obj.firstName,
          lastName: obj.lastName,
          email: obj.email,
          password: obj.password
        },
        success: (res) => {
          console.log(res)
          alert(res.message)
          if (res.success){
          this.setState({
              isSignedUp: true
          })
        }
        }
      });

      event.preventDefault();
    }
    

  render() {
    if (this.state.isSignedUp) {
      return  <Redirect to={{
          pathname: '/signin',
        }} />
    }
    return (
      <div className="wrapper">
      <form className="form-signin" onSubmit={this.handleSubmit}>       
      <h2 className="form-signin-heading">Sign Up</h2>
      <input type="text" className="form-control" name="firstName" placeholder="First Name" required="" autofocus="" value={this.state.firstName} onChange={e=>this.setState({firstName:e.target.value})} />
      <input type="text" className="form-control" name="lastName" placeholder="Last Name" required="" autofocus="" value={this.state.lastName} onChange={e=>this.setState({lastName:e.target.value})} />
      <input type="text" className="form-control" name="email" placeholder="Email Address" required="" autofocus="" value={this.state.email} onChange={e=>this.setState({email:e.target.value})} />
      <input type="password" className="form-control" name="password" placeholder="Password" required="" value={this.state.password} onChange={e=>this.setState({password:e.target.value})}/>      
      <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>   
      </form>
      </div>
    );
  }
}
export default Signup

      {/* <div id="zz" className="container-fluid" >
      <h2> Sign Up </h2>
      <form onSubmit={this.handleSubmit}>
        First Name : <input 
        placeholder="firstName"
        value={this.state.firstName}
        onChange={e=>this.setState({firstName:e.target.value})}/>
        <br></br>
        Last Name : <input 
        placeholder="lastname"
        value={this.state.lastName}
        onChange={e=>this.setState({lastName:e.target.value})}/>
        <br></br>
        Email : <input 
        placeholder="email"
        value={this.state.email}
        onChange={e=>this.setState({email:e.target.value})}/>
        <br></br>
        Password :<input 
        placeholder="password"
        value={this.state.password}
        type="password"
        onChange={e=>this.setState({password:e.target.value})}/>
        <br></br>
        <input type="submit" value="create" />
      </form>
      </div> */}

