/* global angular */
angular.module('wdinstagram')
.factory('EntriesFactory',[
  '$resource',
  EntryService
])


function EntryService($resource){
  return $resource('http://localhost:3000/entries/:id', {}, {
    update: {
      method: 'PUT'
    }
  })
}
