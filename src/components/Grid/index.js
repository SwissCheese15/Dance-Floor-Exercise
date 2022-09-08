import React from "react";
import App from "../../App";

class Floor extends React.Component {

        handleClick = () => {
            this.getNumber()
    }

    getNumber = () => {
        setInterval(this.generateRandomNumber, 500)
    }

    generateRandomNumber = () => {

        

        for (let j = 0; j < 25; j++) {

            let num = []
            
        for (let i = 0; i < 3; i++) {
           num.push(Math.floor(Math.random() * 256 ))
        }
        
        
        const changeStyle = (num) => {
            
            let sheets = document.styleSheets[1]
            let color = "rgb(" + num[0] + "," + num[1] + "," + num[2] + ")"
            let styleInput = ".grid-item" + j + " { background: " + color + " }"
            return sheets.deleteRule(j),
            sheets.insertRule(styleInput, j)
            }
            changeStyle(num)
        }

        
      }

    render() {

        return (
            <>
            <div className="grid-container">
                <div className="grid-item0"></div>
                <div className="grid-item1"></div>
                <div className="grid-item2"></div>
                <div className="grid-item3"></div>
                <div className="grid-item4"></div>
                <div className="grid-item5"></div>
                <div className="grid-item6"></div>
                <div className="grid-item7"></div>
                <div className="grid-item8"></div>
                <div className="grid-item9"></div>
                <div className="grid-item10"></div>
                <div className="grid-item11"></div>
                <div className="grid-item12"></div>
                <div className="grid-item13"></div>
                <div className="grid-item14"></div>
                <div className="grid-item15"></div>
                <div className="grid-item16"></div>
                <div className="grid-item17"></div>
                <div className="grid-item18"></div>
                <div className="grid-item19"></div>
                <div className="grid-item20"></div>
                <div className="grid-item21"></div>
                <div className="grid-item22"></div>
                <div className="grid-item23"></div>
                <div className="grid-item24"></div>
                
            </div>

            <button className="button" onClick={this.handleClick}>Click me to get wild</button>
            </>
        );
    }

}

export default Floor