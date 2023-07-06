var slideIndex = 1
setInterval(function(){
    plusDiv(1)
}, 1500)

function plusDiv(index){
    showImage(slideIndex += index)
}

function showImage(index) {
    console.log(index)
    const imglist = document.getElementsByClassName("slider")
    if (index > imglist.length) {slideIndex = 1}
    if (index < 1) {slideIndex = imglist.length}
    for (i = 0; i < imglist.length; i++) {
        imglist[1].style.display = "none"
    }
    imglist[slideIndex - 1].style.display = "block"
}

function validateForm() {
    const name = document.forms ["message-form"][ "Name" ].value;
    const email = document.forms[ "message-form"]["email"].value;
    const number = document.forms[ "message-form"][ "number" ].value;
    const messages = document.forms[ "message-form"] ["message"].value;

    if (name == "" || email == "" || number == "" || message == "") {
    alert("Tidak boleh ada yang kosong");
    return false;
    }
    setSenderUI(name,email,number,messages);
    return false;
}