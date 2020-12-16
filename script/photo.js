function pick(elem){
    type = elem.innerHTML;
    document.getElementById("put").innerHTML = type;
}

let form = document.getElementById("form");
form.onsubmit = async (e) => {
 
    let Value = document.getElementById("picturetype").value;
    console.log(Value);
        e.preventDefault();
   
    url = `https://pixabay.com/api/?key=19373406-63903c7363f45bd42f1ffd34f&q=${Value}&per_page=200`;
    
    let response = await fetch(url);
    let result = await response.json();
    console.log(result);
   
    if(result.hits == ""||null){
       
        alert("No image Found!" );
        // window.location.href = window.location.href;
    }
     
    else{
        
        let hitslength = result.hits.length;
        for (let i = 0; i < hitslength; i++){
            let sum = "come" + `${i}`;
            let sum2 = "cont" + `${i}`;
            let imageLink = result.hits[i].webformatURL;
            var newimageLink = imageLink.replace("_640","_180");
            let image = document.createElement('img');
          
            image.src = newimageLink;

           
            let div = document.createElement('div');
            
            let div2 = document.createElement('div');

            var number = [279,270,147,276,319,240,283,271,258];
            
             var rand = Math.floor(Math.random() * 9);
    
             div2.setAttribute("id", sum2);
            div.setAttribute("id", sum);
            div.setAttribute("class", "item");
            div2.setAttribute("class", "imo");
            // div.setAttribute("data-w", number[rand]);
            div.setAttribute("data-h", 180);
            document.getElementById("main").appendChild(div);
            document.getElementById(sum).appendChild(div2);
            document.getElementById(sum2).appendChild(image);
            
            
        }
       
    }
}