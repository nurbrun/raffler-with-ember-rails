Raffler.EntriesController = Ember.Controller.extend({
    
    // entries: [],

    actions: {
	 addEntry: function() {
	    this.entries.pushObject(Ember.Object.create({
	      name: this.get('newEntryName')
	    }));
	    return this.set('newEntryName', "");
	  },
	  drawWinner: function() {
	    var entry, pool;
	    pool = this.entries.rejectBy('winner');
	    if (pool.length > 0) {
	      entry = pool[Math.floor(Math.random() * pool.length)];
	      return entry.set('winner', true);
	    }
	  }
	}
});
