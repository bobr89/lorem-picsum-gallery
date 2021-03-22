import DS from 'ember-data'

export default DS.RESTSerializer.extend ({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { product: payload };
        payload.product.forEach(function(item){
            item.thumbnail_url = "https://picsum.photos/id/" + item.id + "/200";
        });
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});
