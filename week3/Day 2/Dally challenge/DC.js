const planets =[
    {name: "mercury", color : "#808080 ",nbrofmoons:4},
    {name: "venus", color : "#FFFFE0  ",nbrofmoons:5},
    {name: "earth", color : "#0000FF ",nbrofmoons:1},
    {name: "mars", color : "#FF0000 ",nbrofmoons:2},
    {name: "saturn", color : "#F5F5DC ",nbrofmoons:274},
    {name: "uranus", color : "#AFEEEE  ",nbrofmoons:13},
    {name: "neptune", color : "#001a33 ",nbrofmoons:28},
];
let sec = document.querySelector(".listPlanets");

planets.forEach(function(planet){
    let div = document.createElement("div");
    div.classList.add("planet",planet.name);
    div.textContent = `${planet.name} with number of moons ${planet.nbrofmoons}`;
    console.log(div.innerHTML);
    div.style.width = "800px";
    div.style.height = "40px";
   
  div.style.backgroundColor = planet.color;
sec.appendChild(div);
})

