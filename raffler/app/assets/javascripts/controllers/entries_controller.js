Raffler.EntriesController = Ember.Controller.extend({
    
    // entries: [],

    actions: {
        addEntry: function() {
		this.entries.pushObject({
	      name: this.get('newEntryName')
	    });
	    return this.set('newEntryName', "");
		},
		drawWinner: function() {
	    var entry, pool;
	    pool = this.rejectBy('winner');
	    if (pool.length > 0) {
	      entry = pool[Math.floor(Math.random() * pool.length)];
	      return entry.winner = true;
	    }
	  }
  }

    
});

// Raffler.EntriesController = Ember.ArrayController.extend

// 	addEntry: ->
// 		@pushObject name: @get('newEntryName')
// 		@set('newEntryName', "")

// 	drawWinner: ->
// 		pool = @rejectProperty('winner')
// 		if pool.length > 0 
// 			entry = pool[Math.floor(math.random()*pool.length)]