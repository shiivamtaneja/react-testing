import './App.css';

import { MuiMode } from './components/mui/MuiMode';
import { AppProvider } from './providers/AppProvider';
// import { CounterKeyboardInteractions } from './components/counterKeyboardInteractions/CounterKeyboardInteractions';
// import { CounterWithInitialProps } from './components/counterWithInitialProps/CounterWithInitialProps';
// import { Application } from './components/application/Application';
// import { Skills } from './components/skills/Skills';
// import { skills } from './lib/constants';

function App() {
  return (
    // <div className="App">
    //   {/* <Application /> */}
    //   {/* <Skills skills={skills}/> */}
    //   {/* <CounterWithInitialProps initialCount={0} /> */}
    //   {/* <CounterKeyboardInteractions /> */}
    // </div>
    <AppProvider>
      <div className='App'>
        <MuiMode />
      </div>
    </AppProvider>
  );
}

export default App;
