import React from 'react'
import $ from 'jquery';
import Modal from '../Modal/Modal'


class Eventcreatsets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.item,
      show: false,
      Name: '',
      Phone: '',



    }



    this.handleSubmit = this.handleSubmit.bind(this);
 
  }

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });

  }

  handleSubmit(event, item) {
    console.log("secound parameter", this.state.items.attending)
    var obj = {
      Name: this.state.Name,
      Phone: this.state.Phone,
    }
    var id = this.state.items._id
    console.log('Name', this.state.Name)
    console.log("my items ana wy7ya", id)
    //var array =[obj]
    //var array= this.state.items.attending
    //getComputedStyle. 
    this.state.items.attending.push(obj);
    this.state.items.availableSeats = this.state.items.availableSeats


    var yahya = this.state.items
    var y7ya = '/create/' + id;

    $.ajax({
      type: "PUT",
      url: '/create/' + id,
      data: yahya,
      success: function (data) {
        console.log("my data", data)
      }
    });




    // alert(obj.eventName + ' saved !');

    // $.ajax({
    //   url: '/create',
    //   success: (data) => {
    //     console.log(data)
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
    event.preventDefault();
  }





  render() {



    return (
  
       <div className="container-fluid">
      <table class="table table-striped primary">
         
      <thead>
        <tr class="bg-primary ">
          <th scope="col " className="th-evenName">#</th>
          <th scope="col" className="th-evenName">Event Name</th>
          <th scope="col" className="th-evenName">Remaining Seats </th>
       
        </tr>
      </thead>
      <tbody>
        <tr className="primary">
          <th scope="row"></th>
          <td>{this.state.items.eventName}</td>
          <td>{this.state.items.availableSeats - this.state.items.attending.length}</td>
  </tr>
    
      </tbody>
    </table>

   
   </div>
        
        
     
    );
  }
}
export default Eventcreatsets