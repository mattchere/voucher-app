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
        <a className="voucher-link" onClick={!this.props.used ? this.handleClick : ()=>{}}>
          <div className={!this.props.used ? 'voucher-title' : 'voucher-title-used'}>
            <h1>{this.props.title}</h1>
          </div>
        </a>
        <div className={this.props.show ? 'description-box' : 'description-box hidden'}>
          {this.props.description.map((line, i) =>
            <p key={i}>{line}</p>)}
        </div>
      </div>
    );
  }
}

export default Voucher;
