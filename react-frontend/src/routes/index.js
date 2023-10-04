import Home from '../pages/Home';
import Product from '../pages/Product';
import Contact from '../pages/Contact';

const publicRoutes =[
    { path:'/', component: Home},
    { path:'/product/*', component: Product},
    { path:'/contact', component: Contact},
];

const privateRoutes =[
   
];

export {publicRoutes,privateRoutes};