import React from 'react';
import './Pokecard.css'

class Pokecard extends React.Component{

    render(){
    
        const {id, name, type, exp} = this.props;
    
        return(
            <div className="col-sm-3">
                <div className="Pokecard col-sm-12">
                    <div className="Pokecard-div-img">
                        <img className ="Pokecard-img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`} alt=""></img>
                    </div>
                    <h3 className="Pokecard-name">{name}</h3>
                    <div className="Pokecard-div-info">
                        <h4 className="Pokecard-info">Type: {type}</h4>
                        <h4 className="Pokecard-info">EXP: {exp}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pokecard;