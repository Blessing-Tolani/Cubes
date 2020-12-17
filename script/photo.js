function pick(elem){
    type = elem.innerHTML;
    document.getElementById("put").innerHTML = type;
}


+async function load(){
   
    url = `https://pixabay.com/api/?key=19373406-63903c7363f45bd42f1ffd34f&q=people&per_page=200`;
    
    let response = await fetch(url);
    let result = await response.json();
    console.log(result);
   
    if(result.hits == ""||null){
       
        alert("No image Found!" );
       
    }
     
    else{
        
        let hitslength = result.hits.length;
        for (let i = 0; i < hitslength; i++){
            let sum2 = "cont" + `${i}`;
            let imageLink = result.hits[i].largeImageURL;
            // let image = document.createElement('img');
            // image.src = imageLink;
            let div2 = document.createElement('div');
            div2.setAttribute("id", sum2);
            div2.setAttribute("class", "imo");
            document.getElementById("full").appendChild(div2);
            document.getElementById(sum2).innerHTML = `<img src = ${imageLink}/>`;
            
        }
       
    }
}();

let form = document.getElementById("form");
form.onsubmit = async (e) => {
 
    let Value = document.getElementById("picturetype").value;
    let pictype = document.getElementById("put").innerHTML;
  
   
    console.log(Value);
        e.preventDefault();
   
    url = `https://pixabay.com/api/?key=19373406-63903c7363f45bd42f1ffd34f&q=${Value}&per_page=200&image_type=${pictype}`;
    
    let response = await fetch(url);
    let result = await response.json();
    console.log(result);
   
    if(result.hits == ""||null){
       
        alert("No image Found!" );
        //window.location.href = window.location.href;
    }
     
    else{
        
        let hitslength = result.hits.length;
        for (let i = 0; i < hitslength; i++){
            let sum2 = "cont" + `${i}`;
            let imageLink = result.hits[i].largeImageURL;
            let image = document.createElement('img');
            // image.src = imageLink;
            // let div2 = document.createElement('div');
            // div2.setAttribute("id", sum2);
            // div2.setAttribute("class", "imo");
           // document.getElementById("full").appendChild(div2);
            document.getElementById(sum2).innerHTML = `<img src = ${imageLink}/>`;
            
            
        }
       
    }
}

function returnHome(){
    window.location.replace("/index.html")
    document.getElementById("bee").style.display = "none";
}
