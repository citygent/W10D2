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

  self.addDoughnut = addDoughnut;
  self.newDoughnut = {};

  function addDoughnut() {
    $http
      .post('http://api.doughnuts.ga/doughnuts', self.newDoughnut)
      .then(function(response) {
        console.log(response);
        self.all.push(response.data)
      })
    self.newDoughnut = {};
  }



}