'use strict';
moduleAngular
  .factory('modelo', ['$rootScope', '$document', function($rootScope, $document) {

    let datos = [{
      'id': 1,
      'name': 'España',
      'Comidas': ['Tortilla de patatas', 'El Gazpacho', 'Paella', 'Cocido'],
      'Provincias': ['Madrid', 'Barcelona', 'Bilbao', 'Valencia']

    }, {
      'id': 2,
      'name': 'Francia',
      'Comidas': ['La reclette', 'Le gratin dauphinois', 'La retatoulle', 'Moules frites'],
      'Provincias': ['Paris', 'Lille', 'Marsella', 'Toulouse']

    }, {
      'id': 3,
      'name': 'Alemania',
      'Comidas': ['Brötchen', 'Knödel o Klöße', 'Eisbein', 'Kartoffelbrei'],
      'Provincias': ['Berlin', 'Hamburgo', 'Bremen', 'Bayern']

    }, {
      'id': 4,
      'name': 'Inglaterra',
      'Comidas': ['Toad In The Hole', 'Jacket Potato', 'Fish and Chips', 'Cumberland Sausage'],
      'Provincias': ['Manchester', 'Londres', 'Birmingham', 'Cardiff']

    }, {
      'id': 5,
      'name': 'EEUU',
      'Comidas': ['Hot Dog', 'Cheeseburger', 'Buffalo Wings', 'Meatloaf'],
      'Provincias': ['Boston', 'Los Angeles', 'New York', 'Colorado']

    }];
    return {
      'paises': datos
    }
  }])
