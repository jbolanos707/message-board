Board.Router.map(function() {
  this.resource('questions', {path: "/"});
  this.resource('new-question');
  this.resource('question', {path: 'questions/:question_id'}, function() {
    this.resource('new-answer');
  });
  // this.resource('recent-answers');
});
