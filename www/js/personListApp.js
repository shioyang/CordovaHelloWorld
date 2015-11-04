(function() {
	var app = angular.module('personListApp', ['services']);

	app.controller('PersonList', ['PersonFactory', function(PersonFactory) {
		this.persons = [];

		this.person = null;
		this.selectedPerson = null;

		this.loadPersons = function() {
			this.persons = PersonFactory.loadPersons();
		};

		this.addPerson = function() {
			this.persons.push(this.person);
			this.savePersons();
			this.resetPerson();
		};

		this.savePersons = function() {
			PersonFactory.savePersons(this.persons);
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

		this.selectPerson = function(person) {
			this.selectedPerson = person;
		};

		this.deleteSelectedPerson = function() {
			var name = this.selectedPerson.name;
			var newPersons = [];
			angular.forEach(this.persons, function(p, index) {
				if (p.name !== name)
					newPersons.push(p);
			});
			this.persons = newPersons;
			this.savePersons();
			this.selectedPerson = null;
		};

		// init
		this.loadPersons();
		this.resetPerson();
	}]);

})();

