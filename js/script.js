var chart;
$(document).ready(function() {
   chart = new Highcharts.Chart({
      chart: {
         renderTo: 'languagesBarChart', //provide location of single chart
         defaultSeriesType: 'bar', //provide chart type
         showAxes: false,
         plotShadow: true,
         height: 500,
         width: 650,
         backgroundColor: null
      },
      title: {
         text: 'Top Languages'
      },
      xAxis: {
         title: {
            text: null
         },
         labels: {
            enabled: false
         }
      },
      yAxis: {
         title: {
            text: null
         }
      },
      tooltip: {
         formatter: function() {
            return ''+
                this.series.name +': '+ this.y +'%';
         }
      },
      credits: {
         enabled: false
      },
      legend: {
         enabled: true
      },
      plotOptions: {
         bar: {
            dataLabels: {
               enabled: false
            },
            marker: {
               enabled: false
            }
         }
      },

      series: [
         {
            name: 'Objective-C',
            data: [2]
         }, {
            name: 'C++',
            data: [4]
         },{
            name: 'Perl',
            data: [7]
         }, {
            name: 'C',
            data: [7]
         }, {
            name: 'PHP',
            data: [7]
         }, {
            name: 'Java',
            data: [7]
         }, {
            name: 'Shell',
            data: [8]
         },  {
            name: 'Python',
            data: [9]
         },  {
            name: 'Ruby',
            data: [15]
         }, {
            name: 'JavaScript',
            data: [20]
         }
      ]
   });
});


var chart;
$(document).ready(function() {
   chart = new Highcharts.Chart({
      chart: {
         renderTo: 'pieChart',
         plotBackgroundColor: null,
         plotBorderWidth: null,
         plotShadow: true,
         height: 500,
         width: 500,
         backgroundColor: null
      },
      title: {
         text: 'Top 5 Repos'
      },
      tooltip: {
         formatter: function() {
            return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
         }
      },
      credits: {
         enabled: false
      },
      legend: {
         enabled: true
      },
      plotOptions: {
         pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
               enabled: false
            },
            showInLegend: true
         }
      },
       series: [{
         type: 'pie',
         data: [
            ['HTML5 Boilerplate',    10876],
            ['jQuery',   12238],
            ['Rails',       12620],
            ['Node',    13295],
            {
               name: 'Bootstrap',    
               y: 21058,
               sliced: true,
               selected: true
            }
         ]
      }]
   });
});


var chart;
$(document).ready(function() {
   chart = new Highcharts.Chart({
      chart: {
         renderTo: 'watchedLineChart',
         type: 'line',
         height: 800,
         width: 1000,
         backgroundColor: null
      },
      title: {
         text: 'Watched & Forked'
      },
      subtitle: {
         text: null
      },
      xAxis: {
         categories: ['Bootstrap', 'Node', 'Rails', 'jQuery', 'HTML5 BP', 'Homebrew', 'Spoon-Knife', 'impress.js']
      },
      yAxis: {
         title: {
            text: null
         }
      },
      tooltip: {
         formatter: function() {
            return ''+
               this.series.name +': '+ this.y;
         }
      },
      plotOptions: {
         bar: {
            dataLabels: {
               enabled: true
            }
         }
      },
      credits: {
         enabled: false
      },
      series: [{
         name: 'Watched',
         data: [21097, 13297, 12623, 12246, 10878, 7604, 6917, 6597]
      }, {
         name: 'Forked',
         data: [3918, 1521, 2769, 1406, 1593, 3528, 5825, 959]
      }]
   });
});



var chart;
$(document).ready(function() {
   chart = new Highcharts.Chart({
      chart: {
         renderTo: 'growthBarChart',
         type: 'bar',
         height: 500,
         width: 1000,
         backgroundColor: null
      },
      title: {
         text: 'GitHub Yearly Growth'
      },
      subtitle: {
         text: 'Source: Wired.com'
      },
      xAxis: {
         categories: ['2012', '2011', '2010', '2009', '2008'],
         title: {
            text: null
         }
      },
      yAxis: {
         min: 0,
         title: {
            text: null
         }
      },
      tooltip: {
         formatter: function() {
            return ''+
               this.series.name +': '+ this.y;
         }
      },
      plotOptions: {
         bar: {
            dataLabels: {
               enabled: true
            }
         }
      },
      legend: {
         layout: 'vertical',
         align: 'right',
         verticalAlign: 'top',
         x: -10,
         y: 400,
         floating: true,
         borderWidth: 1,
         backgroundColor: '#FFFFFF',
         shadow: true
      },
      credits: {
         enabled: false
      },
         series: [{
         name: 'Users',
         data: [1341558, 561940, 184119, 48916, 83]
      }, {
         name: 'Repositories',
         data: [2105586, 709108, 248466, 49500, 134]
      }]
   });
});