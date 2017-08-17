angular
.module('wdinstagram')
.config([
  '$stateProvider',
  '$urlRouterProvider',
  RouterFunction
])


function RouterFunction($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('entriesIndex', {
    url: '/entries',
    templateUrl: 'js/entries/index.html',
    controller: 'EntriesIndexController',
    controllerAs: 'vm'
  })
  .state('entriesNew',{
    url: '/entries/new',
    templateUrl: 'js/entries/new.html',
    controller: 'EntriesNewController',
    controllerAs: 'vm'
  })
  .state('entriesEdit',{
    url: '/entries/:id/edit',
    templateUrl: 'js/entries/edit.html',
    controller: 'EntriesEditController',
    controllerAs: 'vm'
  })
  .state('entriesShow',{
    url: '/entries/:id',
    templateUrl: 'js/entries/show.html',
    controller: 'EntriesShowController',
    controllerAs: 'vm'
  })
  $urlRouterProvider.otherwise('/songs')
}
