function dialogueBox(){
    swal("What do you want to search for ?", {
        buttons:{
            catchphoto:{
                text:"Photos",
                value:"photo",
                className:"sweet"
            },
            catchvideo:{
                text:"Videos",
                value:"video",
                className:"sweet"
            }
        }
    })
    .then((value) => {
       if (value == "photo"){

        window.location.replace("html/photo.html")
       }
       else(
        window.location.replace("html/video.html")
       )
           
        
    })
}