Board.Router.map(function() {
  this.resource('questions', {path: "/"});
  this.resource('new-question');
  this.resource('question', {path: 'questions/:question_id'})
  // this.resource('recent-answers');
  // this.resource('question', {path: 'questions/:question_id'}, function() {
  //   this.resource('new-answer');
  // });
});
