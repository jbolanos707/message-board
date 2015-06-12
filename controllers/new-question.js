Board.NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        question: this.get('question'),
        author: this.get('author'),
        description: this.get('description'),
      });

      newQuestion.save();

      this.set('name', '');
      this.set('question', '');
      this.set('description','');
      this.transitionToRoute('questions');
    }
  }
})
