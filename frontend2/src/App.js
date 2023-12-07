import CreateEntry from './Pages/CreateEntry.jsx';
import MyDashboard from './Pages/MyDashboard.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Register from './Pages/Register.jsx';
import ViewTopic from './Pages/ViewTopic.jsx';
import CreateTopic from './Pages/CreateTopic.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header/>
      <div>
        <Routes>
          <Route exact path = '/' element = {<MyDashboard/>}/>
          <Route exact path = '/createEntry' element = {<CreateEntry/>}/>
          <Route exact path = '/createTopic' element = {<CreateTopic/>}/>
          <Route exact path = '/viewTopic' element = {<ViewTopic/>}/>
          <Route exact path = '/register' element = {<Register/>}/>

        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
