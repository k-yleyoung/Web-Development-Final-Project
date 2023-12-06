import './App.css';
import CreateEntry from './Pages/CreateEntry.jsx';
import MyDashboard from './Pages/MyDashboard.jsx';
import Header from './Components/Header.jsx';
import ViewEntry from './Pages/ViewEntry.jsx';
import Footer from './Components/Footer.jsx';
import ViewTopic from './Pages/ViewTopic.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header/>
      <div>
        <Routes>
          <Route exact path = '/' element = {<MyDashboard/>}/>
          <Route exact path = '/createEntry' element = {<CreateEntry/>}/>
          <Route exact path = '/viewEntry' element = {<ViewEntry/>}/>
          <Route exact path = '/viewTopic' element = {<ViewTopic/>}/>

        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
