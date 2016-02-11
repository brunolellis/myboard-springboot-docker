'use strict';
var myboardApp = angular.module('myboardApp', []);

myboardApp.factory('PostService', ['$http', '$q', function($http, $q) {

  var API_URL = 'http://localhost:8080/api';

  return {

    fetchAll: function() {
      return $http.get(API_URL + '/posts')
        .then(
          function(response) {
            return response.data[0].content;
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

  self.novoPost = function() {
    console.log('oioioioioi');
  };

  self.fetchAll();
}]);
