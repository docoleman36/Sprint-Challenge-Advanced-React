import React from 'react';

import Navbar from './components/Navbar';
import { Card } from 'semantic-ui-react'
import './App.scss';

class App extends React.Component {
  state = {
    player: []
  };

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(res => this.setState({ player: res }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="card-container">
          {this.state.player.map(x => {
            return (
              <Card className="card">
                <Card.Header>{x.name}</Card.Header>
                <Card.Description>{x.country}</Card.Description>
                <Card.Content>{x.searches}</Card.Content>
              </Card>
            )
          })

          }
        </div>
      </div>
    );
  }
}

export default App;
