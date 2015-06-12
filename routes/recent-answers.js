Board.RecentAnswersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('answer');
  }
});
