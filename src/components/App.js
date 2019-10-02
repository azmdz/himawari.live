import React, {Component} from 'react';

import '../assets/style.scss'
import 'font-awesome/css/font-awesome.min.css';

import Header from "./Header";
import SoundList from './SoundList';
import sound from '../assets/himawari';
import Social from "./Social";
import Chara from "./Chara";
import Bg from "./Particles";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sound_data: []
    };
  }

  componentDidMount() {
    //Fetch pref list
    this.setState({sound_data:sound});
  }

  changeCheckbox(prefectureId) {
  }

  render() {
    // console.log(this.state.sound_data);
    return (
      <main>
        <Header/>
        <div className='container'>
          <Social/>
          <SoundList sound_data={this.state.sound_data}/>
        </div>
        <Footer/>
        <Chara/>
        <Bg/>
      </main>
    );
  }

}

export default App;
