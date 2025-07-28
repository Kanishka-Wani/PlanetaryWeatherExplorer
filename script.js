const planets = [
    { name: "Mercury", weather: "Extreme solar radiation, no atmosphere", color: "#bebebe" },
    { name: "Venus", weather: "High pressure, sulfuric acid clouds", color: "#e1c699" },
    { name: "Earth", weather: "Mild with magnetic field protection", color: "#5fa8d3" },
    { name: "Mars", weather: "Dust storms, cold temperatures", color: "#d95f44" },
    { name: "Jupiter", weather: "Radiation belts, massive storms", color: "#d9a066" },
    { name: "Saturn", weather: "High winds, icy rings", color: "#f4e29b" },
    { name: "Uranus", weather: "Methane clouds, extreme cold", color: "#7fffd4" },
    { name: "Neptune", weather: "Strongest winds in solar system", color: "#4169e1" },
  ];
  
  let current = 2; // Start at Earth
  
  const planetCard = document.getElementById("planet-card");
  const planetName = planetCard.querySelector(".planet-name");
  const planetWeather = planetCard.querySelector(".planet-weather");
  
  function updatePlanet(index) {
    planetCard.style.backgroundColor = planets[index].color;
    planetName.textContent = `🪐 ${planets[index].name}`;
    planetWeather.textContent = planets[index].weather;
  }
  
  document.getElementById("nextBtn").addEventListener("click", () => {
    current = (current + 1) % planets.length;
    updatePlanet(current);
  });
  
  document.getElementById("prevBtn").addEventListener("click", () => {
    current = (current - 1 + planets.length) % planets.length;
    updatePlanet(current);
  });
  
  // Initialize
  updatePlanet(current);
  