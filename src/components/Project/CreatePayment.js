import React from 'react';
import { Link } from 'react-router-dom';

const CreatePayment = ()=> {
    return (
        <React.Fragment>
            <Link to="payment" className="btn btn-lg btn-info">
                Payment
            </Link>
        </React.Fragment>
     
    )
}

export default CreatePayment;
