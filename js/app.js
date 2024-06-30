VANTA.BIRDS({
    el: "#your-element-selector",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0xFF07080E,
    color1: 0xde6012,
    color2: 0xcf0f7c,
    wingSpan: 19.00,
    speedLimit: 2.00,
    separation: 29.00,
    alignment: 97.00,
    cohesion: 32.00,
    quantity: 3.00
});
let answers = document.querySelectorAll(".accordion");

  answers.forEach((event) => {

      event.addEventListener("click",()=> {

          if(event.classList.contains("active")){

              event.classList.remove("active");

          } else{

              event.classList.add("active");

          }

      })

  })
