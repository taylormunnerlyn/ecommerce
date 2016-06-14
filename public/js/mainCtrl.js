angular.module('app').controller('mainCtrl', function($scope, mainService){

  mainService.getData().then(function(response){
    $scope.data = response;
  })

  $scope.productPush = function(obj){
    mainService.postData(obj).then(function(response){
      alert('Product Successfully Posted');
    })
  }

  $scope.productDelete = function(productId){
    mainService.deleteData(productId).then(function(response){
      alert('Product Successfully Deleted');
    })
  }

  $scope.productEdit = function(newObj, productId){
    mainService.editData(newObj, productId).then(function(response){
      alert('Product Successfully Changed');
    })
  }

})
