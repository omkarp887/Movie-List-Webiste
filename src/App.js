import React from "react";

import Card from  "./Card";

import Sdata from "./Sdata";

// console.log(Sdata.sname)

// function ncard(val){cd
//   // console.log(val)
//   return(
//     <Card 
//       imgsrc={val.imgsrc}
//       title={val.title}
//       sname={val.sname}
//       link={val.link}
//     />
//   );
// }




const App=()=>(
<>
<h1 className="heading">List of Top 5 Netflix Series</h1>

{Sdata.map((val, index) => { //using arrow function
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
);

export default App;