function generateQR(){
    var userHeight=document.getElementById("userHeight").value;
    var userWidth=document.getElementById("userWidth").value;
    var userText=document.getElementById("userText").value;
console.log(userHeight);
console.log(userWidth);
console.log(userText);

let output = `https://api.qrserver.com/v1/create-qr-code/?data=${userText}&size=${userWidth}x${userHeight}`

    document.getElementById('imageQR').innerHTML = `<a href="${output}.jpg" download="${output}" target="__BLANK"> 
    <img id="image" src="${output}" alt="">
    </img>
    </a>`;
}
    