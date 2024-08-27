let box=document.querySelectorAll(".box");
let move='x';

//console.log(box);

// box.forEach((item)=>
// {
//     console.log(item);
// });

let win=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8]
];

function checkwin()
{


    for(let i=0;i<win.length;i++)
        {
            //console.log(box[i]);
            //console.log(box[win[i][0]]);
            //console.log(box[win[i][0]].innerHTML + "  " +box[win[i][1]].innerHTML +"  "+box[win[i][2]].innerHTML);
            //console.log(box[win[i][1]].innerHTML);
            //console.log(box[win[i][0]].innerHTML);
            let v=box[win[i][0]].innerHTML;
            let l=box[win[i][0]];

            let v2=box[win[i][1]].innerHTML;
            let l1=box[win[i][1]];
            let v3=box[win[i][2]].innerHTML;
            let l2=box[win[i][2]];
            if(v!="" && v2!="" && v3!="")
            {
               
                if(v==v2 && v2==v3)
                {
                    l.style.backgroundColor="red";
                    l1.style.backgroundColor="red";
                    l2.style.backgroundColor="red";
                  let over=true;  
                  console.log(v + "win");
                  document.querySelector("p").innerHTML="Winner : "+v;
                  document.querySelector(".Move").style.display="none";
                  document.querySelector(".container").style.marginTop="20px";
                  document.querySelector(".container").style.opacity="0.3";
                  let te=document.createElement("div");
                  te.setAttribute('class','d');
                  te.innerHTML="Game Over !";
                  te.style.position="absolute";
                  te.style.opacity="1";
                  te.style.color="red";
                  te.style.zIndex="1111";
                  te.style.fontSize="20px";
                  //document.querySelector(".container").appendChild(te);
                  te.style.display="flex";
                 
                  box.forEach((item)=>{
                
                    // item.innerHTML="";
                    //item.style.backgroundColor="orange";
                    //item.style.color="white";
                    // document.querySelector("h").innerHTML="move : "+"x";
                    // move="x";
                    //item.style.clickEvent="none";
                  });
                  //play_again();
                  
                }
                else{
                    //document.querySelector("p").innerHTML="Draw";
                }
            }
        }
}

function draw(){
    // if(!over)

    // {
        let is_draw=true;
        box.forEach((e)=>{
          if(e.innerHTML=="")
            is_draw=false;
        });
        if(is_draw)
        {   document.querySelector("p").innerHTML="Draw";
            //over=true;
            

        }
        
    }
// }
function play_again(){
let b=document.querySelector(".play_again");
b.addEventListener("click",function()
{
   box.forEach((item)=>
{
    //console.log(item);
    // document.querySelector(".d").innerHTML="";
    // document.querySelector(".d").style.zIndex="-2222";
    //document.querySelector(".d").style.backgroundColor="transparent";
    document.querySelector(".container").style.opacity="1";
    item.innerHTML="";
    move='x';
    item.style.backgroundColor="white";
    document.querySelector("p").innerHTML="Play To Win";
});
});
}

// function play_again()
// {
//     box.innerHTML="";
// }


//console.log(box[win[1][1]][0]);
document.querySelector("h").innerHTML="move : "+"x";
box.forEach((box)=>{
    //console.log(box);
    
    box.addEventListener("click",()=>{
        
        if(move=='x'){
            //document.querySelector(".d").style.display="none";
            document.querySelector("h").innerHTML="move : " + "0";
            box.style.backgroundColor="grey";
            box.style.color="white";
            box.style.justifyContent="center";
            box.innerHTML=move;
            //document.querySelector(".d").style.display="none";
            move='0'; 
            
           
            
        }
        else{
            document.querySelector("h").innerHTML="move : "+"x";
            //document.querySelector("h").innerHTML=move;
            box.style.backgroundColor="green";
            box.style.color="white";
            box.innerHTML=move;
            move='x';
            
        }
        //box.disabled=true;
        checkwin();
        play_again();
        draw();
        
    });
})