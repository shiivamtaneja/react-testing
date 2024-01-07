import './App.css';

import { MuiMode } from './Components/Mui/MuiMode';
import { AppProvider } from './Providers/AppProvider';
// import { CounterKeyboardInteractions } from './Components/CounterKeyboardInteractions/CounterKeyboardInteractions';
// import { CounterWithInitialProps } from './Components/CounterWithInitialProps/CounterWithInitialProps';
// import { Application } from './Components/Application/Application';
// import { Skills } from './Components/Skills/Skills';
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
