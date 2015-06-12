Board.Answer = DS.Model.extend({
  text: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
