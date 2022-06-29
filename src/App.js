import {Header} from './components/Header'
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import { UserPage } from './pages/UserPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header logo="/logo192.png"></Header>
      
      <Routes>
        
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/users" element={<UserPage/>}></Route>
      </Routes>
   
  
     
    </div>
    </BrowserRouter>
  );
}

export default App;
