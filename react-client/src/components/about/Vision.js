import React from 'react'
import zahgan from '../Home/zahgan.jpg';
import location from './pages/location'
import vision from './pages/vision'
import './Vision.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Vision = () => {

	return (


		<div id="about">
			<div className="row">
				<div className="col-md-12">
					<p className="main_title"><span>About Us</span></p>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
				<Link to = "/vision" >
					<div className="box" >
						<div className="box-icon"> <span className="glyphicon glyphicon-heart-empty "></span> </div>
						<div className="info">
							<h4 className="text-center">About</h4>
							<p> Our mission is to provide you with a tool to find the best events happening around you <br/>
							<u>read more</u></p>
						</div>
					</div>
					</Link>
				</div>
				
				<div className="col-md-4">
				<Link to='/location'>
					<div className="box">
						<div className="box-icon"> <span className="glyphicon glyphicon-map-marker"></span> </div>
						<div className="info">
							<h4 className="text-center">Our location</h4>
							<p>Our team will be happy to meet you
            				<br /><u>Our location</u>
							</p>
						</div>
					</div>
					</Link>
				</div>
				<div className="col-md-4">
					<div className="box">
						<div className="box-icon"> <span className="glyphicon glyphicon-earphone"></span> </div>
						<div className="info">
							<h4 className="text-center">help</h4>
							<p> Do you need help? Our team will be happy to help you, contact us at <br /> 06-xxxxxxx </p>          </div>
					</div>
				</div>
			</div>
		</div>


	)
}
export default Vision