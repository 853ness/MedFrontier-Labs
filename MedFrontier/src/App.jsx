import { Routes, Route } from 'react-router-dom'
import {Navbar} from './components/Navbar'

import Home from "./pages/Home"

import Monitors  from './pages/Diagnostic/Tools'
import Sensors from './pages/Diagnostic/Sensors'
import Tools from './pages/Diagnostic/Tools'

import AiCompanions from './pages/Monitoring/AiCompanions'
import HeartAI from './pages/Monitoring/HeartAI'
import SmartSensors from './pages/Monitoring/SmartSensors'
import WearablesDevices from './pages/Monitoring/WearableDevices'

import Monitor from './pages/Surgery/Monitor'
import RoboticsAI from './pages/Surgery/RoboticsAI'
import Treatment from './pages/Surgery/Treatment'


function App () {
  return (
      <div className=" App">
        <Navbar/>
        <Routes>
           {/* root and home */}
          <Route path="/"     element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/*Diagnostic dropdown targets*/}
          <Route path="/diagnostic/tools" element={<Tools />} />
          <Route path="/diagnostic/sensors" element={<Sensors />} />
          <Route path="/diagnostic/monitors" element={<Monitors />} />

          {/* Surgery dropdown targets */}
          <Route path="/surgery/monitor" element={<Monitor />} />
          <Route path="/surgery/treatment" element={<Treatment />} />
          <Route path="/surgery/robotics-ai" element={<RoboticsAI />} />

          {/*Monitoring dropdown targets */}
          <Route path="/monitoring/heart-ai" element={<HeartAI />} />
          <Route path="/monitoring/smart-sensors" element={<SmartSensors />} />
          <Route path="/monitoring/wearable-devices" element={<WearablesDevices />} />
          <Route path="/monitoring/ai-companions" element={<AiCompanions />} />
        </Routes>
      </div>
  );
}
export default App
