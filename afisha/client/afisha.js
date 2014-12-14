Template.afishaIndex.helpers({
  events: function() {
    return Events.find({time: {$gt: new Date()}}, {sort: {time: 1}});
  },
  time: function() {
    var date = new Date(this.time);
    return serializeDate(date);
  },
  canEditEvent: function() {
    return canEditEvent(this.submitUser);
  },
});



Template.afishaArchive.helpers({
  events: function() {
    return Events.find({time: {$lt: new Date()}}, {sort: {time: -1}});
  },
  time: function() {
    var date = new Date(this.time);
    return serializeDate(date);
  },
  canEditEvent: function() {
    return canEditEvent(this.submitUser);
  },
});



Template.afishaSingle.helpers({
  time: function() {
    var date = new Date(this.time);
    return serializeDate(date);
  },
  canEditEvent: function() {
    return canEditEvent(this.submitUser);
  },
});



Template.afishaNew.events({
  'submit form': function(e) {
    e.preventDefault();
    Meteor.call('addEvent', parseEvent(e), function(err, id) {
      if (err) return console.error(err.reason);
      Router.go('afishaSingle', {_id: id});
    });
  },
  'change input[type="checkbox"][name="allDay"]': function(e) {
    if ($(e.target).prop('checked') === true) $('input[name="time"]').css('display', 'none');
    else $('input[name="time"]').css('display', 'inline');
  },
});



Template.afishaEdit.helpers({
  time: function() {
    var date = new Date(this.time);
    return serializeDateSimple(date);
  },
});



Template.afishaEdit.events({
  'submit form': function(e) {
    e.preventDefault();
    var id = this._id;
    Events.update(id, {$set: parseEvent(e)}, function(err) {
      if (err) console.error(err.reason);
      else Router.go('afishaSingle', {_id: id});
    });
  },
  'change input[type="checkbox"][name="allDay"]': function(e) {
    if ($(e.target).prop('checked') === true) $('input[name="time"]').css('display', 'none');
    else $('input[name="time"]').css('display', 'inline');
  },
  'click .delete': function(e) {
    e.preventDefault();
    if (confirm('Delete?')) {
      var id = this._id;
      Events.remove(id, function(err) {
        if (err) console.error(err.reason);
        else Router.go('afishaIndex');
      });
    };
  },
});



var canEditEvent = function(user) {
  return Meteor.userId() && user == Meteor.userId();
};

var serializeDate = function(date) {
  date.addHours(5);
  return {
    year: date.getUTCFullYear(),
    month: convertMonth(date.getUTCMonth()),
    weekday: convertWeekday(date.getUTCDay(), 'abbr'),
    day: date.getUTCDate(),
    hours: (date.getUTCHours()<10?'0':'') + date.getUTCHours(),
    minutes: (date.getUTCMinutes()<10?'0':'') + date.getUTCMinutes(),
  };
};

var serializeDateSimple = function(date) {
  date.addHours(5);
  return {
    year: date.getUTCFullYear(),
    month: (date.getUTCMonth()<10?'0':'') + date.getUTCMonth(),
    day: (date.getUTCDate()<10?'0':'') + date.getUTCDate(),
    hours: (date.getUTCHours()<10?'0':'') + date.getUTCHours(),
    minutes: (date.getUTCMinutes()<10?'0':'') + date.getUTCMinutes(),
  };
};

var parseEvent = function(e) {
  var time = new Date();
  var d = $(e.target).find('[name=date]').val();
  var t = $(e.target).find('[name=time]').val();
  time.setUTCFullYear(d.slice(0,4));
  time.setUTCMonth(d.slice(5,7) - 1);
  time.setUTCDate(d.slice(8,10));
  time.setUTCHours(t.slice(0,2));
  time.setUTCMinutes(t.slice(3,5));
  time.setUTCSeconds(0);
  time.addHours(-$(e.target).find('[name=gmt]').val());
  return {
    title: $(e.target).find('[name=title]').val(),
    allDay: $(e.target).find('[name=allDay]').prop('checked'),
    place: $(e.target).find('[name=place]').val(),
    time: time,
    gmt: $(e.target).find('[name=gmt]').val(),
    picture: $(e.target).find('[name=picture]').val(),
    description: $(e.target).find('[name=description]').val(),
  };
};

var convertMonth = function(m) {
  return ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'][m];
};

var convertWeekday = function(wd, f) {
  var weekday = {
    full: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
    abbr: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
  };
  return weekday[f][wd-1];
};