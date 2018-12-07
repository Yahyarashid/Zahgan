import React from 'react'
import zahgan from './zahgan.jpg';
import $ from 'jquery';
const jwtDecode = require('jwt-decode');


class Nav extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false,
			userName: ''
		}
		this.signOut = this.signOut.bind(this);
	}

	componentDidMount() {
		console.log('componentdidmount')
		if(localStorage.getItem('token')){
			this.setState({
				isLoggedIn: true
			});
			this.setState({
				userName: jwtDecode(localStorage.getItem('token')).firstName
			})
		} else {
			this.setState({
				isLoggedIn: false
			});
		}
	}
	// componentWillMount() {
	// 	if(localStorage.getItem('token')){
	// 	this.setState({
	// 		userName: jwtDecode(localStorage.getItem('token')).firstName
	// 	})
	// }
	// }

 ToEvents = () => {
    $("#clickEvent").click(function() {
        $('html, body').animate({
            scrollTop: $("#events").offset().top
        }, 2000);
    });
}

 ToAbout = () => {
    $("#clickAbout").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 2000);
    });
}

 showLoggedInElements = () => {
    if(this.state.isLoggedIn === true){
      return 'block';
    } else {
      return 'none';
    }
}

 hideLoggedInElements = () => {
	if(this.state.isLoggedIn === true){
    return 'none';
    } else {
      return 'block';
    }
}

 signOut = (event) => {
    $.ajax({
        type: "POST",
        url: '/account/logout',
        headers: {
            token: localStorage.getItem('token')
        },
        success: (res) => {
					console.log(res)
					alert(res.message)
					if (res.success){
						localStorage.removeItem('token');
					this.setState({
						isLoggedIn: false
					})
					window.location.reload();
				}
				}
			})
			event.preventDefault();
}



	render(){
    return(
      <div>
      <nav className="navbar navbar-expand-sm ">
        <ul className="navbar-nav">
            <li className="active"><a href="/homeClass">Home</a></li>
            <li><a href="javascript:void(0);" onClick={this.ToAbout} id="clickAbout">About</a></li>
            <li><a href="#" data-toggle="modal" data-target="#myModal">Contact us</a></li>
            <img src={zahgan}></img>
            <li style={{'display': this.state.isLoggedIn === false ? 'block': 'none'}}><a href="/SignInCreator">Create</a></li>
            <li><a href="javascript:void(0);" onClick={this.ToEvents} id="clickEvent">Events</a></li>
            <li style={{'display': this.state.isLoggedIn === false ? 'block': 'none'}}><a href="/signin">Sign in</a></li>
            <li style={{'display': this.state.isLoggedIn === false ? 'block': 'none'}}><a href="/signup">Sign up</a></li>
            <li style={{'display': this.state.isLoggedIn === true ? 'block': 'none'}}><a href="javascript:void(0);" onClick={this.signOut}>Log out</a></li>
						<li><a href="javascript:void(0);">Welcome {this.state.userName}</a></li>
          </ul>
      </nav>
   </div>

  )}
}
export default Nav