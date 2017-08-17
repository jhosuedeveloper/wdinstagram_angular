/* global angular */
angular
.module('wdinstagram')
.controller('EntriesShowController',[
  '$stateParams',
  'EntriesFactory',
  EntriesShowControllerFunction
])



function EntriesShowControllerFunction($stateParams, EntriesFactory){
this.entry = EntriesFactory.get({id: $stateParams.id})
}
