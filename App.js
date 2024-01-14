 
import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './src/components/Header'
import {useState} from 'react'
import './App.css'



const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = "This is parent";
const AppLayout = () => {
    const handler = (data)=>{
        setData(data+1);
    }
const [data,setData] = useState(0);

return (
    <>
    <Header prop={parent } handle ={handler} count={data}/>
    <p> Data : {data}</p>
    </>
)
}

root.render(<AppLayout/>);