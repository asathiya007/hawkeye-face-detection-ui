import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import Particles from 'react-particles-js';
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: '095336e05bff4a2ea6b97b417a5b7c1d'
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "signin",
      input: "",
      imageUrl: "",
      boxes: []
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  calculateFaceLocations = (response) => {
    const image = document.querySelector("#inputimage");
    const width = image.width;
    const height = image.height; 
    
    const faces = response.outputs[0].data.regions;
    const boxes = [];
    for (let face of faces) {
      const boundingBox = face.region_info.bounding_box;
      boxes.push({
        topRow: boundingBox.top_row * height,
        rightCol: width - boundingBox.right_col * width,
        bottomRow: height - boundingBox.bottom_row * height,
        leftCol: boundingBox.left_col * width 
      });
    }
  
    return boxes;
  }

  displayBoxes = (boxes) => {
    this.setState({boxes: boxes});
  }

  onPictureSubmit = (event) => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      response => this.displayBoxes(this.calculateFaceLocations(response)),
      err => console.log("error in processing photo", err)
    );
  }

  render() {
    const {route, imageUrl, boxes} = this.state;

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
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onPictureSubmit={this.onPictureSubmit}/>
            <FaceRecognition imageUrl={imageUrl} boxes={boxes}/>
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
