

Raffler.Router.map ()->
	@resource 'entries', { path: '/' }, ->

Raffler.EntriesRoute = Ember.Route.extend
	setupController: (controller) -> controller.set('entries', [])