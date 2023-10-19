import { Name } from "./Name";
import { Image } from "./Image";
import { Description } from "./Descr";
import { Price } from "./Price";
import "../card.css"
// importing my composants
const Container = () => {
    return(
        // using the composants i have imported
        <div className="container">
        <Image></Image> 
        <Name></Name>
        <Description></Description>
        <Price></Price>
        </div>
    )
};
export default Container;