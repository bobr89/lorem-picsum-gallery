import EmberRouter from '@ember/routing/router';
import config from 'photo-gallery/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('item', { path: '/item/:item_id'});
  this.route('not-found', { path: '/*path'});
  this.route('cart', { path: 'shopping-cart'});
  this.route('page', { path: '/page/:page_num'});
});
