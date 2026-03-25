import React, { useContext } from 'react'
import ChildC from './ChildC'
import { userContext } from '../../../../myproject/src/App';

const ChildB = () => {
    // const user= useContext(userContext);
    return (
        <ChildC/>
    )
}

export default ChildB

