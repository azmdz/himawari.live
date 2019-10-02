import React from 'react';
import character from '../assets/images/himawari.png';

class Chara extends React.Component {
  
  render() {
    return (
      <div className={'chara'}>
        <img src={character} alt={'本間ひまわり'}/>
      </div>
    )
  }
}

export default Chara;
