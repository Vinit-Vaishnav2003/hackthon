import React from 'react';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      regNo: '',
      block: '',
      password: '',
      roomNo: ''
    };
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  handleRegNoChange = (event) => {
    this.setState({regNo: event.target.value});
  }

  handleBlockChange = (event) => {
    this.setState({block: event.target.value});
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  handleRoomNoChange = (event) => {
    this.setState({roomNo: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
    fetch('http://localhost:8000/api/v1/student/auth/register', {
    method: 'POST',
    body: JSON.stringify({
      title:"title",
      body:"body",
  
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
    })
    .then(function(response){ 
    return response.json()})
    .then(function(data)
    {alert(data + " submitted successfully");console.log(data);
    
  }).catch(error => alert('Error:', error)); 
  

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <br />
        <label>
          Registration Number:
          <input type="text" value={this.state.regNo} onChange={this.handleRegNoChange} />
        </label>
        <br />
        <label>
          Block:
          <input type="text" value={this.state.block} onChange={this.handleBlockChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </label>
        <br />
        <label>
          Room Number:
          <input type="text" value={this.state.roomNo} onChange={this.handleRoomNoChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default RegisterPage;




