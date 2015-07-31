Raffler.ApplicationController = Ember.Controller.extend({
    actions: {
        addEntry: function() {
	    alert(this.get('newEntryName'));
	    return this.set('newEntryName', "");
		}
    }
});

