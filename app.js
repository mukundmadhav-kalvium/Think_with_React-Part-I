let reactContainer = document.getElementById("react-container");


//Iteration 1:

// ReactDOM.render("Hello! Welcome to React",reactContainer);

//Iteration 2:

// function ReactCont(){
//     return React.createElement(
//         "div",                   //Tag name
//         {id: "h1-tag"},         //Props: eg id,class
//         "Hey Kalvians! Welcome to React Learning",
//         React.createElement("div", null, "Let's rock and roll")
//         )
// }
// ReactDOM.render(ReactCont(),reactContainer);


//Iteration 3:
class KalvianContainer extends React.Component{
    render(){
        return React.createElement(
            "div",                   //Tag name
            {id: "heading"},         //Props: eg id,class
            "Hey Kalvians",
            React.createElement("div", null, "Let's rock and roll with classes")
            )          
        }
    }
    
ReactDOM.render(React.createElement(KalvianContainer),reactContainer);