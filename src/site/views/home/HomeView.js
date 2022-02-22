import React, { useEffect, useState } from 'react'
import { Button, Card } from 'antd';
import { baseService } from '../../../service/baseService';

const gridStyle = {
    width: '25%',
    textAlign: 'center',
};


function HomeView() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        
        baseService.getAll('/product')
        .then((data) => {
            setProducts(data);
        })

    }, [])


    return (
        <>
            <Card title="Card Title">
                {
                    products && products.map((item,key) => {
                        return <Card.Grid key={key} style={gridStyle}>
                            <h4>{item.name}</h4>
                            <p>{item.price.toFixed(2)}</p>
                            <Button type='primary'>Add to cart</Button>
                        </Card.Grid>
                    })
                }
              
            </Card>
        </>
    )
}

export default HomeView
