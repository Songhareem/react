import React from 'react';
import Greetings from './Greetings'

const App: React.FC = () => {
  
  const onClick = (name: string) => {
    console.log(`${name} say hello`);
  }

  return <Greetings name="king" onClick={onClick} />;
}

export default App;
