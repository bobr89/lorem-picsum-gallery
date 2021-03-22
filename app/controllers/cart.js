import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
    @service('shopping-cart') cart;
    
    get subtotal() {
        return this.cart.itemList.reduce((acc, item) => {
            return acc + item.price;
        }, 0);
    }

    get tax() {
        return 0.13 * this.subtotal;
    }

    get total() {
        return this.subtotal + this.tax;
    }

    @action
    removeFromCart (item) {
        const removeId = item.id;
        const size = item.size;
        this.cart.removeItem({ removeId, size });
    }
}
