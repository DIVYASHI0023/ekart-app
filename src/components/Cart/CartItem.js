const CartItem=({data,onEmitDecrease,onEmitIncrease})=>{
  return(
    <div className="checkout-modal_list-item">
    <div className="img-wrap">
        <img className="img" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"  alt={data.titel}/>
    </div>
    <div className="information">
        <div>
            <h4>{data.title}</h4>
            <div className="pricing">
                <span>{data.discountedPrice}</span>
                <small>
                    <strike>{data.price}</strike>
                </small>
            </div>
        </div>
        <div className="cart-addon cart-addon__modal">
            <button onClick={()=>onEmitDecrease(data)}>-</button>
            <span className="counter">{data.quantity}</span>
            <button onClick={()=>onEmitIncrease(data)}>+</button>
        </div>
    </div>
</div>
  )
}

export default CartItem;