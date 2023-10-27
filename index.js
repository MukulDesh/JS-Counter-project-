const countvalue= document.querySelector('#counter');
// const countvalue= document.getElementById('counter'); ano`ther way of geytin element  

// innerText ya fuction cha use krun inner value kdhu shkto apn 


// const increment=()=>{

    function increment(){

        
    let value=parseInt(countvalue.innerText); // get value from UI
    value=value+1; // upadte the valeu 
    countvalue.innerText=value; // Set it back into vallue in UI

    }





// }


// const decrement=()=>{

    function decrement(){
        let value=parseInt(countvalue.innerText); // get value from UI
        value=value-1; // upadte the valeu 
        countvalue.innerText=value; // Set it back into vallue in UI
    


    }


// }