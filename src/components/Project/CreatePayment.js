import React from 'react';
import { Link } from 'react-router-dom';

const CreatePayment = ()=> {
    return (
        <React.Fragment>
            <Link to="addAccount" className="btn btn-lg btn-info">
                Payment
            </Link>
        </React.Fragment>
     
    )
}

export default CreatePayment;
