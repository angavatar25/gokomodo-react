import './style/index.scss';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './views/IndexPage';

function App() {
  return (
    <div className='w-100 max-w-lg mx-auto bg-gray-300 min-h-screen relative'>  
      <Routes>
        <Route path="/" element={<IndexPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
