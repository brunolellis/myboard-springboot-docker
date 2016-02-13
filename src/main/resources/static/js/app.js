'use strict';
var myboardApp = angular.module('myboardApp', []);

myboardApp.factory('PostService', [ '$http', '$q', function($http, $q) {

	var API_URL = 'http://localhost:8080/api';

	return {
		fetchAll: function() {
			return $http.get(API_URL + '/posts').then(function(response) {
				return response.data;
			}, function(e) {
				return $q.reject(e);
			});
		},
		
		criar: function(post) {
			return $http.post(API_URL + '/posts', post).then(function(response) {
				return response.data;
			}, function(e) {
				return $q.reject(e);
			});
		},
		
		remover: function(idPost) {
			return $http.delete(API_URL + '/posts/' + idPost).then(function() {
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

		self.criar = function(post) {
			PostService.criar(post).then(function(response) {
				sucesso('<b>Yay!</b> O seu post foi criado com sucesso! :D');
				self.posts.unshift(response);
				self.post = {};
				
			}, function(e) {
				erro('<b>Ops!</b> Algo errado aconteceu! ;(');
			});
		};
		
		self.remover = function(post) {
			var p = post;
			PostService.remover(post.id).then(function() {
				sucesso('<b>Yay!</b> O seu post foi removido com sucesso! :D');
				self.posts = self.posts.filter(element => element.id !== p.id);
				
			}, function(e) {
				erro('<b>Ops!</b> Algo errado aconteceu! ;(');
			});
		};

		var sucesso = function(msg) {
			exibirAlerta("alert-success", msg);
		};
		
		var erro = function(msg, delay) {
			exibirAlerta("alert-danger", msg, delay);
		};
		
		var exibirAlerta = function(classe, msg, delay) {
			$("#alerta").html(msg).addClass(classe).removeClass("hide").hide().slideDown();
			
			if (delay === undefined) {
				$("#alerta").delay(3000).slideUp(1000);
			}
		};
		
		var fetchAll = function() {
			PostService.fetchAll().then(function(d) {
				self.posts = d;
			}, function(e) {
				erro('<b>Ops!</b> Algo errado aconteceu ao carregar os posts! ;(', true);
			});
		};
		
		fetchAll();
	}
]);
