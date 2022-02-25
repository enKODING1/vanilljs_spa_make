// const button = document.querySelectorAll('#navBtn');
// const main = document.getElementById('root');
// const range = document.querySelector('.speed');
// const xhr = new XMLHttpRequest();
// let posY = 1;
// let count = 0;
// let opacity  =1;
// var speed = 10;
// let req;

// range.onchange = ()=>{
//      speed = parseInt(range.value);
// }

// const routes = {
//      '/': './render/main.html',
//      '/About': './render/about.html',
//      '/Etc': './render/etc.html'
// };

// let animate = () => {
//      //     main.innerHTML = xhr.responseText;
//      if (count == 0 && posY <= 200) {
//           main.style.transform = `translateY(${posY}px)`;
//           main.style.opacity = `${opacity}`;
//           opacity -= 0.1;
//           posY += speed;
//           req = window.requestAnimationFrame(animate);
//      } else if (posY > 0 && count == 1) {
//           main.style.transform = `translate(${posY}px)`;
//           main.style.opacity = `${opacity}`;
//           opacity += 0.1;
//           posY -= speed;
//           req = window.requestAnimationFrame(animate);
//           if (posY <= 0) {
//                window.cancelAnimationFrame(req);
//                count = 0;
//                opacity = 1;
//           }
//      } else if (posY => 200 && count == 0) {
//           main.innerHTML = xhr.responseText;
     
//           count = 1;
//           req = window.requestAnimationFrame(animate);
//      }
// }




// const router = (event) => {
//      window.history.pushState({}, '', event.target.href);
//      render();
// }

// const render = () => {
//      let path = window.location.pathname;
//      console.log(path);
//      const route = routes[path];
//      xhr.open('GET', route, false);
//      xhr.send();
//      requestAnimationFrame(animate);
// }


// button.forEach((e) => {
//      e.addEventListener('click', (event) => {
//           event.preventDefault();
//           router(event);
//      });
// })

// window.onload = () => {
//      render();
// }
