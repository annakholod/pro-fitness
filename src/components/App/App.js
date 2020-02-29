import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import SectionFitness from "../SectionFitness/SectionFitness";
import Services from "../Services/Services";
import About from "../About/About";
import Trainers from "../Trainers/Trainers";
import FirstLesson from "../FirstLesson/FirstLesson";
import Feedback from "../Feedback/Feedback";
import News from "../News/News";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";
import { Element } from "react-scroll";
import feedback from "../../helpers/feedback.json";

class App extends Component {
  state = {
    isOpenMenu: false,
    isOpenModalLesson: false,
    isOpenModalFeedback: false,
    feedbackCounter: 0,
    height: 0
  };

  UNSAFE_componentWillMount() {
    window.removeEventListener("scroll", this.scrollEvent);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollEvent);
  }

  scrollEvent = () => {
    if (window.pageYOffset) {
      this.setState({ height: window.pageYOffset });
    }
  };

  toggleMenu = () => {
    const { isOpenMenu } = this.state;
    this.setState({
      isOpenMenu: !isOpenMenu
    });
  };

  toggleModalLesson = () => {
    const { isOpenModalLesson } = this.state;
    this.setState({
      isOpenModalLesson: !isOpenModalLesson
    });
  };

  toggleModalFeedback = () => {
    const { isOpenModalFeedback } = this.state;
    this.setState({
      isOpenModalFeedback: !isOpenModalFeedback
    });
  };

  countFeedback = evt => {
    const { name } = evt.target.parentNode;
    this.setState(prevState => ({
      feedbackCounter:
        name === "btnNext"
          ? prevState.feedbackCounter + 1
          : prevState.feedbackCounter - 1
    }));
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  render() {
    const {
      isOpenMenu,
      isOpenModalLesson,
      isOpenModalFeedback,
      feedbackCounter,
      height
    } = this.state;

    let feedbackForRender = [];
    for (let i = feedbackCounter; i < feedbackCounter + 3; i += 1) {
      feedbackForRender.push(feedback[i]);
    }

    return (
      <div>
        <Header isOpenMenu={isOpenMenu} toggleMenu={this.toggleMenu} />
        <SectionFitness
          isOpenModalLesson={isOpenModalLesson}
          toggleModalLesson={this.toggleModalLesson}
        />
        <Element name="services">
          <Services />
        </Element>
        <Element name="sectionAbout">
          <About />
        </Element>
        <Trainers />
        <FirstLesson
          isOpenModalLesson={isOpenModalLesson}
          toggleModalLesson={this.toggleModalLesson}
        />
        <Element name="feedback">
          <Feedback
            feedback={feedback}
            feedbackCounter={feedbackCounter}
            feedbackForRender={feedbackForRender}
            countFeedback={this.countFeedback}
            isOpenModalFeedback={isOpenModalFeedback}
            toggleModalFeedback={this.toggleModalFeedback}
          />
        </Element>
        <News />
        <Map />
        <Element name="contacts">
          <Footer scrollToTop={this.scrollToTop} />
        </Element>
        {height > 100 && (
          <button type="button" className="buttonUp" onClick={this.scrollToTop}>
            <i className="material-icons">expand_less</i>
          </button>
        )}
      </div>
    );
  }
}

export default App;
