import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ShoppingCartService extends Service {
    @tracked itemList = [];

    addItem(item) {
        const existingItem = this.itemList.find(({ id, size }) => {
            return (id === item.id && size == item.size);
        });
        
        if (existingItem) {
            alert("Item is already in the cart")
        } else {
            this.itemList = [...this.itemList, item];
        }
    }

    removeItem(item) {
        const removeId = item.removeId;
        const size = item.size;
        this.itemList = this.itemList.filter(function(item) {
            return (item.id !== removeId || item.size !== size);
        })
    }
}
