import './App.css';
import AppRouter from './appRouter/AppRouter';
import { CatchBallProvider } from './context/CatchBallContext';
function App() {
  return (
    <div className="App">
      <CatchBallProvider>
        <AppRouter />
      </CatchBallProvider>
    </div>
  );
}

export default App;
