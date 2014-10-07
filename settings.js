/**
 * Created by shraddha on 26/6/14.
 */
// jqxChart initialization  code goes here.
var sampleData = [
  { Day:'Monday', Keith:30, Erica:15, George: 25},
  { Day:'Tuesday', Keith:25, Erica:25, George: 30},
  { Day:'Wednesday', Keith:30, Erica:20, George: 25},
  { Day:'Thursday', Keith:35, Erica:25, George: 45},
  { Day:'Friday', Keith:20, Erica:20, George: 25},
  { Day:'Saturday', Keith:30, Erica:20, George: 30},
  { Day:'Sunday', Keith:60, Erica:45, George: 90}
];


// prepare jqxChart settings
// prepare jqxChart settings
var settings = {
    title: 'Fitness & exercise weekly scorecard',
    description: 'Time spent in vigorous exercise',
    padding: { left: 5, top: 5, right: 5, bottom: 5 },
    titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
    source: sampleData,
    categoryAxis:
    {
      dataField: 'Day',
      showGridLines: false
    },
    colorScheme: 'scheme01',
    seriesGroups:
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
      ]
    };
