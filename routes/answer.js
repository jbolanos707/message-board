Board.AnswerRoute = Ember.Route.extend({
  // model: function() {
  //   return this.store.find('answer');
  }
  model: function(params) {
    return this.store.find('answer', params.answer_id);
  }
});
