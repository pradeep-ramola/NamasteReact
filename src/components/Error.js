import { useRouteError } from "react-router-dom";

const Error =()=>{
    const error = useRouteError();
    console.log(error)
    return (
    <>
    <h4>Something went wrong</h4>
    <h3> Error Message : { error?.error?.message} </h3>
    <h3>Stack Trace : {error?.error?.stack}</h3>
    </>);
}

export default Error;