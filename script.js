const form = document.querySelector(".calculater-form");
const boyName=document.querySelector("#boy-name");
const girlName=document.querySelector("#girl-name");
const resultvalue=document.querySelector("#result");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const l1=boyName.value.length;
    const l2=girlName.value.length;
  const result =Math.pow(l1+l2,3)%101;
  
   resultvalue.textContent=`Result:${result}%`
boyName.value="";
girlName.value="";
    
})

