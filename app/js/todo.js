var app = angular.module('todo',[]);

app.controller('TodoCtrl',['$scope' , function ($scope) {
    $scope.todos = [
        {
            text : 'Learn AngularJS',
            done : false
        },
        {
            text : 'Build an App',
            done : false
        }
    ];

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function (todo) {
            return !todo.done;
        });
    };

    $scope.add = function (info) {
        console.log("add"+info);
    }

    $scope.addTodo = function () {
        $scope.todos.push({text:$scope.formTodoText, done:false});
        $scope.formTodoText = "";
    };
}]);