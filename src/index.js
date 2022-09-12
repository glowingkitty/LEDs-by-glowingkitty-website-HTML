import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import About from './views/about'
import Products from './views/products'
import GlowTower from './views/glow-tower'
import GlowLight from './views/glow-light'
import GlowCore from './views/glow-core'
import GlowTube from './views/glow-tube'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={About} exact path="/about" />
        <Route component={Products} exact path="/products" />
        <Route component={GlowTower} exact path="/glow-tower" />
        <Route component={GlowLight} exact path="/glow-light" />
        <Route component={GlowCore} exact path="/glow-core" />
        <Route component={GlowTube} exact path="/glow-tube" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
