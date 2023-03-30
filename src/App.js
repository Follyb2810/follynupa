
import './App.css';
import Banner from './component/Banner';
import Founder from './component/Founder';
import Header from './component/Header';
import {Hero,About} from './component/Hero';
import Navbar from './component/Navbar';
import { Transport } from './component/Transport';

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Hero/>
      <About/>
      <Banner/>
      <Transport/>
      <Founder/>
    </div>
  );
}

export default App;
