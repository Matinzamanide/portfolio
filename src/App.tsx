import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Panel from './components/Panel/Panel';
import Home from './components/Home/Home';
const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/panel' element={<Panel/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;