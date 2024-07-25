let count=0;
let sum=0;
let count_Data=document.getElementById("enter_Count");
let para_Data=document.getElementById("update");

let total_passanger_count=document.getElementById("total_Passanger");

function incData(){
    count+=1;
    count_Data.innerText=count;
}

function saveData(){
    let countStr=count+",";
    para_Data.innerHTML+=countStr;

    count_Data.innerHTML=0;
    sum+=count;
    total_passanger_count.innerHTML
    =`<p>Total Passanger : ${sum}</p>`
    count=0;

    
}