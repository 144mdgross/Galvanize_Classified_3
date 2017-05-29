(function() {
  'use strict'

angular
  .module('app')
  .component('newPost', {
    controller: controller,
    templateUrl: `/templates/new-post.template.html`
  })

  function controller($http, $state, $stateParams) {
    const vm = this

    vm.$onInit = onInit
    vm.newItem = newItem

    function onInit() {
      
    }

    function newItem(post) {
      $http.post('/classifieds', post)
        .then(listing => {
          $state.go('classifieds')
        })
    }
  }

})()
