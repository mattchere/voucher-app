import React, { Component } from 'react';
import '../App.css';
import VoucherList from './VoucherList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vouchers: [
        {
          title: 'Massage',
          description: ['This voucher entitles you to a free massage!'],
          show: false,
          used: true
        },
        {
          title: 'Movie Date',
          description: ['This voucher entitles you to one movie date with your lovely boyfriend paid by him. This also includes lunch/dinner and transportation to the venue, so use wisely!'],
          show: false,
          used: false
        },
        {
          title: 'Minecraft Multiplayer Server',
          description: ['This voucher entitles you to a month\'s worth of multiplayer Minecraft!', 
          'How this works:', 
          '- You request mods or game modes that you would like to use (eg. deathswap, crafting mods, etc.)', 
          '- Miiee will create the server and get it hosted so that there is little lag', 
          '- We can play whatever mods or minigames you want!',  
          'I know you\'ve been wanting to play with mods and other modes, so this gives you the opportunity to do so! Hope you love it (:'],
          show: false,
          used: false
        },
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
