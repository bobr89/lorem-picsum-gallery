import Model from '@ember-data/model';
import DS from 'ember-data';

const { attr } = DS;

export default Model.extend ({
    author: DS.attr('string'),
    download_url: DS.attr('string'),
});
