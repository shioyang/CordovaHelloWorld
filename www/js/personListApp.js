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
			PersonFactory.savePersons(this.persons);
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

		this.deletePerson = function(name) {
			var newPersons = [];
			angular.forEach(this.persons, function(p, index) {
				if (p.name !== name)
					newPersons.push(p);
			});
			this.persons = newPersons;
			this.savePersons();
		};

		// init
		this.loadPersons();
		this.resetPerson();
	}]);

})();

