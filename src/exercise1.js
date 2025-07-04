function Exercise(){
    return(
        <div className="App">

      <Job salary = {10000} position = "Senior-SDE" company ="Amazon" />
      <Job salary = {15000} position = "Junior-SDE" company ="Google" />
      <Job salary = {8000} position = "Senior-SDE" company ="MDWI" />
        
    </div>
  );
}


const Job = (userData) => {

  return (

    <div>
      <h1>My company is {userData.company}</h1>
      <h1>My salalry is {userData.salary}</h1>
      <h1>My position is {userData.position}</h1>
    </div>

  );
};





export default Exercise;

// function App() {
//   return (
//     <div className="App">
//       <User name = "Navpreet" age = {20} email = "navpreet@hello.com"/>
//     </div>
//   );
// }


// const User = (userData) => {

//   return (

//     <div>
//       <h1>My name is {userData.name}</h1>
//       <h1> {userData.age}</h1>
//       <h1>{userData.email}</h1>
//     </div>

//   );
// };