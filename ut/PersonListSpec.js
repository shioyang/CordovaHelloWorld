describe('PersonList', function() {
	var $rootScope;
	var $controller;
	beforeEach(module('personListApp'));
	beforeEach(inject(function(_$rootScope_, _$controller_) {
		$rootScope = _$rootScope_;
		$controller = _$controller_;
	}));

	function PersonFactoryMock() {
		return {
			loadPersons: function() {
				return [
					{
						name: "aaa AAA",
						role: "aaa",
						place: "aaa",
						country: "aaa",
						memo: "aaa is aaa."
					},
					{
						name: "bbb BBB",
						role: "bbb",
						place: "bbb",
						country: "bbb",
						memo: "bbb is bbb."
					},
					{
						name: "ccc CCC",
						role: "ccc",
						place: "ccc",
						country: "ccc",
						memo: "ccc is ccc."
					}
				];
			},

			savePersons: function(persons) {
			}
		};
	};

	it('should load persons.', function() {
		var personList = $controller('PersonList', { PersonFactory: PersonFactoryMock() });
		personList.loadPersons();
		expect( personList.persons[0].name ).toEqual("aaa AAA");
	});

	it('should add person.', function() {
		var personList = $controller('PersonList', { PersonFactory: PersonFactoryMock() });
		personList.person = {
			name: "first last",
			role: "role",
			place: "place",
			country: "country",
			memo: "memo memo"
		};
		personList.addPerson();
		expect( personList.persons[personList.persons.length - 1].name ).toEqual("first last");
	});

	it('should save persons.', function() {
		var personList = $controller('PersonList', { PersonFactory: PersonFactoryMock() });
		personList.savePersons();
	});

	it('should reset person.', function() {
		var personList = $controller('PersonList', { PersonFactory: PersonFactoryMock() });
		personList.person = {
			name: "first last",
			role: "role",
			place: "place",
			country: "country",
			memo: "memo memo"
		};
		personList.resetPerson();
		expect( personList.person.name ).toEqual("");
	});

	it('should select person.', function() {
		var personList = $controller('PersonList', { PersonFactory: PersonFactoryMock() });
		personList.loadPersons();
		personList.selectPerson(personList.persons[0]);
		expect( personList.selectedPerson.name ).toEqual("aaa AAA");
	});

	it('should delete selected person.', function() {
		var personList = $controller('PersonList', { PersonFactory: PersonFactoryMock() });
		personList.loadPersons();
		personList.selectPerson(personList.persons[0]);
		personList.deleteSelectedPerson();
		expect( personList.persons[0].name ).toEqual("bbb BBB");
	});

});

