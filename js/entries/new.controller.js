angular
.module('wdinstagram')
.controller('EntriesNewController',[
  '$state',
  'EntriesFactory',
  EntriesNewControllerFunction
])



function EntriesNewControllerFunction($state, EntriesFactory){
  this.entry = new EntriesFactory()
  this.create = function () {
    this.entry.$save(() => {
      $state.go('entriesIndex')
    })
  }
}
