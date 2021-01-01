import './app.scss'
import img from './common/images/test.jpg'
import React from 'react'

const App = () => (
    <div>
        <div className="container">
            <h1>Hello World, React!</h1>
        </div>
        <div className="container">
            <img className="image" src={img}/>
        </div>
    </div>
)

export default App;