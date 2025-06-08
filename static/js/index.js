const inputImg = document.querySelector("#input-img");

const notification = document.querySelector("#notification")
const btn = document.querySelector("#analyze");


inputImg.addEventListener("change", () => {
  if (inputImg.files.length > 0) {
    notification.innerText = inputImg.files[0].name;
    notification.classList.add("bg-green-700" , "text-white")
    btn.classList.add("bg-green-700","text-white")
  } else {
    notification.innerText = "No file chosen";
  }
});

//Analyze to analyzing in the button

btn.addEventListener("click", () => {
  if (notification.innerText != "No File Choosen") {
    btn.innerText = "Analyzing....";
    btn.classList.replace("cursor-pointer","cursor-not-allowed")
    
    

  } else {
    btn.innerText = "Analyze";

  }

})