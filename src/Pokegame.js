import React from 'react';
import './Pokegame.css';
import Pokecard from './Pokecard.js'
import Pokedex from './Pokedex.js'
import Button from './Button.js'

class Pokegame extends React.Component {

    render(){
        
        const {object} = this.props;
        const pokecards = object.map((pk) =>
        <Pokecard key ={pk.id}
        id={(pk.id).padStart(3, '0')}
        name={pk.name}
        type={pk.type}  
        exp={pk.base_experience}
        />
        )

        const pokecards_hand_one = [];
        const pokecards_hand_two = [];
        const pokecards_length = pokecards.length;

        //first hand
        for (var i = 0; i < pokecards_length; i++){

            let random = Math.floor(Math.random() * pokecards.length)

            pokecards_hand_one.push(pokecards[random])
            pokecards.splice(random,1)

            if (pokecards_hand_one.length >= 4){
                break;
            }
        }

        //second hand
        pokecards.map((pk) => pokecards_hand_two.push(pk))

        //calcuate xp
        let first_hand_exp = 0;
        pokecards_hand_one.forEach(function calculateEXP(item){

            first_hand_exp += item.props.exp;
        })

        let second_hand_exp = 0;
        pokecards_hand_two.forEach(function calculateEXP(item){

            second_hand_exp += item.props.exp;
        })

        
        
        return(
            <div className='Pokegame'>
                <div className="row">
                    <div className="col-sm-12 Pokegame-Button">
                        <Button />
                    </div>
                </div>
                <Pokedex pokecards={pokecards_hand_one} 
                isWinner={first_hand_exp > second_hand_exp ? true:false}
                total_exp={first_hand_exp}
                />
                <Pokedex pokecards={pokecards_hand_two} 
                isWinner={second_hand_exp > first_hand_exp ? true:false} 
                total_exp={second_hand_exp}
                />
            </div>
        );
    }
}


export default Pokegame;