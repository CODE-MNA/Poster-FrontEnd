
import { Route, BrowserRouter, Routes, Outlet, HashRouter} from 'react-router-dom'
import { UserPage } from './pages/UserPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { Header } from './components/layout/Header';
import { useAuth } from './auth/authContext';
import {useEffect} from 'react'
import { PrivateRoute } from './components/PrivateRoute';
import { PostPage } from './pages/PostPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RegisterPage } from './pages/RegisterPage';
import './App.css'
import { Footer } from './components/layout/Footer';
import { FullPage } from './styles/global.styles';
import { usePageContext } from './pages/pageContext';
import { useFetch } from './hooks/useFetch';

function App() {

    const {login,token,logout,loggedIn,user} = useAuth();
    const{data,error,getData} = useFetch(`${process.env.REACT_APP_BACKEND_URL}/auth/checkToken`)
    const {currentPage} = usePageContext();

    //Toggle COMMENT TO GET/remove RELOGIN FROM LOCAL STORAGE
    useEffect(() => {

        let getTokenValidity = async (accessToken) => {
            await getData(`${process.env.REACT_APP_BACKEND_URL}/auth/checkToken`,accessToken)
        }


        let userSaved = localStorage.getItem('currentUser');
        if (userSaved) {
          let user = JSON.parse(userSaved);
          let prevToken = user.token

          if(prevToken !== "" || typeof prevToken !== typeof undefined) {
            console.log(prevToken)
            getTokenValidity(prevToken)

            
          }
             
        }else{
            logout()
        }
       
    }, []);


    useEffect(() => {
      let userSaved = localStorage.getItem('currentUser');
      if (userSaved) {
        let user = JSON.parse(userSaved);
        let prevToken = user.token


      if(data){
        login("",prevToken, user.user);
  
      }         
  
    
      }
      if(error){
        logout()
      }
    }, [data,error])
    
    
  return (
    <BrowserRouter basename={process.env.REACT_APP_APPNAME}>
    <div className="App">
      <Header logo="/logo192.png"></Header>
      <h1 className="pageHeading">{currentPage}</h1>
      
      <FullPage>
      <Routes >

        <Route element={<PrivateRoute></PrivateRoute>}>
          {/* PrivateRoutes here */}

          <Route path="/users" element={<UserPage title="Users"/>}></Route>
          <Route path=":UserId/posts" element={<PostPage/>}></Route>
        </Route>
      
      <Route path="/" element={<HomePage title="Home"/>}></Route>
      <Route path="/home" element={<HomePage title="Home"/>}></Route>

      <Route path="/login" element={<LoginPage title="Login" />}></Route>
      <Route path="/register" element={<RegisterPage title="Register" />}></Route>

      <Route path="*" element={<NotFoundPage title="404 Not Found"/>}></Route>
    </Routes> 
    </FullPage>
    

    <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;

