Meteor.methods({
  addEvent: function(eventAttributes) {
    if (!Meteor.user())
      throw new Meteor.Error(401);
    if (!eventAttributes.title)
      throw new Meteor.Error(430);
    var event = _.extend(_.pick(eventAttributes, 'title', 'allDay', 'place', 'time', 'gmt', 'picture', 'description'), {
      submitUser: Meteor.user()._id,
      submitTime: new Date().getTime()
    });
    var id = Events.insert(event);
    return id;
  }
});
