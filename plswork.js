window.onload = choosePic;

var myPix = new Array("images/93a59573394503902efbd7689eea0f44 (1).jpg","https://i.pinimg.com/564x/f4/c4/45/f4c4459b06867cf8cb28da448e0c3835.jpg","https://i.pinimg.com/750x/62/cf/c6/62cfc62d1cac2799e3641bb8c4b42893.jpg","https://i.pinimg.com/564x/2e/15/06/2e1506d585c4327abe6abe5bf6ab8fe9.jpg");

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
    element.innerHTML = "This outfits contains a blue denim along with a white shirt and white kicks";
    element2.innerHTML = "Accessories recommended: Classic Analogue watch And Wayfarers";
} else if(randomNum==2){
    element.innerHTML = "This outfit contains a green tee along with white trousers and suede shoes ";
    element2.innerHTML = "Accessories recommended: Steel watch And Brown Wayfarers";
} else{
    element.innerHTML = "This outfit contains a white tee along with brown cargos and white sneakers";
    element2.innerHTML = "Accessories recommended: Classic Analogue watch And Aviators"
}


