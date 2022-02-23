import React, { useContext, useEffect, useState } from 'react'
import { Button, Card } from 'antd';
import { baseService } from '../../../service/baseService';
import CartContext from '../../../store/CartContext';

const gridStyle = {
    width: '25%',
    textAlign: 'center',
};


function HomeView() {

    const [products, setProducts] = useState([]);

    const {cart, setCart} = useContext(CartContext)

    console.log();
    useEffect(() => {
        
        baseService.getAll('/product')
        .then((data) => {
            setProducts(data);
        })

    }, [])

    const addToCart = (item) => {

        //Bu ürün sepette var ise o ürünün sepetteki adedini arttırır. Eğer ürün yoksa sepete yeni ürün olarak ekler ( ve miktarını 1 girer)

        let product  = cart.find(q => q._id == item._id); 
        if(product != null){
            product.quantity = product.quantity + 1
            setCart([...cart])
        }
        else{

            let newCartProduct = {
                _id: item._id,
                quantity : 1,
                price : item.price,
                name : item.name
            }
            setCart([...cart, newCartProduct]);
        }

                
        console.log('CART', cart);
    }

    return (
        <>
        <div>
            Cart: {cart.length}
        </div>
            <Card title="Card Title">
                {
                    products && products.map((item,key) => {
                        return <Card.Grid key={key} style={gridStyle}>
                            <h4>{item.name}</h4>
                            <p>{item.price.toFixed(2)}</p>
                            <Button onClick={() => addToCart(item)} type='primary'>Add to cart</Button>
                        </Card.Grid>
                    })
                }
              
            </Card>
        </>
    )
}

export default HomeView
