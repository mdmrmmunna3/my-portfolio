
import { RouterProvider } from 'react-router-dom';
import './App.css';
// import ParticlesBackground from './components/ParticlesBackground';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      {/* <ParticlesBackground></ParticlesBackground> */}
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
