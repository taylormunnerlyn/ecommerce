angular.module('app').service('mainService', function($http){


  this.getData = function(){
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function(response){
      console.log(response.data);
      return response.data;
    })
  }

  this.postData = function(product){
    return $http({
      method: 'POST',
      url: '/api/products',
      data: product
    })
  }

  this.deleteData = function(productId){
    return $http({
      method: 'DELETE',
      url: '/api/products/' + productId
    })
  }

  this.editData = function(newObj, productId){
    return $http({
      method: 'PUT',
      url: '/api/products/' + productId,
      data: newObj
    })
  }




})
