import React, {useState} from 'react';

function App() {
  const [activeAnnotation, setActiveAnnotation] = useState();

  return (
    <div class="container mx-auto">
      <h1 className="text-3xl font-bold">Code Genius</h1>
      <span onClick={() => setActiveAnnotation(0)}>Zeroth fragment</span>
      <span onClick={() => setActiveAnnotation(1)}>First fragment</span>
      {activeAnnotation === 0 && <div>This is some annotation text for the zeroth annotation component.</div>}
      {activeAnnotation === 1 && <div>This is text in the first annotation component.</div>}
    </div>
  );
}

export default App;
