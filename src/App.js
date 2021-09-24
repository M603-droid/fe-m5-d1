import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CompanySearch from './components/CompanySearch';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
   <Provider store={store}>     
    <Router>
       < Route exact path = '/' component = {SearchBar}/>
       <Route exact path='/:companyName' component={CompanySearch} />
       </Router>
       </Provider>
        
     
    </div>
  );
}

export default App;
