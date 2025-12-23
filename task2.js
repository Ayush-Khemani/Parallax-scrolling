window.addEventListener("scroll", () => {
  const s = window.pageYOffset;

  // Background layers
  document.querySelector(".layer-1").style.transform = `translateY(${-s*0.15}px)`;
  document.querySelector(".layer-2").style.transform = `translateY(${-s*0.25}px)`;
  document.querySelector(".layer-3").style.transform = `translateY(${-s*0.35}px)`;
  document.querySelector(".layer-4").style.transform = `translateY(${-s*0.45}px)`;
  document.querySelector(".layer-5").style.transform = `translateY(${-s*0.55}px)`;

  // Rocks
  for (let i = 1; i <= 12; i++) {
    const rock = document.querySelector(`.rock-${i}`);
    if(rock) rock.style.transform = `translateY(${-s*(0.2 + i*0.05)}px)`;
  }

  // Clouds
  document.querySelector(".cloud-1").style.transform = `translateY(${-s*0.1}px) translateX(${s*0.05}px)`;
  document.querySelector(".cloud-2").style.transform = `translateY(${-s*0.15}px) translateX(${-s*0.03}px)`;

  // Birds
  document.querySelector(".bird-1").style.transform = `translateY(${-s*0.25}px) translateX(${s*0.1}px)`;
  document.querySelector(".bird-2").style.transform = `translateY(${-s*0.2}px) translateX(${-s*0.08}px)`;
});
