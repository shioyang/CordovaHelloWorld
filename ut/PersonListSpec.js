describe('PersonList', function() {
	var $rootScope;
	var $controller;
	beforeEach(module('personListApp'));
	beforeEach(inject(function(_$rootScope_, _$controller_) {
		$rootScope = _$rootScope_;
		$controller = _$controller_;
	}));

	function PersonsFactoryMock() {
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
			}
		};
	};

	it('should load persons.', function() {
		var personList = $controller('PersonList', { PersonsFactory: PersonsFactoryMock() });
		personList.loadPersons();
		expect( personList.persons[0].name ).toEqual("aaa AAA");
	});

});

