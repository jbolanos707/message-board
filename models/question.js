Board.Question = DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  description: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
