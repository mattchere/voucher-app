import React, { Component } from 'react';
import '../App.css';

class Voucher extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.title);
  }

  render() {
    return (
      <div className="voucher">
        <a className="voucher-link" onClick={this.handleClick}>
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
