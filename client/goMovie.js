Router.route('/goMovie', 'goMovie');

Template.goMovie.helpers({
  likeCount: function() {
    return Movie.findOne().likeCount;
  }
});

Template.goMovie.events({
  'click #like': function(evt, tmpl) {
    var item = Movie.findOne();
    item.likeCount++;
    Movie.update({_id: item._id}, item);
  }
});