import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "signin"
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
      }
    }

    return (
      <div className="App">
        <Navigation route={route} onRouteChange={this.onRouteChange}/>
        {displayContent(route)}
      </div>
    );
  }
}

export default App;
