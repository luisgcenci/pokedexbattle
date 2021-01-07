import React from 'react'
import {Link} from 'react-router-dom'
import './Button.css'

class Button extends React.Component{

    render(){

        return(
            <Link to="/"><button type="button" className="btn btn-primary Button">Play Again</button></Link>
        );
    }
}

export default Button