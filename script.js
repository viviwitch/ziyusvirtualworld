/*
function loop (){
  const snow = document.createElement("div");
  snow.className = "raindrop";
  
  snow.style.position = "absolute";
  snow.style.top = Math.random()*100 + "%";
  snow.style.left = Math.random()*100 + "%";
  
  document.body.appendChild(snow);

  setTimeout(function () {
    document.querySelectorAll(".raindrop").forEach(function (el) {
      el.style.top = "110%";
    });
  }, 10);
  
  setTimeout(function(){
  const firstSnow = document.querySelector(".raindrop")
      if (firstSnow) {
        firstSnow.remove();
      }
    },2000);
  }
  
  
setInterval(loop,1);
*/

/*var snowDirection = 'neutral';

setInterval(function(){
  const raindrop = document.createElement("div");
  raindrop.classList.add('raindrop');
  
  const initialLeft = Math.random()*100;
  raindrop.style.left = initialLeft + 'vw';
  
  const body = document.querySelector('body');
  body.append(raindrop);
  
  setTimeout(function(){
    var snowPushValue = 0;
    if(snowDirection == 'right'){
      snowPushValue = 40;
    } else if(snowDirection == 'left'){
      snowPushValue = -40;
    }else{
      snowPushValue = 0;
    }
    
    raindrop.style.left = initialLeft + snowPushValue + 'vw';
  },100)
  
  setTimeout(function(){
    raindrop.remove()
  },3000)
},30)

const body = document.querySelector('body')
body.addEventListener('mousemove',(event) => {
  
  const mousePosition = event.x;
  const windowMiddle = window.innerWidth/2;
  
  if(mousePosition < windowMiddle){
    snowDirection = 'left';
  }else if(mousePosition > windowMiddle){
    snowDirection = 'right';
  }else{
    snowDirection = 'neutral';
  }
  
})
  */

// // 使用全局变量来平滑记录当前的倾斜角度和水平偏移量
// let currentTiltAngle = 0; 
// let currentPushValue = 0;

// setInterval(function(){
//   const raindrop = document.createElement("div");
//   raindrop.classList.add('raindrop');
  
//   // 随机生成初始水平位置
//   const initialLeft = Math.random() * 100;
//   raindrop.style.left = initialLeft + 'vw';
  
//   // 【核心修改】在创建时赋予雨滴当前的倾斜角度
//   raindrop.style.transform = `rotate(${currentTiltAngle}deg)`;
  
//   const journalBody = document.querySelector('.journal-body');
//   journalBody.append(raindrop);
  
//   setTimeout(function(){
//     // 应用飘移距离（利用你 CSS 里的 transition 产生动画）
//     raindrop.style.left = initialLeft + currentPushValue + 'vw';
//   }, 100);
  
//   setTimeout(function(){
//     raindrop.remove();
//   }, 3000);
// }, 30);

// const journalBody = document.querySelector('.journal-body');

// if(journalBody){
//   journalBody.addEventListener('mousemove', (event) => {
//   const mousePosition = event.clientX; // 使用 clientX 获取鼠标 X 坐标
//   const windowMiddle = window.innerWidth / 2;
  
//   // 计算鼠标偏离中心的比例，范围从 -1 (最左侧) 到 1 (最右侧)
//   const offsetRatio = (mousePosition - windowMiddle) / windowMiddle;
  
//   // 设置最大倾斜角度为 20 度，根据鼠标位置动态计算当前角度
//   currentTiltAngle = offsetRatio * 30; 
  
//   // 设置最大飘移距离为 40vw，根据鼠标位置动态计算当前偏移
//   currentPushValue = offsetRatio * 40; 
// });
// }

// Raindrop
let currentTiltAngle = 0; 
let currentPushValue = 0;

const journalBody = document.querySelector('.journal-body');

if (journalBody) {
  const isMobile = window.innerWidth <= 768;
  const rainInterval = isMobile ? 140 : 30;
  const rainLifetime = isMobile ? 4200 : 3000;

  setInterval(function () {
    const raindrop = document.createElement("div");
    raindrop.classList.add("raindrop");

    const initialLeft = Math.random() * 100;
    raindrop.style.left = initialLeft + "vw";
    raindrop.style.transform = `rotate(${currentTiltAngle}deg)`;

    journalBody.append(raindrop);

    setTimeout(function () {
      raindrop.style.left = initialLeft + currentPushValue + "vw";
    }, 100);

    setTimeout(function () {
      raindrop.remove();
    }, rainLifetime);

  }, rainInterval);

  if (!isMobile) {
    journalBody.addEventListener("mousemove", (event) => {
      const mousePosition = event.clientX;
      const windowMiddle = window.innerWidth / 2;

      const offsetRatio = (mousePosition - windowMiddle) / windowMiddle;

      currentTiltAngle = offsetRatio * 30;
      currentPushValue = offsetRatio * 40;
    });
  } else {
    currentTiltAngle = 0;
    currentPushValue = 0;
  }
}


/*Homepagr Navigation Track Animation*/
const knob = document.querySelector(".nav-knob")
const left = document.querySelector(".home-nav .left")
const right = document.querySelector(".home-nav .right")

if(knob&&left&&right){
  left.addEventListener("mouseenter",()=>{
  knob.style.left="10%";
  knob.style.backgroundColor='#A6C2FA';
  knob.style.backgroundImage='none'; 

})
right.addEventListener("mouseenter",()=>{
    knob.style.left="89%"
    knob.style.backgroundColor='#A6C2FA';
    knob.style.backgroundImage='none';
})

document.querySelector(".home-nav").addEventListener("mouseleave",()=>{
    knob.style.left="50%";
    knob.style.backgroundColor='#C6C5C5';
    knob.style.backgroundImage="url(images/nav/nav-knob.svg)";
})
}

// Play music
// document.getElementById("playMusic").onclick = function(){
//   document.getElementById("musicPlayer").src =
//   "https://www.youtube.com/embed/tei4TDlIWRU?autoplay=1&loop=1&playlist=tei4TDlIWRU"
// }

//Mobile Button
const btn = document.querySelector('.circle-menu');
const menu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.menu-overlay');

if(btn && menu && overlay){

  function openMenu(){
    btn.classList.add('open');
    menu.classList.add('open');
    overlay.classList.add('open');
  }

  function closeMenu(){
    btn.classList.remove('open');
    menu.classList.remove('open');
    overlay.classList.remove('open');
  }

  function toggleMenu(){
    if(menu.classList.contains('open')){
      closeMenu();
    }else{
      openMenu();
    }
  }

  btn.addEventListener('click',toggleMenu);
  overlay.addEventListener('click',closeMenu);
}

// mobile polarnight
const polarGallery = document.querySelector('.polarnight-body .gallery');
const polarCenter = document.querySelector('.polarnight-body .center-img');

if (polarGallery && polarCenter) {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    polarCenter.addEventListener('click', () => {
      polarGallery.classList.toggle('open');
    });
  }
}

// mobile to about
const homeLink = document.querySelector('.home');

if (homeLink && window.innerWidth <= 768) {
  const path = window.location.pathname;

  if (path.includes('/journal/') || path.includes('/projects/')) {
    homeLink.setAttribute('href', '../about.html');
  } else {
    homeLink.setAttribute('href', 'about.html');
  }
}
