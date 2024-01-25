function mouseHover (){
    let dropdownArr = document.querySelectorAll("#dropdown-btn")
let dropdown1 = document.querySelector(".for-company")
let dropdown2 = document.querySelector(".for-work")
let dropdown3 = document.querySelector(".for-industry")
let a=0
dropdownArr.forEach(e=> {
    // hover active 
    e.addEventListener("mouseenter", ()=> {
       let className = e.className
     if(a==0) {
      if(className == "company") {
         dropdown1.style.display = "block"
         a=1
        }
       else if(className == "works") {
          dropdown2.style.display = "block"
          a=1
         }
         else {
          dropdown3.style.display = "block"
          a=1
         }
     }
    })
    // hover deactive 
    e.addEventListener("mouseleave", ()=> {
        let className = e.className
      if(a==1) {
         if(className == "company") {
            dropdown1.style.display = "none"
            a=0
           }
          else if(className == "works") {
             dropdown2.style.display = "none"
             a=0
            }
            else {
             dropdown3.style.display = "none"
             a=0
            }
      }
     })
})
}
mouseHover()
// toggle bar code
function toggleBtn() {
   let a=0
let menuBtn = document.querySelector("#menu")
let toggleBar = document.querySelector(".toggleBar")
let closeBtn = document.querySelector("#close")
let main = document.querySelector(".main")
menuBtn.addEventListener("click",()=> {
   if(a==0) {
      toggleBar.style.left = "0%"
      main.style.height = "100%"
      main.style.overflow = "hidden"
      a=1
   }
   closeBtn.addEventListener("click", ()=> {
      if(a==1) {
         toggleBar.style.left = "-100%"
         main.style.height = "inharit"
         main.style.overflow = "auto"
         a=0
      }
   })
})
}
toggleBtn()
// imges hover 
// drop down 
let c=0
let dropdownBox = document.querySelectorAll(".dropDown")
dropdownBox.forEach(e=> {
   e.addEventListener("click",()=> {
     if(c==0) {
      e.style.height = "200px"
      c=1
     }
     else {
      e.style.height = "25px"
      c=0
     }
   })
})