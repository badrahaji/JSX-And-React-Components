import { Products} from "./Products.js";
// Images composants function
const Image = () =>{

    return (
        <img src= {Products.image} style={{height:230}}></img>
    )
};
export {Image};