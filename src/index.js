import React from "react-dom"
import ReactDOM from "react-dom"
import Header from "./Header"
import "./style.css"
import Section from "./Section"
function Renders(){
    return(
        <div>

        <Header/>
        <Section/>
        </div>
    )

}
ReactDOM.render(<Renders/>, document.getElementById("root"));