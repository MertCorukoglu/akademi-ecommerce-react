import React from 'react'
import { useParams } from 'react-router-dom';

function SupplierDetail() {

    let params = useParams();

    
    console.log("Supplier Detail component rendered!");

    return (
        <>
            <h1>Supplier Detail Component!</h1>
        </>
    )
}

export default SupplierDetail
