import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | product/details', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('product', {
      id: 0,
      author: "Alejandro Escamilla",
      size: "small",
      download_url: "https://picsum.photos/id/0/5616/3744",
      image: "https://picsum.photos/id/0/5616/3744",
    });

    this.set('onChangeSize', function(size) {
      assert.equal(size, 'small');
    })

    await render(hbs `
      <Product::Details 
        @id={{this.product.id}}
        @author={{this.product.author}}
        @size={{this.product.size}}
        @download_url={{this.product.download_url}}
        @image={{this.product.image}}
        @onChangeSize={{this.onChangeSize}}
      />
    `);

    assert.dom('[data-test-author-name]').hasText('Alejandro Escamilla');
    await click('[data-test-size]');
  });
});
