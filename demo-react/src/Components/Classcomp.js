// import React,{Component} from "react";
// class Classcomp extends Component{
//     constructor(){
//         super()
//         this.state = {
//             msg : "BMI Calculator",
//             BMI: 0,
//         }
//     }
//     OperationAdd(){
//           const Height = parseInt(document.getElementById("height").value);
//           const Weight = parseInt(document.getElementById("weight").value);
//           const sum = (Weight/(Height*Height));
//           if(sum<1){
//               document.getElementById("Demo").innerHTML="OBESE";
//           }
//           if(sum>1){
//             document.getElementById("Demo").innerHTML="NOT OBESE";
//           }
//           this.setState(
//               {
//                   BMI : sum
//               }
//           )

//     }
//     render(){
//         return(
//             <div>
//                   <h1>{this.state.msg}</h1><br></br>
//                   <label>Height</label>
//                   <input type="text" placeholder="Height in cm" id="height"></input><br></br>
//                   <label>Weight</label>
//                   <input type="text" placeholder="Weight in Kg" id="weight"></input><br></br>
//                   <button onClick={()=>this.OperationAdd()}>Calculate BMI</button>
//                   <h1>{this.state.BMI}</h1>
//                   <p id="Demo"></p>
//             </div>
//         )
//     }
// }
// export default Classcomp;
import React,{Component} from "react";
class Classcomp extends Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    Changethis(){
        this.setState({
            count: (this.state.count+1)
        }
           
        )
    }
    render(){
        return(
            <div>
                <button onClick={()=>this.Changethis()}>{this.state.count}</button>
            </div>
        )
    }
}
    
export default Classcomp;