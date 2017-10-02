import React, { Component } from 'react';
import '../App.css';

class Voucher extends Component {

  render() {
    return (
      <div>
        <a className="voucher-link">
          <div className="voucher-title">
            <h1>{this.props.title}</h1>
          </div>
        </a>
        <div className={this.props.show ? 'description-box' : 'description-box hidden'}>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Voucher;
