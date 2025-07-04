import styles from "./App.module.css";


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
        <div className="App">
            
        </div>
    )
    
}

const CheckPlanet = (props) =>{

    return(
        <div>
            
            {/* props.isGasPlanet ? <h1>{props.name}</h1> */}
        </div>
    )
} 

