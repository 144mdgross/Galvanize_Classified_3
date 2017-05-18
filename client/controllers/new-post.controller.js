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
    vm.newItem = newItem

    function newItem(post) {
      console.log('post', post);
      $http.post('/classifieds', post)
        .then(listing => {
          $state.go('classifieds')
        })
    }
  }

})()
