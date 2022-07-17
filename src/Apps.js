
import React, { Component } from 'react';

class Apps extends React.Component {


  render() { 
    //   const {value, ondelete, onClick}=this.props
    // console.log(this.props)
    return <div> 
      {/* {this.props.children}   */}
      {/* {this.props.count.id} */}
      
    <span >{this.countt()}</span>
    <button id='aid'  onClick={() => this.props.incriminat(this.props.count)}>increment</button>

    <button onClick={() => this.props.ondelete(this.props.count.id)} style={{margin:5}}>delete</button>
   
    </div>;
  }
  
  countt = () => {
    const counte = this.props.count.value
    return counte === 0 ? "zero" : this.props.count.value
  }

}
 
export default Apps;





















// import React, { Component } from 'react';
// import App from './App'

// class Apps extends React.Component {
//     state={
//         counter:[
//             {id:1, value:0 },
//             {id:2, value:4 },
//             {id:3, value:0 },
//             {id:4, value:0 }
//         ]
//     };
//     handincrimonat= inf => {
//         const counter = [...this.state.counter];
//         const index = counter.indexOf(inf);
//         counter[index] = {...inf};
//         counter[index].value++;
//         this.setState({counter});



//         // console.log(this.state.counter[index]); 
//         // // console.log(counter)
//         // console.log(index)//how did index return true if this returns false???
//     }



//     handdelet = (idno) => {
//         console.log("delete button", idno)
//         const counter = this.state.counter.filter(ya => ya.id !== idno)
//         this.setState({counter})
//     }
//     restart = () => {
//         console.log("resat")
//         const counter = this.state.counter.map(m => {m.value = 0
//             return m;})
//             this.setState({counter})
//     }
//     render() { 
       
        
//         return <div>
//              <button onClick={this.restart}>restarte</button>
//            { this.state.counter.map(count => <App
//            key={count.id}
//            count={count}
           
//            ondelete={this.handdelet}
//            incriminat={this.handincrimonat}
//            >
//                {/* <h1>hello{count.id}</h1> */}
//                </App>)}
//         </div>;
//     }
// }

 
// export default Apps;


// {/* <App

// />
// <App/>
// <App/> */}


// {/* <App
// parent
// >
//     cilderen
// </App> */}