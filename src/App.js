import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import Particles from 'react-particles-js';
import Logo from "./components/Logo/Logo";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "home"
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    const {route} = this.state;

    const displayContent = (route) => {
      if (route === "signin") {
        return (
          <SignIn onRouteChange={this.onRouteChange}/>
        );
      } else if (route === "register") {
        return (
          <Register onRouteChange={this.onRouteChange} />
        );
      } else if (route === "home") {
        return (
          <div>
            <Logo />
            
          </div>
        )
      }
    }

    return (
      <div className="App">
        <Particles className="particles"
          params={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              size: {
                value: 9
              },
              line_linked: {
                width: 3
              },
              move: {
                speed: 7
              }
            }
          }} />

        <Navigation route={route} onRouteChange={this.onRouteChange}/>
        {displayContent(route)}
      </div>
    );
  }
}

export default App;
