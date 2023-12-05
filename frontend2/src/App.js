import './App.css';
import CreateEntry from './Pages/CreateEntry.jsx';
import MyDashboard from './Pages/MyDashboard.jsx';
import Header from './Components/Header.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import ViewEntry from './Pages/ViewEntry.jsx';
import Footer from './Components/Footer.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header/>
      <div>
        <Routes>
          <Route exact path = '/' element = {<Login/>}/>
          <Route exact path = '/register' element = {<Register/>}/>
          <Route exact path = '/dashboard' element = {<MyDashboard/>}/>
          <Route exact path = '/createEntry' element = {<CreateEntry/>}/>
          <Route exact path = '/viewEntry' element = {<ViewEntry/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
