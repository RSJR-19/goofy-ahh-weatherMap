const searchingWrapperScreen = document.getElementById("searchingWrapper");
const myLocationScreen = document.getElementById("myLocationScreen");
const textH1 = document.getElementById("textH1");
const otherLocationScreen = document.getElementById("otherLocationScreen");
const locationInput = document.getElementById("locationInput");


textH1.style.display = "none";
searchingWrapperScreen.style.display = "none";
myLocationScreen.style.display = "none";
otherLocationScreen.style.display = "none";

function myLocation(state,place){
    searchingWrapperScreen.style.display = "flex";
    myLocationScreen.style.display = "flex";
    textH1.innerHTML = " ";

    setTimeout(()=>{
        myLocationScreen.style.display = "flex";
        setTimeout(()=>{
            myLocationScreen.classList.add("active");
            textH1.style.display = "flex";
            let loadingTexts = ["Searching.","Searching..","Searching..."];
            let index = 0;

            let interval = setInterval(() =>{
            textH1.innerHTML = loadingTexts[index];
            index = (index + 1) % loadingTexts.length;
            },300);

            setTimeout(() => {
            clearInterval(interval);
            if(state === "normal"){
            textH1.innerHTML = "Check mo sa labas.";
            }
            else if(state === "other"){
            textH1.style.textAlign = "center";
            textH1.innerHTML = `Punta ka sa<br> ${place},<br> check mo.`;
            }
            setTimeout(()=> {
                myLocationScreen.classList.remove("active");
                setTimeout(()=> {
                    searchingWrapperScreen.style.display = "none";
                    myLocationScreen.style.display = "none";
                },500);
            },2200);
            },8000);
            
        },50)
    },500)
}

function otherLocation(){
    locationInput.value = "";
    searchingWrapperScreen.style.display = "flex";
    otherLocationScreen.style.display = "flex";
    setTimeout(()=>{
        otherLocationScreen.classList.add("active")
    },500
)

}

locationInput.addEventListener("keydown",function (event){
    if (event.key === "Enter"){
        let location = locationInput.value;
        if (location !== ""){
            otherLocationScreen.classList.remove("active");
            setTimeout(()=>{
            otherLocationScreen.style.display = "none";
            setTimeout(()=>{
            myLocation("other",location)
           },100)
        },500);}
        

    }
})


