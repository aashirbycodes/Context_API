import React from 'react'
import { useUserContext } from '../context/UserContext.jsx'

function child1() {
    const { userInfo } = useUserContext();
    console.log(userInfo);

    return (
        <div>
            This is Child1 and user name is {userInfo.name} and userId is {""}{userInfo.userId}
        </div>
    )
}
export default child1; 