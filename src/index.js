import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import About from './views/about'
import GlowTower from './views/glow-tower'
import GlowCore from './views/glow-core'
import GlowTube from './views/glow-tube'
import Products from './views/products'
import GlowLight from './views/glow-light'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={About} exact path="/about" />
        <Route component={GlowTower} exact path="/glow-tower" />
        <Route component={GlowCore} exact path="/glow-core" />
        <Route component={GlowTube} exact path="/glow-tube" />
        <Route component={Products} exact path="/products" />
        <Route component={GlowLight} exact path="/glow-light" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
