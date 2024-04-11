myitem2 = document.getElementById("Image");
let imageSizeToggle = 0;
    myitem2.addEventListener("click", onClick);
    function onClick() {  
        if (imageSizeToggle == 0) {
            imageSizeToggle = 1
            myitem2.style.width = "200px";
            myitem2.style.height = "200px";
        } else {
            imageSizeToggle = 0
            myitem2.style.width = "100px";
            myitem2.style.height = "100px";
        }
}