window.onload = choosePic;

var myPix = new Array("images/93a59573394503902efbd7689eea0f44 (1).jpg","images/card back 1.jpg","images/card back 3.jpg","images/card back 4.jpg");

var randomNum = Math.floor(Math.random() * myPix.length);
function choosePic() {
     document.getElementById("myPicture").src = myPix[randomNum];}
     
imgNum = randomNum+1
console.log("Image "+ imgNum)

const element = document.getElementById("regen");
const element2 = document.getElementById("regen2");
if(randomNum==0){
    element.innerHTML = "This outfits contains a blue denim along with a white shirt and a cream colored blazer and white shoes";
    element2.innerHTML = "Accessories recommended: Silver Bracelet";
} else if(randomNum==1){
    element.innerHTML = "2";
    element2.innerHTML = "2";
} else if(randomNum==2){
    element.innerHTML = "3";
    element2.innerHTML = "3";
} else{
    element.innerHTML = "4";
    element2.innerHTML = "4";
}


