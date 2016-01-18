
(function() {
    'use strict';

    angular
        .module('app')
        .controller('IndexCtrl', Index);

    function Index($scope, dataservice, utility, $cordovaToast) {

        dataservice.closeLoader();

        $scope.modspaceNumber = '';

        document.addEventListener("deviceready", function () {
            activate();
        }, false);

        function activate() {
            dataservice.get("/GetGlobalSetting", function(response) {
                try {
                    $scope.ModspaceNumber = response.GlobalList[0].ModspaceNumber;
                    console.log('Response for GetGlobalSetting: ' + response);
                } catch(e) {
                    console.log('Error : ', e);
                    $cordovaToast.showShortBottom(e.message);
                }
            });
        }

        $scope.dialNumber = function(number) {
            console.log(number);
            utility.dialNumber(number);
        }

        $scope.logout = function () {
            dataservice.logout();
        }
    }

})();

