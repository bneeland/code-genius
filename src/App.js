import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

function Fragment(props) {
  if (props.isActive) {
    return (
      <span
        onClick={props.onClick}
        className="bg-sky-500 text-white py-0.5 px-0.5 rounded cursor-pointer"
      >
        {props.text}
      </span>
    );
  } else {
    return (
      <span
        onClick={props.onClick}
        className="bg-gray-200 py-0.5 px-0.5 rounded cursor-pointer hover:bg-sky-500 hover:text-white"
      >
        {props.text}
      </span>
    );
  }
}

function Annotation(props) {
  return (
    <div className="sticky top-20 grid grid-cols-12 rounded mt-8 overflow-auto  bg-gray-200 text-gray-800 p-4">
      <div className="col-span-11">
        <p className="mb-3 text-gray-600"><small><b>Genius Annotation</b></small></p>
        <p>{props.text}</p>
      </div>
      <div className="text-right">
        <button
          onClick={props.onClick}
          className="px-2 text-gray-500 p-1 hover:text-gray-800"
        >
          <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  )
}

function App() {
  const [activeAnnotation, setActiveAnnotation] = useState(null);

  const handleActiveAnnotationToggle = (id) => {
    if (activeAnnotation == null) {
      setActiveAnnotation(id);
    } else if (activeAnnotation == id) {
      setActiveAnnotation(null);
    } else {
      setActiveAnnotation(id);
    }
  }

  return (
    <div>
      <div className="sticky top-0 p-4 bg-white border-b border-b-gray-300 drop-shadow">
        <h1 className="text-2xl font-thin text-sky-500 cursor-default">Code Genius</h1>
      </div>
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-7 custom-code-text text-gray-800">
            <h1>5. Systems and Equipment</h1>
            <p><b>5.1 Ventilation Air Distribution.</b> <Fragment text="Ventilating systems" isActive={activeAnnotation === 3} onClick={() => handleActiveAnnotationToggle(3)} /> shall be designed in accordance with the requirements of the following subsections.</p>
            <p><b>5.1.1 Designing for <Fragment text="Air Balancing" isActive={activeAnnotation === 0} onClick={() => handleActiveAnnotationToggle(0)} />.</b> Ventilation air distribution systems shall be provided that allow field verification of <Fragment text="outdoor air intake flow" isActive={activeAnnotation === 1} onClick={() => handleActiveAnnotationToggle(1)} /> (V<sub>ot</sub>) during operation.</p>
            <p><b>5.1.1.1 Designing for Varying Loads and Operating Conditions.</b> The ventilation air distribution system for <Fragment text="variable air volume (VAV)" isActive={activeAnnotation === 2} onClick={() => handleActiveAnnotationToggle(2)} /> and multispeed constant air volume (CAV) applications <Fragment text="shall be provided with means to adjust the system to achieve at least the minimum ventilation airflow as required by Section 6 under any load condition or dynamic reset condition" isActive={activeAnnotation === 7} onClick={() => handleActiveAnnotationToggle(7)} />.</p>
            <p><b>5.1.2 Plenum Systems.</b> When the <Fragment text="ceiling or floor plenum" isActive={activeAnnotation === 9} onClick={() => handleActiveAnnotationToggle(9)} /> <Fragment text="is used both to recirculate return air and to distribute ventilation air to ceiling-mounted or floor-mounted terminal units, the system shall be engineered such that each space is provided with its required minimum ventilation airflow" isActive={activeAnnotation === 10} onClick={() => handleActiveAnnotationToggle(10)} />.<br /><b><i>Informative Note:</i></b> <Fragment text="Systems with direct connection of ventilation air ducts to terminal units, for example, comply with this requirement" isActive={activeAnnotation === 4} onClick={() => handleActiveAnnotationToggle(4)} />.</p>
            <p><b>5.1.3 Documentation.</b> The <Fragment text="design documents" isActive={activeAnnotation === 5} onClick={() => handleActiveAnnotationToggle(5)} /> shall specify minimum requirements for air balance testing or reference applicable national standards for measuring and balancing airflow. <Fragment text="The design documentation shall state assumptions that were made in the design with respect to ventilation rates and air distribution." isActive={activeAnnotation === 8} onClick={() => handleActiveAnnotationToggle(8)} /></p>
            <h2>5.2 Exhaust Duct Location</h2>
            <p><b>5.2.1</b> <Fragment text="Exhaust ducts that convey Class 4 air shall be negatively pressurized relative to ducts, plenums, or occupiable spaces through which the ducts pass" isActive={activeAnnotation === 6} onClick={() => handleActiveAnnotationToggle(6)} />.</p>
          </div>
          {activeAnnotation != null && <div className="col-span-5">
            {activeAnnotation === 0 && <Annotation text="Air balancing is the process by which a technician (called an air balancer) adjusts dampers and fan speeds to achieve the air flows specified in the design drawings and specifications." onClick={() => setActiveAnnotation(null)} />}
            {activeAnnotation === 1 && <Annotation text="Outdoor air intake flow is the total amount of airflow drawn in from the outdoors by an air system. The term 'ventilation' essentially means outdoor air for the purpose of diluting air contaminants and providing oxygen in indoor spaces." onClick={() => setActiveAnnotation(null)} />}
            {activeAnnotation === 2 && <Annotation text="Variable air volume (VAV) systems are used widely in North America. VAV systems use a central air handing unit, ducted to VAV boxes, which normally consist of an airflow sensor and a airflow control damper, and often a heating coil." onClick={() => setActiveAnnotation(null)} />}
            {activeAnnotation === 3 && <Annotation text="Ventilation is the concept of distributing outdoor air into enclosed spaces in order to dilute indoor conaminants and provide oxygen to the space." onClick={() => setActiveAnnotation(null)} />}
            {activeAnnotation === 4 && <Annotation text="This note is saying that, if using a plenum (such as a ceiling space or underfloor space) to distribute ventilation air (which could be 100% outdoor air or a mix of outdoor air and return air), the ventilation air probably needs to be ducted in order to comply with the requirement of section 5.1.2 (Plenum Systems) above it." onClick={() => setActiveAnnotation(null)} />}
            {activeAnnotation === 5 && <Annotation text="Design documents can be drawings, specifications, or both. Some design documents are comprised only of drawings, but usually there are some written specifications, either included on a drawing sheet or in a separate document." onClick={() => setActiveAnnotation(null)} />}
            {activeAnnotation === 6 && <Annotation text='Class 4 air is defined in section 5.18 (Air Classification and Recirculation) in this standard: "Air with highly objectionable fumes or gases or with potentially dangerous particles, bioaerosols, or gases, at concentrations high enough to be considered as harmful."' onClick={() => setActiveAnnotation(null)} />}
            {activeAnnotation === 7 && <Annotation text="Variable air volume and multispeed constant air volume systems are designed to have different airflows going to different rooms or groups of rooms (zones) in response to the need for heating or cooling in those rooms. This section is saying that, regardless of the airflow being delivered by the system, the minimum ventilation airflow (i.e. outdoor airflow), as defined in Section 6, needs to be maintained." onClick={() => setActiveAnnotation(null)} />}
            {activeAnnotation === 8 && <Annotation text="Assumptions commonly include how many people are going to be in each space, and what activities they will be doing." onClick={() => setActiveAnnotation(null)} />}
            {activeAnnotation === 9 && <Annotation text="A plenum is a general term for an enclosed space through which air flows. Plenums differ from ducts in that they are wider and taller, and they are not as long. A duct could be considered like a tube or a pipe for air, whereas a plenum could be considered like a tank for air to mix in and flow through." onClick={() => setActiveAnnotation(null)} />}
            {activeAnnotation === 10 && <Annotation text="If a plenum has both supply air containing ventilation (outdoor) air going to ventilated spaces and contaminated return air coming back from spaces, this creates a problem with ensuring that ventilation air doesn't simply get short-circuited and drawn back into the air system before it gets to the spaces it's supposed to be ventilating." onClick={() => setActiveAnnotation(null)} />}
          </div>}
        </div>
      </div>
    </div>
  );
}

export default App;
