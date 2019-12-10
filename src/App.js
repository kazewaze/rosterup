import React, { Component } from 'react';
import './reset.css';
import './App.css';
import axios from 'axios';
import NavBar from './components/NavBar/NavBar';
import Routes from './routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: ''
    };
  }

  componentDidMount() {
    axios.get('/auth/me')
    .then(res => {
      this.setState({
        user: res.data.user_name
      });
    });
  }

  render() {
    return (
      <div className="App">
      {Routes}
        <NavBar user={this.state.user} />
      </div>
    );
  }
}

export default App;