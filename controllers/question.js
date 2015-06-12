Board.QuestionController = Ember.ObjectController.extend({
  needs: ['answer'],
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
      this.get('model').save();    //this line will allow the edited post to be saved and show edited version when page refreshes
    },
    delete: function() {
      if (confirm('Are you sure you would like to delete this thread?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    }
    // deleteAnswer: function() {
    //   var question = this.get('controllers.question.model');
    //   question.get('answers')
    //   if (confirm('Are you sure you would like to delete your answer?')) {
    //     this.get('model').destroyRecord();
    //     this.transitionTo('question', question.id);
    //
    //
    //     id = this.get('question.id')
    //     this.get('model').destroyRecord();
    //     this.transitionToRoute('/questions/', + id);
    //   var question = this.get('controllers.question.model');
    //   if (confirm('Are you sure you would like to delete your answer?')) {
    //     this.get('model').destroyRecord();
    //     this.transitionToRoute('question', question.id);
  }
});
