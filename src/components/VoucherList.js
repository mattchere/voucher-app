import React, { Component } from 'react';
import '../App.css';
import Voucher from './Voucher';

class VoucherList extends Component {

  render() {
    return (
      <ul>
        {this.props.vouchers
          .map((voucher, i) => 
            <li key={i}>
              <Voucher 
                title={voucher.title}
                description={voucher.description}
                show={voucher.show}
                onClick={this.props.onClick}
              />
            </li>)}  
      </ul>
    );
  }
}

export default VoucherList;
