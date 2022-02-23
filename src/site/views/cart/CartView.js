import { Button, Card } from 'antd'
import React, { useContext } from 'react'
import CartContext from '../../../store/CartContext'

function CartView() {


    
    const { cart, setCart } = useContext(CartContext);


    const removeCartItem = (id) => {
        let newCartItems = cart.filter(q => q._id != id);

        setCart([...newCartItems])
    }

    return (
        <>
     

      
            {
                cart && cart.map((item,key) => {
                    return (
                        <Card key={key} title={item.name} extra={<a href="#">More</a>} style={{ width: 300 }}>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: {item.price}</p>
                        <p><Button danger onClick={() => removeCartItem(item._id)}>Remove</Button></p>
                         </Card>
                    )
                })
            }


        </>
    )
}

export default CartView
