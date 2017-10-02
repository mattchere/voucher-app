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
          description: 'This voucher entitles you to one dinner date with your lovely boyfriend paid by him. This also includes transport to the dinner venue and dessert (the most important part)! Use whenever you wish (:',
          show: false
        }
      ]
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(title) {
    this.setState({
      vouchers: this.state.vouchers
        .map(v => {
          if (v.title === title) {
            return {
              title: v.title,
              description: v.description,
              show: v.show ? false : true
            }
          }
          return v
        })
    })
  }

  render() {
    return (
      <div className="app">
        <VoucherList 
          vouchers={this.state.vouchers}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default App;