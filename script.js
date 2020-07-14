
var myApp = angular
.module("myModule",[])
.controller ("myController",function($scope)
{
  var countries = [
      {
          name : "INDIA" ,
          cities : [
            {name : "Delhi"} ,
            {name : "Bangalore"} ,
            {name : "Chennai"} 
            
          ]
      },
        {
          name : "USA" ,
          cities : [
            {name : "Los Angeles"} ,
            {name : "Chicago"} ,
            {name : "Houston"} 
            
          ]
      },
        {
          name : "UK" ,
          cities : [
            {name : "London"} ,
            {name : "Birmingham"} ,
            {name : "Manchester"} 
            
          ]
      }
  ];
   $scope.countries = countries;
   });
