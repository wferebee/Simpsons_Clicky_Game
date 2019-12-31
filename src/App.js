import React, { Component } from 'react';
import './App.css';
import PictureCard from "./components/Card";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";

class App extends Component {
  state = {
    friends,
    clickedArray: [],
    topScore: 0,
    score: 0
  };

  shuffleArray = (picturesArray) => {
    for (let i = picturesArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [picturesArray[i], picturesArray[j]] = [picturesArray[j], picturesArray[i]];
    }
    return picturesArray;
  }

  clickPicture = id => {
    
    const shuffledArray = this.shuffleArray(friends);
    this.setState({friends: shuffledArray});
    
    if (this.state.clickedArray.includes(id)) {
      this.setState({ score: 0, clickedArray: [] });
    }
    else {
      this.setState({
        clickedArray: this.state.clickedArray.concat([id]),
        score: this.state.score + 1
      });
    }

    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score }); // I had trouble getting the top score to be equal to the current score on first -
                                                     // - go around.
    }                                                // I will fix this, I just didnt realize it until I was about to submit.
  }
                    // I wish I had done a lot more compartmentalization, however this is a rough working app that met the requirements.
                    // I am going to go back and make this more component-based than it is when i have time over break.
                    // Also I think some of the css is a little funky, in the way I did it, and the way it may render on different screens
                    // fingers crossed
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <div className="logos">
          <div className="TheSimpsons"></div>
          <div className="clickyGame"></div>
          </div>
        </header>

        <h3 className="App-intro">
          <strong>Click on an image to earn points. Click on the same image and you lose!</strong> 
          <p className = "score"><strong>Score: {this.state.score} | TopScore: {this.state.topScore}</strong></p> 
        </h3>

        <Wrapper
          pictures=
            {this.state.friends.map(picture => (
              <PictureCard
                clickPicture={this.clickPicture}
                id={picture.id}
                image={picture.image}
              />
            ))}
        />

        <div className="footer">
          <h6>Created by William Ferebee</h6>
          <a href="https://github.com/wferebee/Clicky_Game">Source Code</a>
        </div>

      </div>
    );
  }
}
export default App;