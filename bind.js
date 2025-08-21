//Define AngularJS app
var app = angular.module("studentApp",[]);

//Define Controller
app.controller("StudentController",function ($scope) {
    $scope.student ={
        name:"Johan Doe",
        roll:"101",
        course:"Computer Science"

    };
});