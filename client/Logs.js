Router.route('/Logs', 'Logs');

Template.Logs.helpers({
  logs: function() {
    return Logs.find({}, {sort: {createdAt: -1}});
  }
});