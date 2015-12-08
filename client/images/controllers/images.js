/**
 * Created by jeff8_000 on 2015/12/7.
 */
angular.module('lunarfest').controller('ImagesCtrl', function($scope, $meteor, $rootScope, $state){
    $scope.images = $meteor.collectionFS(Images, false, Images).subscribe('images');
    $scope.addImages = function (files) {
        if (files.length > 0) {
            $scope.images.save(files[0]);
        }
    };

});