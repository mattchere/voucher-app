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
          description: 'Description',
          show: false
        }
      ]
    };
  }

  render() {
    return (
      <VoucherList 
        vouchers={this.state.vouchers}
      />
    );
  }
}

export default App;
