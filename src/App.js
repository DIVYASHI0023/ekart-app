import Products from "./components/Products/Products";
import {BrowserRouter as Router,Routes,Route}  from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import AuthIndex from "./components/Auth";
import { checkisLoggedIn } from "./actions/auth";
import { useDispatch, useSelector } from "react-redux";
  import { useEffect } from "react";


const App=() =>{
  
  const authSelector=useSelector(state=>state.auth)
   const dispatch=useDispatch();
  useEffect(()=>{
dispatch(checkisLoggedIn(()=>{}))
  },[])

  return (
    <div>
     
      <Router>
        <Routes>
        <Route path="/404" element={<PageNotFound/>}/>
        <Route exact path="/:category?" element={<Products/>}/>

       { !authSelector.idToken &&
        <Route path="/login" element={<AuthIndex />} />
      }
        {  !authSelector.idToken &&
            <Route path="/signup" element={<AuthIndex />} />  }  

        </Routes>
      
        </Router>
    </div>
  )
}

export default App;
