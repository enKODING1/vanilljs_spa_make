// 히스토리를 사용한 spa 구현해보기 


/*
   기본 홈페이지는 about이라 가정           
            
           라우팅시
           main클릭시 about은 push되고 뒤로 가기시 pop해서 나옴 

           렌더링시
           id='root' 를 가진 영역에 현재의 위치와 일치한 파일의 컴포넌트를 삽입한다


           어떻게 현재 위치를 push 하고 다음의 위치를 가져올 것이냐
           어떻게 루트 영역을 렌더링 할 것이냐
           비동기 방법을 사용해야하나


           */

const root = document.querySelector('#root');

const url = 'http://127.0.0.1:5500/spa%20(history)/render';

const button = {
        about: document.querySelector('.about_nav'),
        main: document.querySelector('.main_nav'),
        etc: document.querySelector('etc_nav')
    }

const route = {
        'About':`${url}/about.html` ,
        'Main':`${url}/main.html`,
        'Etc':`${url}/etc.html`
};

const request = new XMLHttpRequest();
request.open('GET',route.Main,true);
request.send();

button.main.addEventListener('click',()=>{
        history.pushState('root','','Main');
        root.innerHTML = request.responseText;
})

setTimeout(() => {
        
}, timeout);