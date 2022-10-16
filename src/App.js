import React from "react";

import Card from  "./Card";

import Sdata from "./Sdata";
import { useState } from 'react'

// const [inputValue, search] = useState("");

// const onChangeHandler = event => {
//    search(event.target.value);
// };
// var arr=[]
// // console.log(Sdata.sname)

// // function ncard(val){cd
// //   // console.log(val)
// //   return(
// //     <Card 
// //       imgsrc={val.imgsrc}
// //       title={val.title}
// //       sname={val.sname}
// //       link={val.link}
// //     />
// //   );
// // }

// function setSearch(){
//   arr = Sdata.filter((res)=>{
//     return res.title.includes(val)
//   })

// }



// const App=()=>(
// <>


// <input
//    type="text"
//    name="name"
//    onChange={onChangeHandler}
//    value={inputValue}
// />
// <h1 className="heading">List of Top Movies And Series</h1>

// {(inputValue?arr:Sdata).map((val, index) => { //using arrow function
//   // console.log(index)  
//     return(
//       <Card 
//         key={val.id}
//         imgsrc={val.imgsrc}
//         title={val.title}
//         sname={val.sname}
//         link={val.link}
//       />
//     );
// })};
// </>
// );



const App=()=>{
  const [inputValue, search] = useState("");
  const [arr, setArr] = useState(Sdata);

  const onChangeHandler = event => {
     search(event.target.value);
     let myArray = Sdata.filter((res)=>{
      return res.sname.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setArr(myArray)
    // console.log(arr);
  };
  

  return(
    <>


    
    <h1 className="heading">List of Top Movies And Series</h1>
    <div className="custCenter">
    <input
      type="text"
      name="name"
      placeholder="search"
      onChange={onChangeHandler}
      value={inputValue}
      className="searchbar"
    />
    </div>
    {arr.map((val, index) => { //using arrow function
      // console.log(index)  
   
        return(
          
          <Card 
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
          />
        );
    })};
    </>
  )
}

export default App;