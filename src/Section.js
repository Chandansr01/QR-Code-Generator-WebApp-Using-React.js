import React from "react";


export default function Section(){
    const [content, setContent] = React.useState("")
    const [errorText, seterrorText] = React.useState("")
    const [imSource, setimSource] = React.useState("")

    const [styling, setStyling] = React.useState({
        display:"none"
    })
    function updateValue(event){
        const val = event.target.value;
        setContent(val);
        // console.log(content)
    }
    function generateQr(){
        if (content===""){
            seterrorText("Please enter some text")
            document.getElementById("img").style.display="none"
    
        }
        else{
            seterrorText("")
            document.getElementById("img").style.display="block"
            setimSource("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+content)
        }
    }
    return(
        <div className="container">
            <input type="text" id="text" onChange={updateValue} placeholder="Enter text or URL" className="input"/>
            <button type="button" onClick={generateQr}>Generate QR</button>

            <div id="qr-image">
                <span className="error">{errorText}</span><br/>
                <img src={imSource} id="img" alt="asdasd"></img>
            </div>
        
        </div>
    )
}