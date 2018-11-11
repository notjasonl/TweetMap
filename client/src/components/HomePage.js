import React, { Component } from "react";
import Radium, { StyleRoot } from "radium";
import logo from "../images/TweetMapPointer.png";

//USE THIS
import {
  headShake,
  fadeOutUp,
  fadeInUp,
  fadeOutDown,
  fadeInDown,
  fadeIn
} from "react-animations";

const headShaker = {
  animation: "x 1s",
  animationName: Radium.keyframes(headShake, "headShake")
};

const fadeInr = {
  animation: "x 1s",
  animationName: Radium.keyframes(fadeIn, "fadeIn")
};
const fadeOutUpr = {
  animation: "x 1s",
  animationName: Radium.keyframes(fadeOutUp, "fadeOutUp")
};

const fadeOutDownr = {
  animation: "x 1s",
  animationName: Radium.keyframes(fadeOutDown, "fadeOutDown")
};

const fadeInUpr = {
  animation: "x 1s",
  animationName: Radium.keyframes(fadeInUp, "fadeInUp")
};

const fadeInDownr = {
  animation: "x 1s",
  animationName: Radium.keyframes(fadeInDown, "fadeInDown")
};
const defaultS = {
  display: "block",
  overflow: "none"
};
const defaultM = {
  display: "none",
  overflow: "none"
};
const defaultD = {
  display: "default"
};
class App extends React.Component {
  state = {
    symbol: null,
    tag: "",
    headShake: {},
    input: {},
    load: { display: "none" },
    warn: { display: "none" },
    status: { display: "none" },
    logo: { display: "default" },
    warnDisplay: false
  };

  checkRegex = event => {
    event.preventDefault();
    let regexCheck = /[!@#$%^&*(),.//;+-/'[\\\]\=~`?":{}|<>]/g.test(
      this.state.tag
    );
    let str = this.state.tag.replace(/\s/g, "");
    regexCheck = !str || regexCheck;
    console.log(!str || regexCheck);
    this.setState({ symbol: regexCheck });
    if (regexCheck) {
      this.setState({ headShake: {}, warn: { display: "none" } }, () => {
        setTimeout(() => {
          this.setState({
            headShake: headShaker,
            warnDisplay: true,
            warn: Object.assign({}, fadeInUpr, defaultS)
          });
        }, 1);
      });
    } else {
      if (this.state.warnDisplay) {
        this.setState({ warn: fadeOutUpr, warnDisplay: false }, () => {
          setTimeout(() => {
            this.setState({ warn: defaultM });
          }, 1000);
        });
      }
      this.setState({ input: fadeOutUpr, tag: str }, () => {
        setTimeout(() => {
          this.setState({ input: defaultM }, () => {
            setTimeout(() => {
              this.setState({ load: fadeInUpr, defaultS }, () => {
                setTimeout(() => {
                  this.setState({ load: fadeOutUpr }, () => {
                    setTimeout(() => {
                      this.setState({ load: defaultM }, () => {
                        setTimeout(() => {
                          this.setState({logo:fadeOutUpr}, () => {
                        setTimeout(() => {
                          this.setState(
                            { status: fadeInUpr, defaultS, logo: defaultM });
                              }, 1000);
                            }
                          );
                        }, 1000);
                      });
                    }, 1000);
                  });
                }, 3000);
              });
            }, 1000);
          });
        }, 1000);
      });
    }
  };
  handleChange = event => {
    if (this.state.warnDisplay) {
      this.setState({ warn: fadeOutUpr, warnDisplay: false }, () => {
        setTimeout(() => {
          this.setState({ warn: defaultM });
        }, 1000);
      });
    }
    this.setState({ tag: event.target.value, headShake: {} });
  };
  handleReturn = event => {
    event.preventDefault();
    this.setState({ status: fadeOutUpr }, () => {
      setTimeout(() => {
        this.setState({
          status: defaultM,
          logo: fadeInUpr,
          defaultS,
          input: fadeInUpr,
          defaultS
        });
      }, 1000);
    });
  };
  render() {
    return (
      <StyleRoot>
        <div className="HomeBack">
          <div className={"HomeScreen"}>
           <button
              className={"FormButt ReturnButt"}
              style={this.state.status}
              onClick={this.handleReturn}
            >
              Search Again
            </button>
            <div>
                  <label className={"HomeText ReturnButt"} style={this.state.status}>
                    Showing results for #{this.state.tag}
                  </label>
                </div>
            <div className="FlexRow HeaderTitle">
              <img
                src={logo}
                alt="Logo"
                className={"LogoImg"}
                style={this.state.logo}
              />
              <h1 className="HeaderHead bluetext" style={this.state.logo}>
                {" "}
                Tweet
              </h1>
              <h1 className="HeaderHead" style={this.state.logo}>
                Map
              </h1>
            </div>
           
            <form onSubmit={this.checkRegex} className="HomeForm">
              <div className={"FormFlex"}>
                <div>
                  <label className={"HomeText"} style={this.state.load}>
                    Just a moment...
                  </label>
                </div>
                
                <div style={this.state.input}>
                  <label className={"HomeText"}>#</label>
                  <input
                    style={this.state.headShake}
                    onChange={this.handleChange}
                    value={this.state.tag}
                    type="text"
                    name=" tag"
                    placeholder="tag"
                    className={"HomeInput"}
                  />
                </div>
                <div>
                  <label className={"WarnText"} style={this.state.warn}>
                    Not Valid
                  </label>
                </div>
                <div style={this.state.input}>
                  <input type="submit" value="Submit" className="FormButt" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default App;
