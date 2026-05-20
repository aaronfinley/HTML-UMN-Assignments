let app = angular.module('todoList',[])

app.controller('todoController', function($scope){
	$scope.newTodo = ''
	$scope.todos = []
	$scope.filterKeyword = ''
	
	$scope.addTodo = function() {
		if($scope.newTodo.length <= 0){
			alert("Todo must not be empty!")
		}
		else{
			var notempty = false;
			var i;
			for(i = 0;i < $scope.todos.length; i++){
				if($scope.newTodo == $scope.todos[i].name){
					notempty = true
					break
				}
			}
			if(notempty){
				alert("Task already in the list!")
				document.getElementById("form").reset()
			}
			else{
				$scope.todos.push({
					name: $scope.newTodo,
					done: false
				})
				$scope.newTodo = ''
				console.log($scope.todos);
			}
		}
	}		
	$scope.isEmpty = function() {
		if($scope.todos.length > 0){
			return false
		}
		return true
	}
	$scope.changeStatus = function(todo){
		todo.done = !todo.done
	}
	$scope.delete = function(todo){
		$scope.todos.splice($scope.todos.indexOf(todo), 1)
	}
})