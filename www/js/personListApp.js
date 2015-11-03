(function() {
	var app = angular.module('personListApp', ['services']);

	app.controller('PersonList', ['PersonFactory', function(PersonFactory) {
		this.persons = [];

		this.person = null;

		this.loadPersons = function() {
			this.persons = PersonFactory.loadPersons();
		};

		this.addPerson = function() {
			this.persons.push(this.person);
			this.resetPerson();
		};

		this.resetPerson = function() {
			this.person = {
				name: "",
				role: "",
				place: "",
				country: "",
				memo: ""
			};
		};

		// init
		this.loadPersons();
		this.resetPerson();
	}]);

})();

