import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemController extends Controller {
    @tracked size = 'small';

    @tracked isZoomed = false;

    @action
    onChangeSize(newSize) {
        this.size = newSize;
    }

    @action
    toggleZoom() {
        this.isZoomed = !this.isZoomed;
    }
}
