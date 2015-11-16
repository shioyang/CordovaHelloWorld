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
			var modalInstance = $uibModal.open({
				templateUrl: 'deleteModalContent.html',
				controller: 'DeleteConfirmationDialogCtrl'
			});
			var t = this;
			modalInstance.result.then(function() {
				t.deleteSelectedPerson();
			});
		};

		// init
		this.loadPersons();
		this.resetPerson();
	}]);

	app.controller('DeleteConfirmationDialogCtrl', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
		$scope.ok = function() {
			$uibModalInstance.close();
		};

		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		};
	}]);

})();

