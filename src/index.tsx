import React from 'react'
import img from './common/images/test.jpg'
import './app.scss'

const App:React.FunctionComponent<{}>  = () => (
    <div>
        <div className="container">
            <h1>Hello World, React!</h1>
        </div>
        <div className="container">
            <img className="image" src={img} />
        </div>
    </div>
)

export default App;