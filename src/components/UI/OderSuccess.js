import Modal from "./Modal";

const OrderSuccess=({onClose,orderId})=>{
  return(
        <Modal onClose={onClose}>
              <div className="order-container">
                <div className="order-container--success">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/order-placed-4283423-3581435.png" alt="Success" className="img-fluid"/>
                    <div className="message">
                        <h1>Order Successfully Placed!</h1>
                        <span>ODERID# {orderId}</span>
                    </div>
                </div>
            </div>
        </Modal>
  )
}

export default OrderSuccess;