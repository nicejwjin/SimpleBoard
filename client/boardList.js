Router.route('/', 'boardList');

Template.boardList.onCreated(function() {
  //1
  console.log('created');
});

Template.boardList.onRendered(function() {
  //3
  console.log('rendered');
  //$('.table > tbody > tr').click(function() {
  //  // row was clicked
  //  Router.go('/boardDetail', {_id: });
  //});
});

Template.boardList.helpers({
  //2
  boards: function () {
    return Boards.find({});
  },
  isLogin: function() {
    if(Meteor.user() === null
      || Meteor.user() === undefined) {
      //execute
      return false;
    }
    else return true;
  }

});

Template.boardList.events({
  //4
  "click #removeOneItem": function(event, template) {
    //console.log(this);
    //var count = $(e.target).attr('count');
    //var obj = Boards.findOne({글번호: parseInt(count)});
    Boards.remove({
      _id: this._id
    });
  },
  "click #cancel": function(e, tmpl) {
    $('#작성자').val('');
    $('#제목').val('');
    $('#본문').val('');
  },
  "click #write": function(e, tmpl) {
    var obj = {};
    obj.작성자 = $('#작성자').val();
    obj.제목 = $('#제목').val();
    if(obj.작성자.length <= 0 || obj.제목.length <= 0) {
      //error
      return alert('작성자와 제목을 모두 입력해주세요!!');
    }
    obj.본문 = $('#본문').val();
    //글번호를 알아냅시다. 글번호 === 전체 글 갯수 + 1
    //글번호 max값 + 1로 수정
    var board = Boards.findOne({}, {sort: {'글번호': -1}});
    if(board !== undefined && board !== null) {
      if (board.hasOwnProperty('글번호')) {
        obj.글번호 = parseInt(board.글번호) + 1;
      }
    }
    else {
      obj.글번호 = 0;
    }

    Boards.insert(obj);

    $('#작성자').val('');
    $('#제목').val('');
    $('#본문').val('');
  }
});

