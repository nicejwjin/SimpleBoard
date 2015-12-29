Template.board.helpers({
  boards: function (err, tmpl) {
    return Boards.find({});
  }
});
Template.body.events({
  "click #cancel": function(e, tmpl) {
    $('#작성자').val('');
    $('#제목').val('');
    $('#본문').val('');
  },
  "click #write": function(e, tmpl) {
    var obj = {};

    obj.작성자 = $('#작성자').val();
    obj.제목 = $('#제목').val();
    obj.본문 = $('#본문').val();

    Boards.insert(obj);


  }
});

