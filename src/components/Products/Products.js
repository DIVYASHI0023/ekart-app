import { useEffect,useState } from "react";
import ListItem from "../ListItems/ListItem"
import axios from "axios";
import Loader from "../UI/Loader"; 
import { useLocation, useNavigate, useParams } from "react-router";
import Header from "../Layout/Header";
import Subheader from "../Layout/Subheader";


const Products=()=>{

    const [items,setItems]=useState([])
    const [loader,setLoader]=useState(true);
    const params=useParams();
    const navigate=useNavigate();
    const { search } = useLocation()
    const queryParams = new URLSearchParams(search).get("search")

    // const [presentItems,setPresentItems]=useState([])

     function handleNotFound(){
        navigate("/404")
     }


       useEffect(()=>{
        

        async function fetchItems(){

            try{
                let slug=`items.json`
                if(params.category){
                   slug=`items-${params.category}.json`
                }
                if(queryParams) {
                    slug += `?search=${queryParams}`
                }

                const response= await axios.get(`https://react-mock-2023-default-rtdb.firebaseio.com/${slug}`)
            
                const data=response.data;
                if(!data){
                    handleNotFound();
                    return;
                }

                const transformedData=data.map((item,index)=>{
                     return{
                        ...item,
                        id:index
                     }
                   })
                
                setItems(transformedData)
                   }

            
            catch(error){
                console.log("Error  : ",error)
                alert("Some error occured")

            }
            finally{
                setLoader(false);
            }
        }
            fetchItems();
            return ()=>{
       setItems([]);
       setLoader(true);
            }

        },[params.category,queryParams])

     

        

      

     return (  
        <>
    <Header/>
    <Subheader/>

        <div className="product-list">
    <div className="product-list--wrapper">
   

     {
        items.map((item)=>{
            return (<ListItem key={item.id} data={item} />)
        })
     }

    </div>
  </div>
    {  loader &&    <Loader/>}
  </>
     )
}

export default Products;