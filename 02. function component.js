// Components ->>
// - There are various types of components used
// - Function, class, pure, HOC(Higher Order Component),
// controlled and uncontrolled components  

// Functional Component ->
// - Functional componenets are used mostly.
// - File name in React always starts with capital letters (PascalCase)
// - The file name and the function name should be exactly same
// - And to use this component in other file just do like this below 
// Syntax : import NameOfFile from './path/NameOfFile'
// - Functional component is used as HTML tag in other files  like <NameOfFunction />
// - for having multiple elements in function must be enclosed in single tag(Ex: <div> or any single tag)
// - And at last to export this component by below syntax
//  Syntax : export default NameOfFunction;
// - When we want to export many components from single file then just write export before function
// Syntax : export function NameOfFunction(){}
//- To use this multiple functions in other file use below 
// Syntax : import {component1, component2} from './path'
//- We can also have multiple components in same file so don't need to export or import them
/*
// - Syntax of Function component : 
    function NameOfFunction(){
        return(
            <div>
                <HTML code>
                <HTML code>       
            </div>
        );
    }      
    export default NameOfFunction;
*/

function User() {
    return (
        <div>
            <h1>User Component</h1>
            <h1>Hello</h1>
        </div>
    );
}

export default User;
