import React, { Component } from 'react';
import logo from '../images/TweetMapPointer.png';

class App extends Component {
  render() {
    return (
      <div className="HomeBack">
      <div className={"HomeScreen"}>
      <div className="FlexRow HeaderTitle">
       <img src={logo} alt="Smiley face" className={"LogoImg"}/> 
       <h1 className="HeaderHead bluetext">{" "}Tweet</h1>
       <h1 className="HeaderHead">Map</h1>
       </div>
      <form action="" className="HomeForm">
      <div className={"FormFlex"}>
      <div>
            <label className={"HomeText"}>#</label><input type="text" name=" tag" placeholder="tag" className={"HomeInput"}/>
           </div> 
           <div>
            <input type="submit" value="Submit" className="FormButt"/></div></div>
      </form></div>
      
      <h1>YOTE</h1>
      <h1>YOTE</h1>
      <h1>YOTE</h1>
      <h1>YOTE</h1>
      <h1>YOTE</h1>

      </div>
    );
  }
}

export default App;
