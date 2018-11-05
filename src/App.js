import React, { Component } from 'react';

import './index.css';

class App extends Component {
  state = {
    rating: 1
  }

  addOne = () =>{
    this.setState({rating: this.state.rating + 1})
  }

render(){
  return (
      <div className="container" onClick={this.addOne}>
        <svg style={{width: 0, height: 0}}>
          <clipPath id="ratingSVGQuality">
             <text className="smallSVGText" y="72">{this.state.rating}</text>
          </clipPath>
        </svg>
        <div>
          <div>
            <div className="QualityNumber">
            </div>
          </div>
         <p style={{color: "green"}}>{this.state.rating}</p>
        </div>
        <div>SVG text blue, regular text green.  Click to increment</div>
        <br />
        <div>Currently Using React {React.version}</div>
      </div>
  )}
}

export default App;
