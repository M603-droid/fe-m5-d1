import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
       < Route exact path = '/' component = {SearchBar}/>

       </Router>
        
     
    </div>
  );
}

export default App;
