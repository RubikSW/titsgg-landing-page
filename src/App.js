import titsgglogo from './titsgg.png';
import titsrplogo from './titsrp.png';

import sample from './tits-landing.webm';
import rustVid from './rust.webm';


import './App.css';

function App() {
  return (
    <div className="App">

      <div className='gradient'></div>

      <body>

        <div className='TITSGG' onClick={() => window.open("https://tits.gg/rust", "_blank")}>
          <div class="videoHover_rust"></div>
          <video className='videoTag_rust' autoPlay loop muted>
            <source src={rustVid} type='video/webm' />
          </video>
        </div>

        <div className='TITSRP' onClick={() => window.open("https://titsrp.com", "_blank")}>
          <div class="videoHover"></div>
          <video className='videoTag' autoPlay loop muted>
            <source src={sample} type='video/webm' />
          </video>
        </div>

        <img onClick={() => window.open("https://discord.gg/titsrp")} class="discord-widget" src="https://discordapp.com/api/guilds/247434867527122945/embed.png?style=banner1" loading="lazy" alt="discord widget"></img>

      </body>

    </div>
  );
}

export default App;
