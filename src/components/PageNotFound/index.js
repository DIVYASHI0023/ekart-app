import Header from "../Layout/Header";
import Subheader from "../Layout/Subheader";

function PageNotFound(){
    return (
        <>
        <Header/>
        <Subheader/>
    <div className="d-flex bg-dark text-light justify-content-center align-items-center vh-100"> 

    <h2 className="m-5"> OOPS! This page cant be found!  </h2>
    </div>
    </>
    )

}

export default PageNotFound;