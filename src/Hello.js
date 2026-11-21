import { useState,useMemo } from "react";
import { resume } from "react-dom/server";


function NewCount(){
    const[count,setCount] = useState(5);
    const [data,setData] = useState(1);
    const [result,setResult] = useState("")
    function incrementCount(){
        setCount(count+5)
        
    }

    function incrementData(){
        setData(data+1)
    }

    const result1=useMemo(()=>{
        console.log("result function called ")
return count*10000;
    },[count])

    return(
        <>
        <button onClick={incrementData}>increment data</button>
        <button onClick={incrementCount}>increment count</button>

    <h1>Count : {count}</h1>
<h1>Dta is :{data}</h1>
<h1>function called is :{result1}</h1>
 
     
       
</>


    )
}

export default NewCount;