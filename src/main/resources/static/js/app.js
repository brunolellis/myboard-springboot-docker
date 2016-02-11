'use strict';
var myboardApp = angular.module('myboard', []);

myboardApp.factory('PostService', ['$http', '$q', function($http, $q) {

  var API_URL = 'http://localhost:8080/api';

  return {

    fetchAll: function() {
      return $http.get('/posts')
        .then(
          function(response) {
            return response.data;
          },
          function(errResponse) {
            console.error('Error while fetching posts');
            return $q.reject(errResponse);
          }
        );
    }
  };

}]);

myboardApp.controller('PostController', ['$scope', 'PostService', function($scope, PostService) {
  var self = this;

  self.posts = [];

  self.fetchAll = function() {
    PostService.fetchAll()
      .then(
        function(d) {
          self.posts = d;
        },
        function(errResponse) {
          console.error('Error while fetching Currencies');
        }
      );
  };

  self.fetchAll();
}]);
