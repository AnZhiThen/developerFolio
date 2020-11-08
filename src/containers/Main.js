import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Top from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import Education from "./education/Education";
import Splash from "./splash/Splash";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show: false,
        show2: false
    };
  }
  componentDidMount() {
    this.timeout = setTimeout(() => {
      console.log('dud what')
      console.log(this.state.show)
      this.setState({ show: false, show2: false });
      console.log(this.state.show)
    }, 2500);
    this.timeout = setTimeout(() => {
      console.log('dud what')
      console.log(this.state.show)
      this.setState({ show: true, show2: true});
      console.log(this.state.show)
    }, 4000);
    this.timeout = setTimeout(() => {
        console.log('dud what')
        console.log(this.state.show)
        this.setState({ show: true, show2: false  });
        console.log(this.state.show)
    }, 100);
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div>
        {
          this.state.show2
          ? <Portfolio />
          : <Splash show={ this.state.show } />
        }
      </div>
    );
  }
}

function Portfolio() {
  return (
    <div>
      <Header />
      <Greeting />
      <Skills />
      <StackProgress />
      <Education />
      <WorkExperience />
      {/* <Projects />
      <StartupProject />
      <Achievement />
      <Blogs />
      <Talks />
      <Twitter />
      <Podcast /> */}
      <Profile />
      <Footer />
      <Top />
    </div>
  );
}
