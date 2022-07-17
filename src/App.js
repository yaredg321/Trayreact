import { BrowserRouter, Route,Link, Routes } from "react-router-dom";
 

import Logins from "./components/Login";
import Signup from "./components/Register";
import Products from "./components/Product"
import Chekout from "./components/Chekout"

// npx creat-react-app test-react
//npm install react-router-dom
//npm install axios

 


function App() {
  return (
      <div>
    <BrowserRouter>
    {/* <nav>
        <h1>zhgzxjh</h1>
        <Link to="/">signup</Link>
        <Link to="/Login">Login</Link>

    </nav> */}
      <Routes>
        <Route path="/" element={<Signup/>}/>
        
        <Route path="/Login" element={<Logins/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/chekout" element={<Chekout/>}/>
      </Routes>
    </BrowserRouter>

      </div>
   
  );
}
 
export default App;


// import  {useState} from "react";
// import axios from "axios";

// const App=()=>{
//     const [file, setfile] = useState(null);

//     const onFormSubmit = e =>{
//       e.preventDefault();
      
//         const formData = new FormData();
//         formData.append("photo",file);
//         const config = {
//             headers:{
//                 'content-type':'mutltipart/form-data'
//             },
//         };
//         const url = 'http://localhost:5000/products'
//         axios
//         .post(url,formData,config)
//         .then((response)=>{
//           console.log(response+"----------------------")
//             alert('image uplode successfull!!');
//         })
//         .catch((err)=>{
//             console.log('err',err)
//         })
//     }

//     return(
//         <div className="App">
//             <form onSubmit={onFormSubmit}>
//                 <h1>simple fille Uplod</h1>
//                 <input type="file" name="photo"  onChange={(e)=>{
//                console.log(e)
//                setfile(e.target.value)}}/>
//                 <button type="submit">Uplode</button>
//             </form>
            
//         </div>
//     )
// }
// export default App;


