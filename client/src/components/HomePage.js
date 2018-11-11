import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import logo from '../images/TweetMapPointer.png';

//USE THIS
import { headShake } from 'react-animations';



class App extends React.Component {
  state={
    symbol: null,
    tag: '',
    headShake:{}
  }
 
  checkRegex =(event) => {
    let regexCheck = /[!@#$%^&*(),.//;+-/'[\\\]\=~`?":{}|<>]/g.test(this.state.tag);
    this.setState({symbol: regexCheck});
    console.log(this.state.symbol);
    console.log(this.state.tag);
    event.preventDefault();
    if (regexCheck) {
      this.setState({ headShake: {} }, () => {
      setTimeout(() => {
        this.setState({headShake:{
    animation: 'x 1s',
    animationName: Radium.keyframes(headShake, 'headShake')
  }})
      }, 1);
    })
      
    //   if(JSON.stringify({})!=JSON.stringify(this.state.headShake)) {
    //     this.setState({headShake:{}})
    //   }
     }
    //when true render the graph components maybe
  }
  handleChange = (event) => {
    this.setState({tag: event.target.value, headShake:{}});
  }
  render() {
    return (
      <StyleRoot>
      <div className="HomeBack">
      <div className={"HomeScreen"}>
      <div className="FlexRow HeaderTitle">
       <img src={logo} alt="Smiley face" className={"LogoImg"}/> 
       <h1 className="HeaderHead bluetext">{" "}Tweet</h1>
       <h1 className="HeaderHead">Map</h1>
       </div>
      <form onSubmit={this.checkRegex} className="HomeForm">
      <div className={"FormFlex"}>
      <div>
            <label className={"HomeText"}>#</label><input style={this.state.headShake} onChange={this.handleChange} value={this.state.tag} type="text" name=" tag" placeholder="tag" className={"HomeInput"}/>
           </div> 
           <div>
            <input type="submit" value="Submit" className="FormButt"/></div></div>
      </form></div>
      {!!this.state.symbol && <h1>REGEX</h1>}

      </div>
      </StyleRoot>
    );
  }
}

export default App;
