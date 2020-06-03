import React, {useState} from "react";

function App (){
    const [ name, setName ] = useState("hejiamin");

    const changeName =()=>{
        setName("hello rollup")
    }

    return(
    <div onClick={changeName}>{name}</div>
    )
}

export default App;
