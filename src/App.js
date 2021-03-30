import react, { Component } from 'react'
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/MenuComponent.js'
import './App.css';
import { DISHES } from './shared/dishes.js'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar darkcolor="primary">
          <div className='Container'>
            <NavbarBrand href='/'>Ristorente de confusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }

}

export default App;
