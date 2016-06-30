'use strict';

moduleAngular
  .controller('FormCtrl', ['$scope', 'modelo', '$uibModal', '$log', function($scope, modelo, $uibModal) {
    $scope.titulo = "Práctica Najim";
    $scope.color = "#8A7BAF";
    $scope.radio = {
      tipo: 1
    };
    $scope.paises = modelo.paises;
    $scope.seleccion = $scope.paises[0];
    $scope.enviado = false;

    $scope.marcados = [];
    $scope.elegir = function($event, item) {

      if ($event.target.checked) {

        $scope.marcados.push($event.target.name);
        console.log($scope.marcados);
      } else {
        $scope.marcados.splice($event.target.name, 1);
      }
      $scope.marcado = ($scope.marcados.length >= 0) ? true : false;
    }

    $scope.animationsEnabled = true;
    $scope.enviar = function(form) {
      $scope.enviado = true;
      if (form.$invalid || !$scope.marcados.length) {
        return;
      }

      $scope.items = [$scope.color, $scope.email, $scope.tel, $scope.marcados];

      $scope.$broadcast("PintaModal", $scope.items);

    };
  }])
  .controller('ModalDemoCtrl', ['$scope', '$uibModal', function($scope, $uibModal) {

    $scope.$on("PintaModal", function(evt, data) {
      $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: '../../views/modal.html',
        controller: 'ModalInstanceCtrl',
        resolve: {
          items: function() {
            return data;
          }
        }
      });

    });

  }])
  .controller('ModalInstanceCtrl', function($scope, $uibModalInstance, items) {
    $scope.items = items;
  });
