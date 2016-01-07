Router.configure({
  layoutTemplate: 'layout'
});

Router.onBeforeAction(function(req, res, next) {
  req.createdAt = new Date();
  req.type = 'onBeforeAction';
  Logs.insert(req);
  return this.next();
});

