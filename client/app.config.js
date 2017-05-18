(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'classifieds',
        url: '/',
        component: 'classifieds'
      })
      .state({
        name: 'edit',
        url: 'edit/:id',
        component: 'singlePost'
      })
      .state({
        name: 'newPost',
        url: 'posts/new',
        component: 'newPost'
      })
  }
}())
