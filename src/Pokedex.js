import React from 'react';
import './Pokedex.css'

class Pokedex extends React.Component{

    render(){

        const {pokecards, isWinner, total_exp} = this.props
        
        return (
            <div>
                <h3 className = {isWinner ? 'Pokedex-winner' : 'Pokedex-loser'}>{isWinner ? 'Winning Hand' : 'Losing Hand'}</h3>
                <h6 className = 'Pokedex-info'>Total exp: {total_exp}</h6>
                <div className = 'Pokedex-pokecards row'>
                    {pokecards}
                </div>
            </div>
        );
    }

}

export default Pokedex;