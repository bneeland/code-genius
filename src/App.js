import React, {useState} from 'react';

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
    <div className="bg-gray-200 p-4">
      {props.text}
      <button
        onClick={props.onClick}
        className="rounded-full text-black p-1 hover:bg-black hover:text-white"
      >
        x
      </button>
    </div>
  )
}

function App() {
  const [activeAnnotation, setActiveAnnotation] = useState(null);

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-2xl font-thin text-sky-500">Code Genius</h1>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-gray-800">
            <Fragment text="Zeroth fragment" onClick={() => setActiveAnnotation(0)} />
            <Fragment text="First fragment" onClick={() => setActiveAnnotation(1)} />
          </div>
          {activeAnnotation != null && <div>
            {activeAnnotation === 0 && <Annotation text="This is some annotation text for the zeroth annotation component." onClick={() => setActiveAnnotation(null)} />}
            {activeAnnotation === 1 && <Annotation text="This is text in the first annotation component." onClick={() => setActiveAnnotation(null)} />}
          </div>}
        </div>
      </div>
    </div>
  );
}

export default App;
