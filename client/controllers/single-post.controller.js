(function() {
  'use strict'

  angular
    .module('app')
    .component('singlePost', {
      controller: controller,
      templateUrl: `/templates/single-post.template.html`
    })

    function controller($http, $state, $stateParams) {
      const vm = this

      vm.$onInit = onInit
      vm.update = update
      vm.del = del

      function onInit() {
        $http.get(`/classifieds/${$stateParams.id}`)
          .then(post => {
            vm.post = post.data
          })
      }

      function update(edited, id){
        $http.patch(`/classifieds/${id}`, edited)
          .then(updated => {
            delete vm.edit
            $state.go('classifieds')
          })
      }

      function del(id) {
        $http.delete(`/classifieds/${id}`)
          .then(go => {
            $state.go('classifieds')
          })
      }
    }
})()
