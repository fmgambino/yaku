var check=document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma(){
    let id=check.checked;
       
    localStorage.setItem('idioma', 'true');

    if(id==true & localStorage.getItem('idioma') === 'true' ){
        location.href="./en/index.html";  
        console.log("Ingles");   
    }else{            
        location.href="../index.php"; 
        localStorage.setItem('idioma', 'false');     
        console.log("Espaniol");
    }
    
}


var check=document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma(){
    let id=check.checked;
    
    if(id==true){
        location.href="en/index.html";     
    }else{            
        location.href="../index.html";      
    }
    
}