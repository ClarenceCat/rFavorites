import './App.css';
import TopNav from './components/TopNav/TopNav';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import SearchPage from './Pages/SearchPage';
import FavoritesPage from './Pages/FavoritesPage';

function App() {
  return (
    <Router basename='/'>
      <div className="App">
        <TopNav />
        <Switch>
          <Route exact path='/' component={SearchPage} />
          <Route exact path='/favorites' component={FavoritesPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
