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
    // $scope.enviar = function() {
    //
    // }

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
    $scope.borrar = function(form) {
      if (form.$invalid) {
        console.log(form);
        $scope.enviado = false;
      }
    }
    $scope.enviar = function(form) {
//      $scope.enviado = true;
      if (form.$invalid) {
  //      console.log("llegaaaaaaaaaaa");
  console.log(form);
    $scope.invalido = true;










        return;
      }
      // $scope.items = [$scope.color, $scope.email, $scope.tel, $scope.marcados];

      console.log($scope.items)
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'myModalContent.html',
        controller: 'FormCtrl',
        resolve: {
          items: function() {
            return [1, 12, 343, 4234, 54, 454, 5];
          }
        }
      });
      modalInstance.result.then(function(selectedItem) {
        $scope.selected = selectedItem;
      });
    };



  }])

// .controller('ModalDemoCtrl', function($scope, $uibModal, $log) {
//
//
//     $scope.items = ['item1', 'item2', 'item3'];
//
//     $scope.animationsEnabled = true;
//
//     $scope.open = function(size) {
//
//       var modalInstance = $uibModal.open({
//         animation: $scope.animationsEnabled,
//         templateUrl: 'myModalContent.html',
//         controller: 'ModalInstanceCtrl',
//         size: size,
//         resolve: {
//           items: function() {
//             return $scope.items;
//           }
//         }
//       });
//
//       modalInstance.result.then(function(selectedItem) {
//         $scope.selected = selectedItem;
//       }, function() {
//         $log.info('Modal dismissed at: ' + new Date());
//       });
//     };
//
//     $scope.toggleAnimation = function() {
//       $scope.animationsEnabled = !$scope.animationsEnabled;
//     };
//
//   })
//   .controller('ModalInstanceCtrl', function($scope, $uibModalInstance, items) {
//
//     $scope.items = items;
//     $scope.selected = {
//       item: $scope.items[0]
//     };
//
//     $scope.ok = function() {
//       $uibModalInstance.close($scope.selected.item);
//     };
//
//     $scope.cancel = function() {
//       $uibModalInstance.dismiss('cancel');
//     };
//   });
