import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ProductDetailsComponent extends Component {

    @service('shopping-cart') cart;

    @action
    addToCart() {
        const { id, author, size, image, download_url } = this.args;
        
        var price = 0;
        if (size == "small") {
            price = 50;
        } else if (size == "medium") {
            price = 100;
        } else if (size == "large") {
            price = 150;
        } else if (size == "xlarge") {
            price = 200;
        }
        
        this.cart.addItem({
            id,
            author,
            size,
            image,
            download_url,
            price,
        });
    }
}
