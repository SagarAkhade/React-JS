<!DOCTYPE html>
<!-- This Program is for using the React without Installation -->

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>

    <!-- These 3 Links are used for using React Without Installation -->
    <script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
</head>

<body>
    <div id="mydiv">

    </div>

    <!-- For Using react add type="text/babel" attribute in Script tag-->
    <script type="text/babel">
        // This below are react components(function component and Class Component)
        // Whichever component is created, it is directly becomes HTML tag
        // And can be used as HTML tag in other component 
        // function Component :-
        function Test() {
            const bla = () => alert("test")  //We created Another function here 
            // onClick:-
            // - It is onclick event
            // Syntax: onclick={functionName} 
            return <button onClick={bla}>Click Me </button>
        }

        // Class Component :-
        // Syntax: class NameOfClass extends React.Component{
        //     render(){return 'statement'}
        // }
        class Hello extends React.Component {
            render() {
                return <div>Hello React with Code <Test /> </div> 
                // Here we use <Test /> as HTML tag
            }
        }
        // ReactDOM.render() :-
        // ReactDOM will connect HTML page with react 
        // it has two parameters
        // ReactDOM.render(<newCreatedComponentToAdd />, document.getElementById("inWhichHTMLComponentItAdd")) 
        ReactDOM.render(<Hello />, document.getElementById("mydiv"))
    </script>

</body>

</html>
