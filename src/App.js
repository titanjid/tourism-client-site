import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages/Hone/Home';
import Header from './pages/Header/Header';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import LogIn from './pages/Login/LogIn';
import AuthProvider from './Auth/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header/>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route exact path="/home">
           <Home></Home>
         </Route>
         <Route exact path="/about">
           <About></About>
         </Route>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route exact path="/logIn">
           <LogIn></LogIn>
         </Route>
         <Route exact path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
