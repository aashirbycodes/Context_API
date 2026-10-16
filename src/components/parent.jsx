import React from 'react'
import Child1 from './child1.jsx'
import { GiHamburgerMenu } from "react-icons/gi";
const Parent = ({name}) => {
    return (
        <div>
            This is a parent
            <GiHamburgerMenu />
            <Child1 name={name} />
        </div>
    )
}

export default Parent;