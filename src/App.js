import CountUp from 'react-countup';
import titsgglogo from './titsgg.png';
import titsrplogo from './titsrp.png';
import bird from './bird.png';
import sbslogo from './sbslogo.png';
import sample from './tits-landing.webm';
import rustVid from './rust.webm';

import FullScreenScroller from "@torc/react-fullscreen-scroller";
import "@torc/react-fullscreen-scroller/dist/index.css";

import './App.css';

function App() {
  return (
    <div className="App">
      <img onClick={() => window.open("https://discord.gg/titsrp")} className="discord-widget" src="https://discordapp.com/api/guilds/247434867527122945/embed.png?style=banner1" loading="lazy" alt="discord widget"></img>
      <FullScreenScroller desktopBreakPoint={768}>
        <div className='page1'>
          <div className='gradient'></div>
          <body>
            <div className='TITSGG' onClick={() => window.open("https://tits.gg/rust", "_blank")}>
              <div className="videoHover_rust"></div>
              <video className='videoTag_rust' autoPlay loop muted>
                <source src={rustVid} type='video/webm' />
              </video>
            </div>
            <div className='TITSRP' onClick={() => window.open("https://titsrp.com", "_blank")}>
              <div className="videoHover"></div>
              <video className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/webm' />
              </video>
            </div>
          </body>
        </div>
        <div className='SolidBlockPage'>
          <div className='sbstop'>
          <img className='pageLogo' src={sbslogo}></img>
            <img className='birb' src={bird}></img>
            <div className='title'><a style={{display:'inline-flex', alignItems: 'baseline'}}>Made with  <div className='heart'>❤️</div></a></div>
            <div className='sbsBody'>Solid Block Studios hosts some of the most popular game servers for Source Engine games. In 2014, SugarTits created TitsRP - a lite roleplay-based Garry's Mod server heavily based on the popular 'DarkRP' gamemode. Because we own our own hardware and we take our time creating programming new features, we can ensure players have the best experience possible. </div>
          </div>
        </div>
        <div className='TitsRPPage'>
          <div className='titsrp'>
            <img className='titslogo' src={titsrplogo}></img>
            <div className='stats' style={{width:'1200px', display:'flex', justifyContent:'space-evenly'}}>
              <div className="users"><CountUp enableScrollSpy end={368990} /><a>Unique Players</a></div>
              <div className="users"><CountUp enableScrollSpy end={335688} /><a>Hours Played</a></div>
              <div className="users"><CountUp enableScrollSpy end={120} suffix="min"/><a>Avg Playtime</a></div>
              <div className="users"><CountUp enableScrollSpy end={90} suffix="fps"/><a>Avg FPS</a></div>
            </div>
            <a className='titsinfo'>TitsRP is a highly modified and optimized version of the popular 'DarkRP' gamemode for Garry's Mod, with a major focus on client performance and server optimizations. Since it's inception in 2014, TitsRP has seen over 360,000 unique players and counting. Most of our addons are 100% custom and made from scratch. You won't find a better DarkRP experience with absolutely no pay-to-win features.</a>
            <div className='JoinButt' onClick={() => window.open("steam://connect/193.243.190.39:27015")}>Connect</div>
          </div>
        </div>
        <div className='RustPage'>
          <div className='rust'>
            <img className='rustlogo' src={titsgglogo}></img>
            <a className='rustinfo'>Tits.GG offers vanilla Rust servers on industry-leading hardware. All of our servers are protected by Path's edge network and DDOS mitigation platform for a stable and enjoyable experience. No one likes downtime, so we've partned with Physgun™ to provide our players with the best experience possible on our own dedicated hardware located in Chicago.</a>
            <div className='JoinButt' onClick={() => window.open("https://tits.gg/rust", "_blank")}>Learn More</div>
          </div>
        </div>
      </FullScreenScroller>
    </div>
  );
}

export default App;
