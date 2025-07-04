import styles from "./App.module.css";

// const Age = 15
// if(age>= 18){
//     console.log("You are over 18.")

// }else{
//     console.log("You are under age.")

// }

// age >= 18 ? console.log("You are over 18.") : console.log("Under age")

function Ternary() {
  const age = 15;
  const isGreen = false;
    
//   if (age >= 18) {
//     return <h1>Hello I am over 18</h1>;
//   } else {
//     return (
//       <div className={styles.App}>
//         {<h2> I am under 18</h2>}
//         <h1 className={styles.name}>Pedro</h1>
//       </div>
//     );
//   }

//   return (
//     <div>hello</div>
//   )

    return <div className={styles.main}>
        {age >= 18 ? <h1>I am over 18.</h1> : <h1> I am under 18.</h1>}
        {/* {isGreen = } */}
        <h1 style = {{color: isGreen ? "green" : "red", backgroundColor:"blue"}}>THis has color</h1>

        {isGreen && <button>hello green is here.!</button>}
    </div>;
}

export default Ternary;
