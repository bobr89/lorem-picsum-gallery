import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://picsum.photos',
    namespace: 'v2',

    pathForType(){
        return 'list?page=1&limit=25';
    }
})
