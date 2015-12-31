#board = Boards.findOne {}, {sort: {'글번호': -1}}
#if board?.글번호?
#  obj.글번호 = parseInt board.글번호
#
