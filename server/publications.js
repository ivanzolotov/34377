Meteor.publish('events', function () {
  if (this.userId) {
    return Events.find({});
  } else {
    return Events.find({}, {fields: {submitUser: false, submitTime: false}});
  }
});