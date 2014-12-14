Router.map(function () {
  this.route('index', {
    path: '/',
    action: function () {
      this.redirect('/afisha')
    }
  });
  this.route('afishaIndex', {
    path: '/afisha',
    layoutTemplate: 'afisha',
    template: 'afishaIndex',
    waitOn: function () {
      return Meteor.subscribe('events');
    }
  });
  this.route('afishaArchive', {
    path: '/afisha/archive',
    layoutTemplate: 'afisha',
    template: 'afishaArchive',
    waitOn: function () {
      return Meteor.subscribe('events');
    }
  });
  this.route('afishaNew', {
    path: '/afisha/new',
    layoutTemplate: 'afisha',
    template: 'afishaNew'
  });
  this.route('afishaEdit', {
    path: '/afisha/:_id/edit',
    layoutTemplate: 'afisha',
    template: 'afishaEdit',
    waitOn: function () {
      return Meteor.subscribe('events');
    },
    data: function() {
      return Events.findOne(this.params._id);
    }
  });
  this.route('afishaSingle', {
    path: '/afisha/:_id',
    layoutTemplate: 'afisha',
    template: 'afishaSingle',
    waitOn: function () {
      return Meteor.subscribe('events');
    },
    data: function() {
      return Events.findOne(this.params._id);
    }
  });
});





Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('afishaAccessDenied');
    }
  } else {
    this.next();
  }
}, {
  only: ['afishaNew', 'afishaEdit']
});
