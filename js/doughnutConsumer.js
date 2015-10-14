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
  self.deleteDoughnut = deleteDoughnut;
  self.editDoughnut = editDoughnut;
  self.newDoughnut = {};
  self.editDonut = {}


  function newId(donut){
    current_ids = [];
    (self.all).forEach(function(key) {
      console.log(key)
      current_ids.push(key.id);
    })
    largest_id = current_ids.reduce(function(x,y){
       return (x > y) ? x : y;
    });
    unique_id = parseInt(largest_id) + 1;
    return unique_id
  }

  function addDoughnut() {
    self.newDoughnut.id = newId(self.newDoughnut);
    console.log(self.newDoughnut)
    $http
      .post('http://api.doughnuts.ga/doughnuts', self.newDoughnut)
      .then(function(response) {
        console.log(response);
        self.all.push(response.data)
      })
    self.newDoughnut = {};
  }

  function deleteDoughnut(donutId){
    console.log(donutId)
    $http
      .delete('http://api.doughnuts.ga/doughnuts/'+ donutId)
      .then(function(response) {
        console.log('response from API:')
        console.log(response)
        self.all = self.all.filter(function (donut) { return donut.id !== donutId.id})
      })
  }

  function editDoughnut(donut) {
    console.log('i am edit')
    console.log(donut)
    console.log(self.editDonut)
  }

}