import { useRouteError } from "react-router-dom";

const Error =()=>{
    const error = useRouteError();
    console.log(error)
    return (
 
    <div className="m-32 p-15 flex justify-center">
    <div className="p-10">
    <h4 className="font-extrabold">Something went wrong</h4>
        <h3 className="font-mono"> Error Message : { error?.error?.message} </h3>
        <h3 className="font-semibold">Stack Trace : {error?.error?.stack}</h3>
        </div>
    </div>

);
}

export default Error;