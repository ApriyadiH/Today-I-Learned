// import { useState } from "react";

// const App = () => {
//     const [ayam,setAyam] = useState([
//         {aid:1, name:'goreng'},
//         {aid:2, name:'serundeng'},
//         {aid:3, name:'rebus'},  
//         {aid:4, name:'gulai'}
//     ])

//     //  /$$$$$$$$       /$$ /$$   /$$    
//     // | $$_____/      | $$|__/  | $$    
//     // | $$        /$$$$$$$ /$$ /$$$$$$  
//     // | $$$$$    /$$__  $$| $$|_  $$_/  
//     // | $$__/   | $$  | $$| $$  | $$    
//     // | $$      | $$  | $$| $$  | $$ /$$
//     // | $$$$$$$$|  $$$$$$$| $$  |  $$$$/
//     // |________/ \_______/|__/   \___/  

//     // Edit with map
//     // function Handler(id){
//     //     const sementara = ayam.map((isi_ayam)=>{   
//     //         if (isi_ayam.aid === id) {
//     //             return ({...isi_ayam,name: 'sate'});
//     //         } 
//     //         return isi_ayam;  
//     //     });
//     //     setAyam(sementara)
//     // }   
//     // console.log(ayam)

//     // Edit with filter
//     // function Handler(id){
//     //     const sementara = ayam.filter((isi_ayam) =>{
//     //         return isi_ayam.aid !== id
//     //     })
//     //     return setAyam([...sementara, {aid : id, name : 'sate'}]);
//     // }
//     // console.log(ayam)


//     //  /$$$$$$$            /$$             /$$              
//     // | $$__  $$          | $$            | $$              
//     // | $$  \ $$  /$$$$$$ | $$  /$$$$$$  /$$$$$$    /$$$$$$ 
//     // | $$  | $$ /$$__  $$| $$ /$$__  $$|_  $$_/   /$$__  $$
//     // | $$  | $$| $$$$$$$$| $$| $$$$$$$$  | $$    | $$$$$$$$
//     // | $$  | $$| $$_____/| $$| $$_____/  | $$ /$$| $$_____/
//     // | $$$$$$$/|  $$$$$$$| $$|  $$$$$$$  |  $$$$/|  $$$$$$$
//     // |_______/  \_______/|__/ \_______/   \___/   \_______/

//     // Delete with map
//     // function Handler(id){
//     //     const sementara = ayam.map((isi_ayam)=>{   
//     //         if (isi_ayam.aid !== id) {
//     //             return (isi_ayam);
//     //         } 
//     //         // return null;  
//     //     });
//     //     setAyam(sementara)
//     // }   
//     // console.log(ayam)

//     // Delete with filter
//     function Handler(id){
//         const sementara = ayam.filter((isi_ayam) =>{
//             return isi_ayam.aid !== id
//         })
//         setAyam(sementara);
//     }
//     console.log(ayam)


//     return (
//         <div>
//             <button onClick={() =>Handler(3)}>
//                 Satein ayamnya
//             </button>
//             {/* To check rendering */}
//             <p>ayam dibakar jadi {ayam[2]['name']}</p>
//         </div>
//     )
// }

// export default App
import React, { useEffect, useState } from "react";

const App = () => {
  const [isi, setIsi] = useState("");

  // First use effect for isi
    useEffect(() => {
      console.log("first useEffect",isi);
      return () => {
        console.log("first useEffect return", isi);
      };
    }, [isi]);
  
  // Second use effect for isi
    useEffect(() => {
      console.log("second useEffect",isi );
      return () => {
        console.log("second useEffect return", isi);
      };
    }, [isi]);
  
    console.log("ayam")

  return (
      <div>
        <input
          value={isi}
          onChange={(event) => {
            setIsi(event.target.value);
          }}
        />
      </div>
    );
  };

  export default App;