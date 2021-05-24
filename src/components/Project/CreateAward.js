import React from 'react';
import { Link } from 'react-router-dom';

const CreateAward= ()=> {
    return (
        <React.Fragment>
            <Link to="award" className="btn btn-lg btn-info">
              Award
            </Link>
        </React.Fragment>

    )
}

export default CreateAward;
