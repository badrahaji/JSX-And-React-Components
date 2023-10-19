import anon  from "./image.jpg";
import free from "./free.jpg";
// my name composant function
let MyName = prompt("give me you name please ");
const UserName = () =>{
    return(

    (!MyName)?<div className="user"><h1>HELLO THERE!</h1> <img src={anon}></img></div>: <div className="user"><h1>HELLO Mr {MyName}</h1><img src={free}></img></div>
    
    )
};
export {UserName};