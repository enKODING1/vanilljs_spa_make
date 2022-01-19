import {Router} from './Router.js';
import { OtherPage } from './pages/OtherPage.js';
import { MainPage} from './pages/MainPage.js';

// const mainPage = new MainPage();
// const otherPage = new OtherPage();

const pages = [
    {
        page:MainPage , path:'main'
    },
    {
        page:OtherPage,path:'other'
    }
];



const router = new Router({pages});