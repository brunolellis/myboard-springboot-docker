'use strict';
var myboardApp = angular.module('myboardApp', []);

myboardApp.factory('PostService', [ '$http', '$q', function($http, $q) {

	var API_URL = 'http://localhost:8080/api';

	return {
		fetchAll: function() {
			return $http.get(API_URL + '/posts').then(function(response) {
				return response.data[0].content;
			}, function(e) {
				return $q.reject(e);
			});
		},
		
		criar: function(post) {
			return $http.post(API_URL + '/posts', post).then(function() {
				return;
			}, function(e) {
				return $q.reject(e);
			});
		},
		
		remover: function(idPost) {
			return $http.delete(API_URL + '/post/' + idPost).then(function() {
				return;
			}, function(e) {
				return $q.reject(e);
			});
		}
	
	};

} ]);

myboardApp.controller('PostController', [ '$scope', 'PostService',
	function($scope, PostService) {
		var self = this;

		self.posts = [];
		self.post = {};

		var fetchAll = function() {
			PostService.fetchAll().then(function(d) {
				self.posts = d;
			}, function(e) {
				erro('<b>Ops!</b> Algo errado aconteceu ao carregar os posts! ;(');
			});
		};

		self.novo = function() {
			self.post = {};
		};
		
		self.criar = function(post) {
			PostService.criar(post).then(function() {
				sucesso('<b>Yay!</b> O seu post foi criado com sucesso! :D');
			}, function(e) {
				erro('<b>Ops!</b> Algo errado aconteceu! ;(');
			});
		};
		
		self.remover = function(post) {
			PostService.remover(post.id).then(function() {
				sucesso('<b>Yay!</b> O seu post foi criado com sucesso! :D');
			}, function(e) {
				erro('<b>Ops!</b> Algo errado aconteceu! ;(');
			});
		};

		var sucesso = function(msg) {
			exibirAlerta("alert-success", msg);
		};
		
		var erro = function(msg) {
			exibirAlerta("alert-danger", msg);
		};
		
		var exibirAlerta = function(classe, msg) {
			$("#alerta").html(msg).addClass(classe).removeClass("hide").hide().slideDown();
			$("#alerta").delay(3000).slideUp(1000);
		};
		
		fetchAll();
	}
]);
