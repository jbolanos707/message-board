Board.NewAnswerController = Ember.Controller.extend({
  needs: ['question'],
  actions: {
    save: function() {
      var answer = this.store.createRecord('answer', {
          name: this.get('name'),
          text: this.get('text'),
      });
      answer.save();

      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(answer);
      question.save();

      this.set('name', '');
      this.set('text', '');
      this.transitionToRoute('question', question.id);
    }
  }
});
