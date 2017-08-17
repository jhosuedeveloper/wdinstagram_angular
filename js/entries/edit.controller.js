
angular
.module('wdinstagram')
.controller('EntriesEditController', [
  '$state',
  'EntriesFactory',
  EntriesEditControllerFunction
])


function EntriesEditControllerFunction($state, EntriesFactory){
  this.entry = EntriesFactory.get({id: $state.params.id})

  this.update = function () {
    this.entry.$update({id: $state.params.id}, (res) => {
      $state.go('entriesShow', { id: res.id })
    })
  }

  this.destroy = function () {
    this.entry.$delete({id: $state.params.id}, () => {
      $state.go('entriesIndex')
    })
  }
}
