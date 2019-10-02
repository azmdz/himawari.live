import React from 'react';
import Sound from "./Sound";

class SoundList extends React.Component {
  render() {
    return (
      <section className={"saysound"}>
        <h2>ひまわりボタン</h2>
        <ul className={"soundContainer"}>
          {
            this.props.sound_data.map((sound, index) => (
                <Sound key={index} say={sound.say} src={sound.src}/>
              )
            )}
        </ul>
      </section>
    )
  }
}

export default SoundList;
