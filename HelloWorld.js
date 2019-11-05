import React, { Component } from 'react';
import './App.css';

class HelloWorld extends Component {
  constructor(Saya) {
    super(Saya);
    this.state = { salam: 'Halo' };
  }

  salamkan = () =>  {
    this.setState(
      { salam: 'Salam Untukmu' }
    );
  }

  render() {
    return (
      <div className="warna">
        {this.state.salam} {this.props.namaDepan} {this.props.namaBelakang}
        <br/>
        <button className="tombol" onClick={this.salamkan}>Salam!</button>
      </div>
    );
  }
}

export default HelloWorld;
