import React from "react";
import App from "../../App";

class Floor extends React.Component {

    // function to handle click on the main button
    handleClick = () => {
        this.getNumber()
    }

    // function that implements the repetitive behaviour
    getNumber = () => {
        setInterval(this.generateRandomNumber, 600)
    }

    generateRandomNumber = () => {
 
        // loop for each square
        for (let j = 0; j < 25; j++) {

            // create the three random rgb values
            let num = []
            
            for (let i = 0; i < 3; i++) {
                num.push(Math.floor(Math.random() * 256 ))
            }
            
            // change the style of the squares
            const changeStyle = (num) => {
                
                // accesing the correct css file
                let sheets = document.styleSheets[1]
                // generate the complete rgb color value string
                let color = "rgb(" + num[0] + "," + num[1] + "," + num[2] + ")"
                // generate styling class that will be inserted to css
                let styleInput = ".grid-item" + j + " { background-color: #fff; border: solid 2px #fff; box-shadow: inset 35px 0 35px  " + color + ", inset -35px 0 60px  " + color + ";}"

                // deleting the old class
                return sheets.deleteRule(j),
                // implementing the new class
                sheets.insertRule(styleInput, j)
                
               
            }
        
            changeStyle(num)
        }
      }

    render() {

        return (
            <>
            <div className="grid-container">
                <div className="grid-item0"> </div>
                <div className="grid-item1"> </div>
                <div className="grid-item2"> </div>
                <div className="grid-item3"> </div>
                <div className="grid-item4"> </div>
                <div className="grid-item5"> </div>
                <div className="grid-item6"> </div>
                <div className="grid-item7"> </div>
                <div className="grid-item8"> </div>
                <div className="grid-item9"> </div>
                <div className="grid-item10"> </div>
                <div className="grid-item11"> </div>
                <div className="grid-item12"> </div>
                <div className="grid-item13"> </div>
                <div className="grid-item14"> </div>
                <div className="grid-item15"> </div>
                <div className="grid-item16"> </div>
                <div className="grid-item17"> </div>
                <div className="grid-item18"> </div>
                <div className="grid-item19"> </div>
                <div className="grid-item20"> </div>
                <div className="grid-item21"> </div>
                <div className="grid-item22"> </div>
                <div className="grid-item23"> </div>
                <div className="grid-item24"> </div>
            </div>

            <button className="button" onClick={this.handleClick}>Click me to get wild</button>
            </>
        );
    }

}

export default Floor