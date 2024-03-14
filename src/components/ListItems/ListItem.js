// import AddToCartIcon from "../assets/icon/add-to-cart-3046.svg"
import { Fragment, useState } from "react";
import Modal from "../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addItemHandler, removeItemHandler } from "../../actions";

const ListItem=({data})=>{
    
//    const [counter,setCounter]=useState(0);
   const [showModal,setMoadl]=useState(false)
   const item=useSelector(state=>state.cart.items.find(item=>item.id===data.id));
   const dispatch=useDispatch();

   function increaseCounterByOne(event){
    event.stopPropagation();
    // onAdd(data.id);
    // setCounter(counter+1)
    dispatch(addItemHandler(data))
   }

   function decreaseCounterByOne(event){
    event.stopPropagation();
    dispatch(removeItemHandler(data.id))
    // onRemove(data.id);

    // if(counter === 0){
    //     return;
    // }
    // if(counter == 1){
    //     onRemove(data.id);
    // }
    // setCounter(counter-1)
   }

   function HandleModal(){
    setMoadl((previousState)=>!previousState)
   } 


    return (
        <Fragment>
        <div onClick={HandleModal} className="item-card">
            <img className="img-fluid" src={data.thumbnail} alt="no image"/>
            <div className="item-card-information">
                <div className="pricing">
                    <span>₹{data.discountedPrice}</span>
                    <small>

                    <s>₹{data.price}</s>
                    </small>
                    
                </div>
                <div className="title">
                    <h3>{data.title}</h3>
                 </div>
            </div>
            {/* <button onClick={()=>updateItemTitle(data.id)}>Update Title</button> */}

            { 
               !item||item?.quantity<1 ?
            <button className="cart-add" onClick={increaseCounterByOne} >
                <span>ADD TO CART</span>
                <img 
                className="img" src="https://previews.123rf.com/images/supertrooper/supertrooper2001/supertrooper200100150/138090485-grocery-supermarket-trolley-cart-vector-icon-empty.jpg" alt="no image"/>
            </button>  :
            <div className="cart-addon">
            <button onClick={decreaseCounterByOne} ><span>-</span></button>
            <span>{item.quantity}</span>
            <button onClick={increaseCounterByOne} ><span>+</span></button>
        </div>
            
        } 

     </div>
     { showModal &&
      < Modal onClose={HandleModal}>
        <div className="item-card__modal">
            <div className="img-wrapper">
            <img className="img-fluid" src={data.thumbnail} alt="no image"/>

            </div>
            <div className="meta">
                <h3>{data.title}</h3>
                <div className="pricing-p">
                    <span>₹{data.discountedPrice}</span>
                    <small>

                    <s>₹{data.price}</s>
                    </small>
                    <p>{data.description}</p>
                    { 
              !item|| item?.quantity<1 ?
            <button className="cart-add cart-add__modal" onClick={increaseCounterByOne} >
                <span>ADD TO CART</span>
                <img 
                className="img" src="https://previews.123rf.com/images/supertrooper/supertrooper2001/supertrooper200100150/138090485-grocery-supermarket-trolley-cart-vector-icon-empty.jpg" alt="no image"/>
            </button>  :
            <div className="cart-addon cart-addon__modal">
            <button onClick={decreaseCounterByOne} ><span>-</span></button>
            <span>{item.quantity}</span>
            <button onClick={increaseCounterByOne} ><span>+</span></button>
        </div>
            
        } 

                </div>
            </div>
          
        </div>
        </Modal>}
     </Fragment>
  )
}

export default ListItem;