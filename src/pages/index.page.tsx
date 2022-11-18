import ToggleSwitch from '@/components/toggle/ToggleSwitch'
import ToggleSwitch2 from '@/components/toggle/ToggleSwitch2'

const HomePage = () => {
  return <div>HomePage

  <ToggleSwitch onChange={()=>alert("g하하")}/>
  {/* <ToggleSwitch2 /> */}

  </div>;
};

export default HomePage;
