 let change=document.querySelector("#change");
 let body = document.querySelector("body");
 let div= document.querySelector(".box");

 let  mode = "light";

  change.addEventListener("click", (e)=>{
   
    if(mode === "light"){
        mode="dark";
        body.style.backgroundColor = "black";
        body.style.color = "white";
        change.style.backgroundColor="white";
        change.style.color="black";
        change.innerText="Light Mode"
    }
    else{
        mode="light";
     body.style.backgroundColor = "white";
     body.style.color = "black";
        change.style.backgroundColor="black";
        change.style.color="white";
         change.innerText="dark Mode"
         

    }

  });