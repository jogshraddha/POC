/**
 * Created by shraddha on 26/6/14.
 */

(function(){
  'use strict';
  var demoApp = angular.module('demoApp', ['ngJqxsettings']);

  demoApp.controller('initController', function ($scope) {
    $scope.data = [
      { Day:'Monday', Keith:30, Erica:15, George: 25},
      { Day:'Tuesday', Keith:25, Erica:25, George: 30},
      { Day:'Wednesday', Keith:30, Erica:20, George: 25},
      { Day:'Thursday', Keith:35, Erica:25, George: 45},
      { Day:'Friday', Keith:20, Erica:20, George: 25},
      { Day:'Saturday', Keith:30, Erica:20, George: 30},
      { Day:'Sunday', Keith:60, Erica:45, George: 90}
    ];
    $scope.title = 'Fitness & exercise weekly scorecard';
    $scope.description = 'Time spent in vigorous exercise';
    $scope.enableAxisTextAnimation = true;
    $scope.showLegend = true;
    $scope.padding = { left: 5, top: 5, right: 5, bottom: 5 };
    $scope.titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    $scope.categoryAxis =
    {
      dataField: 'Day',
      showGridLines: false
    };
    $scope.colorScheme = 'scheme01';
    $scope.seriesGroups =
      [
        {
          type: 'column',
          columnsGapPercent: 30,
          seriesGapPercent: 0,
          valueAxis:
          {
            minValue: 0,
            maxValue: 100,
            unitInterval: 10,
            description: 'Time in minutes'
          },
          series: [
            { dataField: 'Keith', displayText: 'Keith'},
            { dataField: 'Erica', displayText: 'Erica'},
            { dataField: 'George', displayText: 'George'}
          ]
        }
      ];
  });
})();