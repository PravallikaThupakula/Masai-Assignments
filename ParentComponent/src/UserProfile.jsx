import React from "react";
import UserInfo from "./UserInfo";
function UserProfile(){
    const name="Pravallika";
    const age=22;
    return(
        <div>
        <h2>UserProfile</h2>
        <UserInfo name={name} age={age}/>
        </div>
)
}
export default UserProfile;