import Container from "./components/Container";
import "./card.css";
import {UserName} from "./components/Myname"
// my App.js file
const App = () => {
    return(
        
        <>
        {/* my compoenent used in the app js */}
        <UserName className="user"></UserName>

        <div className="card">
        <Container></Container>
        <Container></Container>
        <Container></Container>

        </div>
    

        </>
    )
};
export default App;