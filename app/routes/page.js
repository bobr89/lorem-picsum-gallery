import Route from '@ember/routing/route';
import Ember from 'ember';

export default Ember.Route.extend({
    async model(params) {
        const { page_num } = params;
        var current_page = parseInt(page_num);
        var next_page = parseInt(page_num)+1;
        var previous_page = parseInt(page_num)-1;

        var url = `https://picsum.photos/v2/list?page=` + page_num + `&limit=25`;

        let response = await fetch(url);
        let data = await response.json();

        data.forEach(function(item){
            item.thumbnail_url = "https://picsum.photos/id/" + item.id + "/200";
        });

        if (previous_page > 0) {
            return {current_page, next_page, previous_page, data};
        } else {
            return {current_page, next_page, data};
        }
    }
});
