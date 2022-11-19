let header = document.getElementById("header")
console.log(header)

window.onscroll = function(header){
    let top = window.scrollY;
    console.log(top);

    if (top>=575){
        document.getElementById("header").id="headerOtroColor" 

    };
    if (top<575){
        document.getElementById("headerOtroColor").id="header" 
    }
    
}
