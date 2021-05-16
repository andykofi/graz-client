import React from 'react';
import { Link } from 'react-router-dom';

const ViewMembers = ()=> {
    return (
        <React.Fragment>
            <Link to="members" className="btn btn-lg btn-info">
                View Members
            </Link>
        </React.Fragment>

    )
}

export default ViewMembers;