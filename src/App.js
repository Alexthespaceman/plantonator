import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import pic1 from "./images/cactus.jpeg";
import pic2 from "./images/gerbera.jpeg";
import pic3 from "./images/golden-pathos.jpeg";
import pic4 from "./images/monstera.jpeg";
import pic5 from "./images/portulacaria-afra.jpeg";
import pic6 from "./images/snake-plant.jpeg";
import pic7 from "./images/succulent.jpeg";
import pic8 from "./images/viola.jpeg";
import pic9 from "./images/yucca.jpeg";
import Menu from "./components/Menu.jsx";
import Plants from "./components/Plants";
import Start from "./components/Start";

class App extends React.Component {
  state = {
    plants: [
      {
        name: "Golden Pathos",
        img: pic1,
        total: 9,
        id: 1,
      },

      {
        name: "cactus",
        img: pic2,
        total: 5,
        id: 2,
      },
      {
        name: "Gerbera",
        img: pic3,
        total: 7,
        id: 3,
      },
      {
        name: "Monstera",
        img: pic4,
        total: 8,
        id: 4,
      },
      {
        name: "Portulacaria Afra",
        img: pic5,
        total: 6,
        id: 5,
      },

      {
        name: "Snake Plant",
        img: pic6,
        total: 4,
        id: 6,
      },
      {
        name: "Succulent",
        img: pic7,
        total: 8,
        id: 7,
      },
      {
        name: "Viola",
        img: pic8,
        total: 2,
        id: 8,
      },
      {
        name: "Yucca",
        img: pic9,
        total: 2,
        id: 9,
      },
    ],
    count: 0,
  };

  plusOne = () => {
    console.log("invoked");
    if (this.state.count < 9) {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    }
    console.log(this.state.count);
  };

  plusTwo = () => {
    if (this.state.count < 9) {
      this.setState((prevState) => {
        return { count: prevState.count + 2 };
      });
    }
    console.log(this.state.count);
  };

  plusThree = () => {
    if (this.state.count < 9) {
      this.setState((prevState) => {
        return { count: prevState.count + 3 };
      });
    }
    console.log(this.state.count);
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className='content'>
        <Header />
        <Plants
          key={this.state.plants.id}
          plants={this.state.plants}
          count={this.state.count}
          plantTotal={this.state.plants.total}
        />
        {this.state.count === 0 ? 
         <Start plusOne={this.plusOne} count={this.state.count} /> :
         <Menu
          plusOne={this.plusOne}
          plusTwo={this.plusTwo}
          plusThree={this.plusThree}
          reset={this.reset}
        /> 
      }
      </div>
    );
  }
}

export default App;