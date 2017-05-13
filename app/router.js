import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', function() {
    this.route('user', {path: '/user/:id'});
    this.route('show', {path: '/:id'});
  });
});

export default Router;
