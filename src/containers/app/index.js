import React from 'react'
import { Route } from 'react-router-dom'
import Profile from '../profile'

const App = () => (
    <main className="container text-center">
        <Route exact path="/" component={Profile} />
    </main>
)

export default App
