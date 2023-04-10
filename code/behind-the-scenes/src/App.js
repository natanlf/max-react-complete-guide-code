import React, { useCallback, useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/demo/DemoOutput';

function App() {

  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  /*
  without useCallback hook, the function is re-created every time that the component is re-executed. With this hook, is possible to put the function in chache
    Without this, the button component is always re-executed because the comparasion is with function and this is object, 
    if I create the function every time, the comparasion will be different, previous and current state is diferent.
    Something like this: obj1 === obj2
    if allowToggle changes then the function is re-created because of the dependency informed in hook useCallback.
    Because of this we always using the current state of allowToggle
  */
  const toogleParagraphHandler = useCallback(() => {
    if(allowToggle) {
      setShowParagraph( (prevState) => !prevState );
    }
  },[allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toogleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
