import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

function Fragment(props) {
  return (
    <span
      onClick={props.onClick}
      className="bg-gray-200 py-0.5 px-0.5 rounded cursor-pointer hover:bg-sky-500 hover:text-white"
    >
      {props.text}
    </span>
  );
}

function Annotation(props) {
  return (
    <div className="sticky top-20 mt-8 overflow-auto grid grid-cols-12 bg-gray-200 text-gray-800 p-4">
      <div className="col-span-11">
        <p className="mb-3 text-gray-600"><small><b>Annotation</b></small></p>
        <p>{props.text}</p>
      </div>
      <div className="text-right">
        <button
          onClick={props.onClick}
          className="rounded-full py-0 my-0 text-gray-500 p-1 hover:text-gray-800"
        >
          <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  )
}

function App() {
  const [activeAnnotation, setActiveAnnotation] = useState(null);

  return (
    <div>
      <div className="sticky top-0 p-4 bg-white border-b border-b-gray-300 drop-shadow">
        <h1 className="text-2xl font-thin text-sky-500 cursor-default">Code Genius</h1>
      </div>
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-7 custom-code-text text-gray-800">
            <h1>5. Systems and Equipment</h1>
            <p><b>5.1 Ventilation Air Distribution.</b> Ventilating systems shall be designed in accordance with the requirements of the following subsections.</p>
            <p><b>5.1.1 Designing for <Fragment text="Air Balancing" onClick={() => setActiveAnnotation(0)} />.</b> Ventilation air distribution systems shall be provided that allow field verification of <Fragment text="outdoor air intake flow" onClick={() => setActiveAnnotation(1)} /> (V<sub>ot</sub>) during operation.</p>
            <p><b>5.1.1.1 Designing for Varying Loads and Operating Conditions.</b> The ventilation air distribution system for <Fragment text="variable air volume (VAV)" onClick={() => setActiveAnnotation(2)} /> and multispeed constant air volume (CAV) applications shall be provided with means to adjust the system to achieve at least the minimum ventilation airflow as required by Section 6 under any load condition or dynamic reset condition.</p>
            <p><b>5.1.2 Plenum Systems.</b> When the ceiling or floor plenum is used both to recirculate return air and to distribute ventilation air to ceiling-mounted or floor-mounted terminal units, the system shall be engineered such that each space is provided with its required minimum ventilation airflow.<br /><b><i>Informative Note:</i></b> Systems with direct connection of ventilation air ducts to terminal units, for example, comply with this requirement.</p>
            <p><b>5.1.3 Documentation.</b> The design documents shall specify minimum requirements for air balance testing or reference applicable national standards for measuring and balancing airflow. The design documentation shall state assumptions that were made in the design with respect to ventilation rates and air distribution.</p>
            <h2>5.2 Exhaust Duct Location</h2>
            <p><b>5.2.1</b> Exhaust ducts that convey Class 4 air shall be negatively pressurized relative to ducts, plenums, or occupiable spaces through with the ducts pass.</p>
            <p><b>5.2.2</b> Exhaust ducts under positive pressure that convey Class 2 or Class 3 air shall not extend through ducts, plenums, or occupiable spaces other than the space from wich the exhaust air is drawn.</p>
          </div>
          {activeAnnotation != null && <div className="col-span-5">
            {activeAnnotation === 0 && <Annotation text="Air balancing is the process by which a technician (called an air balancer) adjusts dampers and fan speeds to achieve the air flows specified in the design drawings and specifications." onClick={() => setActiveAnnotation(null)} />}
            {activeAnnotation === 1 && <Annotation text="Outdoor air intake flow is the total amount of airflow drawn in from the outdoors by an air system. The term 'ventilation' essentially means outdoor air for the purpose of diluting air contaminants and providing oxygen in indoor spaces." onClick={() => setActiveAnnotation(null)} />}
            {activeAnnotation === 2 && <Annotation text="Variable air volume (VAV) systems are used widely in North America. VAV systems use a central air handing unit, ducted to VAV boxes, which normally consist of an airflow sensor and a airflow control damper, and often a heating coil." onClick={() => setActiveAnnotation(null)} />}
          </div>}
        </div>
      </div>
    </div>
  );
}

export default App;
