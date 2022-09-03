// Conditional rendering in React ->>
// - Conditional are basically used for checking of conditions
// If-else Condition ->
// - In react conditons are added in return block
// - For using conditions in react mostly ternary operator is used
/* Syntax :
        return(
            <div>
                {condtion ? <h1>If true</h1> : <h1>Else false</h1>}
            </div>
        )
*/
//If-else-if condition ->
/* Syntax :
        return(
            <div>
                {condtion1 ? <h1>If true</h1> : 
                condtion2 ? <h1>If true</h1> :
                <h1>Else false</h1>}
            </div>
        )
*/
import { useState } from 'react'

function Profile() {
    const [loggedIn, setLoggedIn] = useState(true);
    const [loggedIn1, setLoggedIn1] = useState(3);

    /*   ---This way of using conditional must avoided ------
    if (loggedIn) {
        return (
            <div>
                <h1>Welcome Sagar</h1>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Welcome Guest</h1>
            </div>
        )
    }
    */
    return (
        <div>
            {/* If-else condition */}
            {loggedIn ? <h1>Welcome Sagar</h1> : <h1>Welcome Guest</h1>}
            {/* If-else-if condition */}
            {loggedIn1 == 1 ? <h1>Welcome user1</h1> :
                loggedIn1 == 2 ? <h1>Welcome user2</h1> :
                    <h1>Welcome user3</h1>}
        </div>
    )
}

export default Profile;
