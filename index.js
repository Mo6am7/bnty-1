let input2 = document.getElementById("input2")
let input3 = document.getElementById("input3")
let output1 = document.getElementById("output1")
let input4 = document.getElementById("input-4")
let input15 = document.getElementById("input-15")
let output0 = document.getElementById("output-0")
let input16 = document.getElementById("input-16")
let input17 = document.getElementById("input-17")
let output3 = document.getElementById("output-3")
let input18 = document.getElementById("input-18")
let input19 = document.getElementById("input-19")
let output4 = document.getElementById("output-4")
let output09 = document.getElementById("output09")
let output2 = document.getElementById("output2")
let input10 = document.getElementById("input2")
let input11 = document.getElementById("input3")
let output5 = document.getElementById("output-5")
let output012 = document.getElementById("output012")
let input5 = document.getElementById("input5")
let input6 = document.getElementById("input6")
let input7 = document.getElementById("input7")
let input8 = document.getElementById("input8")
let po1 = document.getElementById("po1")
let po2 = document.getElementById("po2")
let po3 = document.getElementById("po3")
let po4 = document.getElementById("po4")
let po5 = document.getElementById("po5")
let po6 = document.getElementById("po6");
let po7 = document.getElementById("po7");
let po8 = document.getElementById("po8");
 function O(){
     if(input2.value !=""  && input3.value !=""){
        const opp = +input2.value; 
        const pio =  (1 + input3.value);
        const oppp = pio ** 1 ;
        const poiuyt = opp / oppp ;
        output1.innerHTML = poiuyt;
     }
 }
  function OT(){
      if(input4.value !=""  && input15.value !=""){
         const opop = +input4.value ; 
         const piio =  (1 + input15.value );
         const ooppp = piio ** 2 ;
         const poiuoyt = opop / ooppp ; 
         output0.innerHTML = poiuoyt;
      }
  }
  function OE(){
      if(input16.value !="" && input17.value !=""){
         const opy = +input16.value; 
         const y =  (1 + +input17.value);
         const oy = y ** 3;
         const pu = opy / oy;
         output3.innerHTML = pu;
         console.log(pu);
        }
  }
  function OQ(){
      if(input18.value !=""  && input19.value !=""){
         const ppipp = +input18.value ; 
         const pipoo =  (1 + input19.value );
         const pppp = pipoo ** 4 ;
         const popop = ppipp / pppp ; 
         output4.innerHTML = popop;
      }
  }
  function OA(){
      if(input10.value !=""  && input11.value !=""){
        const oopp = +input2.value ; 
        const u =  (1  + +input3.value );
        const ooop = u ** 5 ;
       const pot = oopp / ooop ; 
       output5.innerHTML = pot;
   }
}
function R(){
    if(po5.value !="" && po3.value !="" && po2.value !="" && po1.value !=""){
        let oooo = +po1.value + +po2.value + +po3.value + +po4.value + +po5.value + +po6.value;
        output09.innerHTML = oooo

    }
}
function RO(){
    if(po8.value !="" &&  po7.value){
        let iouy = +po7.value / +po8.value
        output012 = iouy
    }
}

function pou(){
    if(input6.value !="" && input5.value !="" && input7.value !="" ){
       let non = +input6.value - +input7.value ;
       let s = +input8.value;
       let t = non / s ; 
       let gh = +input5.value + t ;
       output2.innerHTML = gh
    }
}
