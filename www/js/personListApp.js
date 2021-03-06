(function() {
	var app = angular.module('personListApp', ['ui.bootstrap', 'services']);

	app.controller('PersonList', ['PersonFactory', '$uibModal', function(PersonFactory, $uibModal) {
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

		this.openDeleteConfirmationDialog = function() {
			var t = this;
			var modalInstance = $uibModal.open({
				templateUrl: 'deleteModalContent.html',
				controller: 'DeleteConfirmationDialogCtrl',
				resolve: {
					name: function() {
						return t.selectedPerson.name;
					}
				}
			});
			var t = this;
			modalInstance.result.then(function() {
				t.deleteSelectedPerson();
			});
		};

		// Search
		this.searchOptions = [
			"Name", "Role", "Place", "Country", "Memo"
		];
		this.searchOption = "Name";

		// init
		this.loadPersons();
		this.resetPerson();
	}]);

	app.controller('DeleteConfirmationDialogCtrl', ['$scope', '$uibModalInstance', 'name', function($scope, $uibModalInstance, name) {
		$scope.name = name;

		$scope.ok = function() {
			$uibModalInstance.close();
		};

		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		};
	}]);

})();

