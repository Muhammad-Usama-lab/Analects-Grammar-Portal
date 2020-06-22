var turn=0;









function showPanel(){

// turn++;

//     if(checkEvenOdd(turn)==='odd'){
//         document.getElementById('sidepanel').style.width="200px";
//         document.getElementById('panelspan').style.width="135px";
//         document.getElementById('panelspan').style.display="inline-block";
        
        
        
        
//     }else{
        
//         document.getElementById('panelspan').style.display='none';
        
        
//         document.getElementById('panellist').style.width="65px";
//         document.getElementById('panellink').style.width="65px";
//         document.getElementById('sidepanel').style.width="65px";
        
        
//     }
    
document.getElementById('sidepanel').classList.toggle('active');


}



function checkEvenOdd(value){

    var state="";

if(value%2 ==0){

    state='even';
}else{
    state='odd';
}


    return state;
}