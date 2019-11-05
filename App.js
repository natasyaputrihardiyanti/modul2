import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'Home',
    };
  }

  clicked(menu) {

    // Fungsi ini akan memperbarui state dengan
    // dengan nilai menu yang dipilih
    this.setState({
      active: menu,
    });
  }

  render() {
    return (
      <div id="app">

          {/* map akan loop sebanyak menu yang telah kita definisikan */}
          {/* dan kemudian mengembalikan elemen baru yaitu <a/> */}
          <nav className="nav">{ this.props.items.map((menu, index) => {
            var style = 'menu';

            if (this.state.active === menu) {
              style = `${style} is-active`;
            }

            return <a
                    className={style}

                    // Kita menggunakan bind sehingga 'menu' bisa di kirim ke
                    // fungsi 'clicked'
                    onClick={this.clicked.bind(this, menu)}
                    key={index}
                  >
                    {menu}
                  </a>;
          }) }
          </nav>

          <div className="info">
            Anda memilih <span className="selected">{this.state.active}</span>
          </div>
      </div>
    );
  }
}
