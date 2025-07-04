import styles from "./App.module.css";
import { User } from "./list_user";

export default function List_ternary_exercise(){
//loop through planet and display their name. Only display if they are a gas planet.
    const planet = [
        {name: "Mars", isGasPlanet: false},
        {name: "Earth", isGasPlanet: false},
        {name: "Jupiter", isGasPlanet: true},
        {name: "Venus", isGasPlanet: false},
        {name: "Uranus", isGasPlanet: true},
        {name: "Neptune", isGasPlanet: true},
        {name: "Cybertron", isGasPlanet: false},
        
    ];
    
    return(
        // <div className="App">
        //      {planet.map((user, key) => {
        //         return (
        //             <CheckPlanet name = {user.name} age = {user.age}/>
        //         )
        //     })}
        // </div>

        <div>
           planet.map(planet, index) => {
            return (

                planet.isGasPlanet ? (
                    <h2 key = {index}> {planet.name}</h2>
                )
            )

        </div>
    )
    
}

const CheckPlanet = (props) =>{
    const GasPlanet = props.isGasPlanet 
    
    return(
        <div>
            
             <h1>{props.name} {GasPlanet}</h1>
        </div>
    )
} 







