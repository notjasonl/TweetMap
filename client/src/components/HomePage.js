import React, { Component } from "react";
import Radium, { StyleRoot } from "radium";
import logo from "../images/TweetMapPointer.png";
import down from "../images/down-arrow.svg";
import npm from "../images/npm.svg";
import twitter from "../images/twotter.svg";
import world from "../images/worldwide.svg";

import brian from "../images/brian.jpg";
import pranav from "../images/pranav.jpg";
import rithvik from "../images/thiocc.jpg";
import max from "../images/max.jpg";
import jason from "../images/liu.jpg";

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
  myRef = React.createRef();
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
                          this.setState({ logo: fadeOutUpr }, () => {
                            setTimeout(() => {
                              this.setState({
                                status: fadeInUpr,
                                defaultS,
                                logo: defaultM
                              });
                            }, 1000);
                          });
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
  scrollDown = event => {
    window.scrollTo({ behavior: "smooth" });
    window.scrollTo(0, this.myRef.current.offsetTop);
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
              <label
                className={"HomeText ReturnText"}
                style={this.state.status}
              >
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
            <div className={"wrapDown"}>
              <img
                src={down}
                className={"downArrow"}
                onClick={this.scrollDown}
                style={this.state.input}
              />
            </div>
          </div>
        </div>

        <div className={"about"} ref={this.myRef} style={this.state.input}>
          <div className={"aboutCol"}>
          <h1 className={"techUsed"}>
          Technologies Used
          </h1>
            <div className={"aboutRow"}>
              <div className={"aboutCol tech"}>
                <h1>Twitter API</h1>
                <img src={twitter} className={"techImg"} />
                <p>
                  The Twitter API allows to search against recent tweets
                  posted/published in the past 7 days.
                </p>
              </div>
              <div className={"aboutCol tech"}>
                <h1>Geocodio API</h1>
                <img src={world} className={"techImg"} />
                <p>
                  Geocodio's RESTful API allows to perform forward and reverse
                  geocoding lookups. Forward Geocoding is converting addresses
                  to geographic locations (longitude & latitude). Reverse
                  Geocoding is the exact opposite (longitude & latitude to
                  street address).
                </p>
              </div>
              <div className={"aboutCol tech"}>
                <h1>Sentiment NPM Package</h1>
                <img src={npm} className={"techImg"} />
                <p>
                  Sentiment is a NPM package that uses the AFINN wordlist to
                  provide sentiment analysis on input text. The sentence given
                  is split into words, which each have different connotations.
                  The average of these words is the "score" of the sentence.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={"author"}>
        <div className={"aboutCol"}>
          <h1 className={"techUsed"}>
          People
          </h1>
            <div className={"aboutRow"}>
              <div className={"aboutCol authorSep"}>
                <h1>Brian Xiang</h1>
                <img src={brian} className={"techImg"} />
                <p>
                <span className={"boldSub"}>
                School:</span> Thomas S. Wootton High School<br/>
                <span className={"boldSub"}>
                Grade:</span> Sophmore<br/>
                <span className={"boldSub"}>
                Role:</span>Backend, Heatmap
                </p>
              </div>
              <div className={"aboutCol authorSep"}>
                <h1>Jason Liu</h1>
                <img src={jason} className={"techImg"} />
                <p>
                <span className={"boldSub"}>
                School:</span>  Poolesville High School<br/>
                <span className={"boldSub"}>
                Grade:</span>  Sophmore<br/>
                <span className={"boldSub"}>
                Role:</span> Backend, Substitute
                </p>
              </div>
              <div className={"aboutCol authorSep"}>
                <h1>Max Chiu</h1>
                <img src={max} className={"techImg"} style={this.state.input}/>
                <p>
                <span className={"boldSub"}>
                School:</span>  Poolesville High School<br/>
                <span className={"boldSub"}>
                Grade:</span> Sophmore<br/>
                <span className={"boldSub"}>
                Role:</span> Frontend, Helper
                </p>
              </div>
              <div className={"aboutCol authorSep"}>
                <h1>Pranav Tippa</h1>
                <img src={pranav} className={"techImg"} style={this.state.input}/>
                <p>
                <span className={"boldSub"}>
                School:</span>  Poolesville High School<br/>
                <span className={"boldSub"}>
                Grade:</span> Sophmore<br/>
                <span className={"boldSub"}>
                Role:</span> Frontend, Rotation
                </p>
              </div>
              <div className={"aboutCol authorSep"}>
                <h1>Rithvik Bhogavilli</h1>
                <img src={rithvik} className={"techImg"} style={this.state.input}/>
                <p>
                <span className={"boldSub"}>
                School:</span> Poolesville High School<br/>
                <span className={"boldSub"}>
                Grade:</span> Sophmore<br/>
                <span className={"boldSub"}>
                Role:</span> Rotation, Research
                </p>
              </div>
            </div>
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default App;
