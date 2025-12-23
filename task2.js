window.addEventListener("scroll", () => {
  const s = window.pageYOffset;

  
  document.querySelector(".layer-1").style.transform = `translateY(${-s*0.15}px)`;
  document.querySelector(".layer-2").style.transform = `translateY(${-s*0.25}px)`;
  document.querySelector(".layer-3").style.transform = `translateY(${-s*0.35}px)`;
  document.querySelector(".layer-4").style.transform = `translateY(${-s*0.45}px)`;
  document.querySelector(".layer-5").style.transform = `translateY(${-s*0.55}px)`;

 
  document.querySelector(".rock-1").style.transform = `translateY(${-s*0.8}px)`;
  document.querySelector(".rock-2").style.transform = `translateY(${-s*0.6}px)`;
  document.querySelector(".rock-3").style.transform = `translateY(${-s*0.4}px)`;
  document.querySelector(".rock-4").style.transform = `translateY(${-s*0.5}px)`;
  document.querySelector(".rock-5").style.transform = `translateY(${-s*0.7}px)`;
  document.querySelector(".rock-6").style.transform = `translateY(${-s*0.7}px)`;
  document.querySelector(".rock-7").style.transform = `translateY(${-s*0.5}px)`;
  document.querySelector(".rock-8").style.transform = `translateY(${-s*0.2}px)`;
  document.querySelector(".rock-9").style.transform = `translateY(${-s*0.4}px)`;
  document.querySelector(".rock-10").style.transform = `translateY(${-s*0.6}px)`;
  document.querySelector(".rock-11").style.transform = `translateY(${-s*0.3}px)`;
  document.querySelector(".rock-12").style.transform = `translateY(${-s*0.5}px)`;
});
