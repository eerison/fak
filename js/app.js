var myApp = angular.module('fakApp', []);

myApp.controller('fakController', ['$scope', function($scope) {
    
    $scope.formLogo = 'https://www.fatadeb.com.br/images/Parceiros/kurios.jpg';
    $scope.formReferente = 'Ao pagamento da faculdade';
    $scope.formListUsers = '[{"name" : "erison silva", "valor" : 130, "valor_extenso" : "centro e trinta reais"}, {"name" : "otaciana", "valor" : 130, "valor_extenso" : "cento e trinta reais"}]';

    $scope.gerarRecibos = function()
    {
    	$scope.listUsers =  angular.fromJson($scope.formListUsers);    	
    }


}]);