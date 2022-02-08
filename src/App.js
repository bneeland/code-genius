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
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-7 custom-code-text text-gray-800">
            <h1>5. Systems and equipment</h1>
            <p><b>5.1 Ventilation Air Distribution.</b> Ventilating systems shall be designed in accordance with the requirements of the following subsections.</p>
            <p><b>5.1.1 Designing for <Fragment text="Air Balancing" onClick={() => setActiveAnnotation(0)} />.</b> Ventilation air distribution systems shall be provided that allow field verfication of outdoor air intake flow (V_ot) during operation.</p>
            <p><b>5.1.1.1 Designing for Varying Loads and Operating Conditions.</b> The ventilation air distribution system for <Fragment text="variable air volume (VAV)" onClick={() => setActiveAnnotation(1)} /> and multispeed constant air volume (CAV) applications shall be provided with means to adjust the system to achieve at least the minimum ventilation airflow as required by Section 6 under any load condition or dynamic reset condition.</p>
          </div>
          {activeAnnotation != null && <div className="col-span-5">
            {activeAnnotation === 0 && <Annotation text="Air balancing is the process by which a technician (called an air balancer) adjusts dampers and fan speeds to achieve the air flows specified in the design drawings and specifications." onClick={() => setActiveAnnotation(null)} />}
            {activeAnnotation === 1 && <Annotation text="Variable air volume (VAV) systems are used widely in North America. VAV systems use a central air handing unit, ducted to VAV boxes, which normally consist of an airflow sensor and a airflow control damper, and often a heating coil." onClick={() => setActiveAnnotation(null)} />}
          </div>}
        </div>
      </div>
    </div>
  );
}

export default App;
