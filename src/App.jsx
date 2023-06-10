import { Menu } from './Menu';
import { Links } from './Links';
import shoe1 from './assets/shoe1.png';
import shoe2 from './assets/shoe2.png';

function App() {
  return (
    <div className='app'>
      <div className='navigation'>
        <Menu />
        <Links />
      </div>
      <h1>SHOES FOR EVERY DAY</h1>
      <div className='img-container'>
        <img src={shoe1} alt='leg in white shoe on a bar' />
        <img src={shoe2} alt='2 white shoes on the floor' />
      </div>
    </div>
  );
}

export default App;
