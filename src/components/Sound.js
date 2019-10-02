import React from 'react';

class Sound extends React.Component {
  
  playSound(file_name){
    const src = '../assets/sound/' + file_name + '.mp3';
    const audio = new Audio(src);
    audio.currentTime = 0;
    audio.play();
    
  }
  render() {
    return (
      <li className="soundItem">
        <button className="himawari" onClick={() => {this.playSound(this.props.src)}}>
          {this.props.say}
        </button>
      </li>

    )
  }
}

export default Sound;
