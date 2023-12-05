//Iteration 1:

// ReactDOM.render("Hello! Welcome to React",reactContainer);

//Iteration 2:

// function ReactCont(){
//     return React.createElement(
//         "div",                   //Tag name
//         {id: "h1-tag"},         //Props: eg id,class
//         "Hello!",
//         React.createElement("div", null, "Welcome to React")
//         )
// }
    
//Iteration 3:
class KalvianContainer extends React.Component{
    render(){
        return React.createElement(
            "div",                   //Tag name
            {id: "h1-tag"},         //Props: eg id,class
            "Hello!",
            React.createElement("div", null, "Welcome to React")
            )          
        }
    }

let reactContainer = document.getElementById("react-container");
ReactDOM.render(React.createElement(KalvianContainer),reactContainer);