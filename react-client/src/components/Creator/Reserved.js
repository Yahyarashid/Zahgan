
import React from 'react'
import $ from 'jquery';
import EventClassNew from '../Home/EventClassNew'
import GoogleMapReact from 'google-map-react';

import Eventcreat from './Eventcreat'
import Reservedcreat from './Reservedcreat'


import {BrowserRouter ,Route ,Switch} from 'react-router-dom'



class Reserved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };



  }

  componentDidMount() {

    $.ajax({
      url: '/create',
      success: (data) => {
        console.log(data)
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }





 

  render() {
   
    return (
      <div>
      
        <div>
        
{
this.state.items.map((item) =>{
return(<div >
<Reservedcreat item={item}/>
</div>)

})

}  
</div>
      </div>




    );
  }
}
export default Reserved
