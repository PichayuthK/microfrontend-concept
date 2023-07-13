import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from  'cart/CartShow';

console.log('container is loaded')

productsMount(document.querySelector('#dev-products-app-shell'))
cartMount(document.querySelector('#dev-cart-app-shell'))