function pick(elem){
    type = elem.innerHTML;
    document.getElementById("put").innerHTML = type;
}


+async function load(){
   
    url = `https://pixabay.com/api/videos/?key=19373406-63903c7363f45bd42f1ffd34f&q=people&per_page=200`;
    
    let response = await fetch(url);
    let result = await response.json();
    console.log(result);
   
    if(result.hits == ""||null){
       
        alert("No image Found!" );
       
    }
     
    else{
        
        let hitslength = result.hits.length;
        for (let i = 0; i < hitslength; i++){
            let sum1 = "cont" + `${i}`;
            let sum2 = "come" + `${i}`;
            let pid = "cone" + `${i}`;
            let aid = "cup" + `${i}`
            let videoLink = result.hits[i].videos.small.url;
            let userName = result.hits[i].user;
            let downloadLink = result.hits[i].pageURL;
            // let image = document.createElement('img');
            // image.src = imageLink;
            let div1 = document.createElement('div');
            let div2 = document.createElement('div');
            let p = document.createElement('p');
            let a = document.createElement('a');
            let icon = document.createElement('i');
            div1.setAttribute("id", sum1);
            div2.setAttribute("id", sum2);
            p.setAttribute("id", pid);
            a.setAttribute("id", aid);
            a.setAttribute("href", downloadLink);
            div1.setAttribute("class", "you");
            div2.setAttribute("class", "pop flex justify-between   px-4 my-4");
            p.setAttribute("class", "font-semibold text-white");
            icon.setAttribute("class", "fas fa-arrow-down  cursor-pointer pt-1 text-white");
            document.getElementById("full").appendChild(div1);
            document.getElementById(sum1).innerHTML = `<video  controls type="video/mp4"><source src = ${videoLink} type ="video/mp4"></video>`;
            document.getElementById(sum1).appendChild(div2);
            document.getElementById(sum2).appendChild(p);
            document.getElementById(sum2).appendChild(a);
            document.getElementById(aid).appendChild(icon);
            document.getElementById(pid).innerHTML = userName;
           
            
        }
       
    }
}();

let form = document.getElementById("form");
form.onsubmit = async (e) => {
 
    let Value = document.getElementById("picturetype").value;
    let pictype = document.getElementById("put").innerHTML;
  
   
    console.log(Value);
        e.preventDefault();
   
        url = `https://pixabay.com/api/videos/?key=19373406-63903c7363f45bd42f1ffd34f&q=${Value}&video_type=${pictype}&per_page=200`;
    
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
            let sum1 = "cont" + `${i}`;
            let pid = "cone" + `${i}`;
            let sum2 = "come" + `${i}`;
            let aid = "cup" + `${i}`
            let videoLink = result.hits[i].videos.small.url;
             let userName = result.hits[i].user;
             let downloadLink = result.hits[i].pageURL;

            let div2 = document.createElement('div');
            let p = document.createElement('p');
            let a = document.createElement('a');
            let icon = document.createElement('i');
            div2.setAttribute("id", sum2);
            p.setAttribute("id", pid);
            a.setAttribute("id", aid);
            a.setAttribute("href", downloadLink);
         
            div2.setAttribute("class", "pop flex justify-between   px-4 my-4");
            p.setAttribute("class", "font-semibold text-white");
            icon.setAttribute("class", "fas fa-arrow-down  cursor-pointer pt-1 text-white");
           
            document.getElementById(sum1).innerHTML = `<video controls type="video/mp4"><source src = ${videoLink} type ="video/mp4"></video>`;
            document.getElementById(sum1).appendChild(div2);
            document.getElementById(sum2).appendChild(p);
            document.getElementById(sum2).appendChild(a);
            document.getElementById(aid).appendChild(icon);
            document.getElementById(pid).innerHTML = userName;
            
            
        }
       
    }
}

function returnHome(){
    window.location.replace("/index.html")
    document.getElementById("bee").style.display = "none";
}
