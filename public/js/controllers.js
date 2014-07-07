'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('AppCtrl', function ($scope, $http) {

    $http({
        method: 'GET',
        url: '/api/searchThankful'
    }).
    success(function (data, status, headers, config) {
        $scope.data = data.data;
    }).
    error(function (data, status, headers, config) {
        $scope.error = 'Failed to connecto to Twitter API';
    });
    $scope.bg = 'one';
}).
controller('homePage', function ($scope, hotkeys) {
    $scope.currentTweet = 0;
    $scope.nextTweet = function () {
        if ($scope.currentTweet < $scope.data.statuses.length - 1) {
            $scope.currentTweet += 1;
        } else {
            $scope.currentTweet = 0;
            //console.log($scope.currentTweet);
        }
    };
    $scope.previousTweet = function () {
        if ($scope.currentTweet > 0) {
            $scope.currentTweet -= 1;
        } else {
            $scope.currentTweet = $scope.data.statuses.length - 1;
        }
        //console.log($scope.currentTweet);
    };
    $scope.showTweet = function (tweetarrayPosition) {
        if ($scope.currentTweet === tweetarrayPosition) {
            return true;
        } else {
            return false;
        }
    };
    $scope.randomBg = function () {
        var bg = ['one', 'two', 'three', 'four'];
        var rand = Math.floor((Math.random() * 3) + 1);
        //console.log(bg[rand]);
        $scope.bg = bg[rand];
    };
    hotkeys.add('left', 'Previous Tweet', function (event) {
        event.preventDefault();
        $scope.previousTweet();
        $scope.randomBg();
    });
    hotkeys.add('right', 'Next Tweet', function (event) {
        event.preventDefault();
        $scope.nextTweet();
        $scope.randomBg();
    });

}).
controller('loginPage', function ($scope, $routeParams) {

}).
controller('livePage', function ($scope, socket) {

    $scope.feed = [];
    socket.on('tweet', function (tweet) {
        $scope.feed.unshift(tweet);
        //console.log($scope.feed);
        $scope.$digest();
    });

}).
controller('userPage', function ($scope, $routeParams) {
    $scope.showUser = function (tweetarrayPosition) {
        var screen_name;
        screen_name = $routeParams.screen_name;
        if ($scope.data.statuses[tweetarrayPosition].user.screen_name == screen_name) {
            return true;
        } else {
            return false;
        }
    }
});