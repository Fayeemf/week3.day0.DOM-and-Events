function bob(){  
    document.getElementsByClassName("name")[1];
    document.getElementsByClassName("name")[1].style.textShadow = "-6px 5px 2px #f7df1e";
} //Made a function called bob where in this function I made the text shadow.

function carlos(){  
    document.getElementsByClassName("name")[0];
    document.getElementsByClassName("name")[0].style.textShadow = "-6px 5px 2px #f7df1e";
}

let reserved = document.getElementsByClassName("right_side")[0];  //Made a variable cause Document blah blah is way too long.

reserved.addEventListener('click',bob)   //Targetted Bob.
reserved.addEventListener('click',carlos)   //targetted carlos.
document.body.style.backgroundColor = "#d3c26f";

alert("Awesome Demo!");
// console.log(document.getElementsByClassName("name"));

//Demo-Arg.

// This project right here is a MVP if we look at the prompt here it says to change the blur and text shadow, which is done as demonstrated. There is so much that can be done to this project, such as change the shadow color,etc. 