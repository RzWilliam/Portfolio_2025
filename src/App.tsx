import Main from './components/Main';
import Logo from './assets/logo_white.png';

function App() {
  return (
    <>
      <img src={Logo} alt="Logo" className="absolute top-4 left-4 w-16" />
      <Main />
    </>
  );
}

export default App;
