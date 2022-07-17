import  {useState} from "react";
import axios from "axios";

const Imageuplod=()=>{
    const [file, setfile] = useState(null);

    const ImageFild = e =>{
      e.preventDefault();
      
        const formData = new FormData();
        formData.append("photo",file);
        const config = {
            headers:{
                'content-type':'mutltipart/form-data'
            },
        };
        const url = 'http://localhost:5000/products'
        axios
        .post(url,formData,config)
        .then((response)=>{
          console.log(response+"----------------------")
            alert('image uplode successfull!!');
        })
        .catch((err)=>{
            console.log('err',err)
        })
    }

    return(
        <div className="App">
            <form onSubmit={ImageFild}>
                <h1>simple fille Uplod</h1>
                <input type="file" name="photo"  onChange={(e)=>{
               console.log(e)
               setfile(e.target.value)}}/>
                <button type="submit">Uplode</button>
            </form>
            
        </div>
    )
}
export default Imageuplod;