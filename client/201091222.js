Template.board.helpers({
  boards: function (err, tmpl) {
    return Boards.find({});
  }
});
Template.board.rendered = function() {
  $(document).delegate("tr", "click", function(e) {
    // write your code here
    $(this).find('button').attr('count')
  });
}
Template.board.events({
  "click #removeOneItem": function(e, tmpl) {
    var count = $(e.target).attr('count');
    var obj = Boards.findOne({글번호: parseInt(count)})
    Boards.remove({
      _id: obj._id
    });
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
    //글번호를 알아냅시다. 글번호 === 전체 글 갯수 + 1
    var count = Boards.find().count() + 1
    obj.글번호 = count;
    Boards.insert(obj);

    $('#작성자').val('');
    $('#제목').val('');
    $('#본문').val('');
  }
});

