import Main from './components/Main';
import Logo from './assets/logo_white.png';
import { Toaster } from 'sonner';

function App() {
  return (
    <>
      <img src={Logo} alt="Logo" className="absolute top-4 left-4 w-16" />
      <Toaster position="bottom-center" />
      <Main />
    </>
  );
}

export default App;
