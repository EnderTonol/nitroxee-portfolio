import Spline from '@splinetool/react-spline';
import './App.css';
import Arts from './components/Art';
import Home from './components/Home';
import Grid from './components/com-ui/grid';
import SkillsSection from './components/skills';
function App() {
  return (
    <div className="overflow-x-hidden min-h-screen bg-black">
        <Spline className="hidden absolute top-0 -right-44 lg:block" scene="https://prod.spline.design/5ejzkT0zQD0mO8Zk/scene.splinecode" />
      <div className="relative w-full">
        <div className="top-0 w-full h-[40px] bg-black flex items-center justify-center z-50">
          
          <h1 className="text-xl tracking-wider font-fihover text-orange">--------In Maintainance!--------</h1>
          {/* <h1 className="text-xl tracking-wider font-fihover">nitroXee</h1> */}
        </div>
        <div className="relative pt-[40px]">
          <Home/>
          <Grid/>
          <Arts/>
          <SkillsSection/>
        </div>
      </div>
    </div>
  );
}

export default App;