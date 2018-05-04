describe('My Controller', function(){
	var scope;
	beforeEach(module('app'));
	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope.$new();
		ctrl = $controller('myController', {'$scope': scope});
	}));

	describe('message', function(){
		it('should have message property defined', function(){
			expect(scope.message).toBeDefined();
		});
		it('should have message property to say hello', function(){
			expect(scope.message).toBe('Hello angular!');
		})
	})
})