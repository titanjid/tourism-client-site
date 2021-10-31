import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './pages/Header/Header';
import AddTicket from '../src/addTicket/AddTicket'
import NotFound from './pages/NotFound/NotFound';
import LogIn from './pages/Login/LogIn';
import AuthProvider from './Auth/AuthProvider';
import Footer from './pages/Footer/Footer';
import SingleTicket from './singleTicket/SingleTicket';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
         <Route exact path="/addTicket">
           <AddTicket></AddTicket>
         </Route>
         <PrivateRoute  path="/singleTicket/:id">
           <SingleTicket></SingleTicket>
         </PrivateRoute>
         <Route exact path="/logIn">
           <LogIn></LogIn>
         </Route>
         <Route exact path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
