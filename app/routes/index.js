import Route from '@ember/routing/route';
import { products } from '../data/products'

export default class IndexRoute extends Route {
    async model() {
        var products = this.store.findAll('product');

        var url = `https://picsum.photos/v2/list?page=1&limit=25`;

        let response = await fetch(url);
        let data = await response.json();

        data.forEach(function(item){
            item.thumbnail_url = "https://picsum.photos/id/" + item.id + "/200";
        });

        return data;
    }
}
