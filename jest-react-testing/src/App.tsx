import './App.css';

import { Counter } from './Components/Counter/Counter';
// import { Application } from './Components/Application/Application';
// import { Skills } from './Components/Skills/Skills';
// import { skills } from './lib/constants';

function App() {
  return (
    <div className="App">
      {/* <Application /> */}
      {/* <Skills skills={skills}/> */}
      <Counter />
    </div>
  );
}

export default App;
