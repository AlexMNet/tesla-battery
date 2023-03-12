import Header from './components/Header';
import TeslaBattery from './containers/TeslaBattery';

function App() {
  return (
    <div className="h-screen overflow-x-hidden bg-black text-slate-400">
      <Header />
      <TeslaBattery />
    </div>
  );
}

export default App;
