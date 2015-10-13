angular.module('doughnutApp', []).controller('DoughnutController', DoughnutController)

DoughnutController.$inject = ['$http'];

function DoughnutController($http){
  this.title = "RUBBER DINGHY RAPIDS"
  var self = this;
  self.all = [];

  function getDoughnuts() {
    $http
      .get('http://api.doughnuts.ga/doughnuts')
      .then(function(response, err) {
        if (err) console.log(err);
        self.all = response.data;
      })
  }
  getDoughnuts()

  self.addDoughnut;
  self.newDoughnut = {};

  function addDoughnut() {
    $http
      .post('http://api.doughnuts.ga/doughnuts')
      .then(function(response, err) {
        if (err) console.log(err);
        console.log(response);
      })
    self.newDoughnut = {};
  }



}