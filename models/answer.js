Board.Answer = DS.Model.extend({
  name: DS.attr(),
  text: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
