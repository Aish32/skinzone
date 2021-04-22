import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({ data }) => {
    return ( <
        >
        <
        div className = "home" >
        <
        h1 className = "home-title use-font" > Skin Zone < /h1> <
        div className = "home-cta" >
        <
        Link className = "home-cta-link"
        to = "/skintype" >
        Check Skin Type <
        /Link> <
        Link className = "home-cta-link"
        to = "/compare" >
        Product Comparison <
        /Link> <
        /div> <
        /div> <
        div class = "home_cta2" >

        <
        /div> <
        />
    );
};

export default Home;