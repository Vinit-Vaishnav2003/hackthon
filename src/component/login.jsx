import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regNo: '',
      password: ''
    };
  }

  
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");

  handleRegNoChange = (event) => {
    this.setState({regNo: event.target.value});
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
    fetch('http://localhost:8000/api/v1/student/auth/login', {
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
          Registration Number:
          <input type="text" value={this.state.regNo} onChange={this.handleRegNoChange} />
        </label>
        
        <label>
          Password:
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Login;
