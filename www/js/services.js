angular.module('services', [])

.factory('PersonFactory', function() {
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
});

