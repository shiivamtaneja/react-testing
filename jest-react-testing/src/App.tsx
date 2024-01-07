import './App.css';

import { CounterKeyboardInteractions } from './Components/CounterKeyboardInteractions/CounterKeyboardInteractions';
// import { CounterWithInitialProps } from './Components/CounterWithInitialProps/CounterWithInitialProps';
// import { Application } from './Components/Application/Application';
// import { Skills } from './Components/Skills/Skills';
// import { skills } from './lib/constants';

function App() {
  return (
    <div className="App">
      {/* <Application /> */}
      {/* <Skills skills={skills}/> */}
      {/* <CounterWithInitialProps initialCount={0} /> */}
      <CounterKeyboardInteractions />
    </div>
  );
}

export default App;
