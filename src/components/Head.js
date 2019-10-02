import React from 'react';
import { Helmet } from 'react-helmet';

class Head extends React.Component {

  render() {
    return (
      <div className="application">
        <Helmet>
          <title>
            ひまわりボタン
          </title>
          <!-- Global site tag (gtag.js) - Google Analytics -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-119704837-2"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-119704837-2');
          </script>

        </Helmet>
      </div>
    )
  }
}

export default Head;
