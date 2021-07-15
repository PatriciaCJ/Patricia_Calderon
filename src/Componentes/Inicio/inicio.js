import React from 'react';

class Inicio extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.iteración(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  iteración() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Inicio</h1>
        <p>Hora Costa Rica {this.state.date.toLocaleTimeString()}.</p>
      </div>
    );
  }
}
    
export default Inicio;