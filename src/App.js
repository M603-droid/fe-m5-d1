import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CompanySearch from './components/CompanySearch';

function App() {
  return (
    <div className="App">
      
      <Router>
       < Route exact path = '/' component = {SearchBar}/>
       <Route exact path='/:companyName' component={CompanySearch} />
       </Router>
        
     
    </div>
  );
}

export default App;
