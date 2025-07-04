import styles from "./App.module.css";
import {User} from './list_user'

export default function List(){
    // const names = ["Navpreet", "Pedro", "Cheeseball", "Soundwave", "Shockwave"]

    const users = [
        {name: "Navpreet", age: 20},
        {name: "Soundwave", age: 290000},
        {name: "Shockwave", age: 20000},

    ];
    return(
        <div className="App">
            {users.map((user, key) => {
                return (
                    <User name = {user.name} age = {user.age}/>
                )
            })}
</div>
    )
    
}






//     <div className="App">
//         {users.map((user, key) => {
//             return <h1 key = {key}>{key+1} {user} </h1>
//         })}

//     </div>
// )
// return <div>
//                 <h1 key = {key}>{key+1} {user.name} {user.age} </h1>
//                 </div>