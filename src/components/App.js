import React, { Component } from 'react';
import '../App.css';
import VoucherList from './VoucherList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vouchers: [
        {
          title: 'Dinner Date',
          description: 'Testing',
          show: false
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <VoucherList 
          vouchers={this.state.vouchers}
        />
      </div>
    );
  }
}

export default App;
