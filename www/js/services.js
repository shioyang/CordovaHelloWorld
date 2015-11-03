angular.module('services', ['ngStorage'])

.factory('PersonFactory', ['$localStorage', function($localStorage) {
	return {
		loadPersons: function() {
			return $localStorage.$default({
				persons: []
			}).persons;
		},

		savePersons: function(persons) {
			$localStorage.persons = persons || [];
		}
	};
}]);

