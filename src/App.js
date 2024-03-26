import {Switch, Route} from 'react-router-dom'
import NotFound from './components/NotFound'
import './App.css'
import LoginForm from './components/LoginForm'
import Home from './components/Home'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={LoginForm} />
    <Route component={NotFound} />
  </Switch>
)

export default App
