import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab,);

class Social extends React.Component {
  
  render() {
    return (
      <section className={'Social'}>
        <h2>Link</h2>
        <ul className={'SocialLink'}>
          <li><a href='https://twitter.com/honmahimawari' target='_blank' rel="noopener noreferrer">twitter<FontAwesomeIcon icon={['fab', 'twitter']} className={'icon twitter'}/></a></li>
          <li><a href='https://www.youtube.com/channel/UC0g1AE0DOjBYnLhkgoRWN1w' target='_blank' rel="noopener noreferrer">youtube<FontAwesomeIcon icon={['fab', 'youtube']} className={'icon youtube'}/></a></li>
          <li><a href='https://nijisanji.ichikara.co.jp/member/himawari-honma/' target='_blank' rel="noopener noreferrer">本間ひまわり – にじさんじ 公式サイト</a></li>
        </ul>
      </section>
    )
  }
}

export default Social;
