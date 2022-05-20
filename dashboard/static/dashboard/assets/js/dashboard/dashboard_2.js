
// dashbord-2 knob chart

// right-side-small-chart

(function($) {
    "use strict";
    $(".knob1").knob({

        'width':65,
        'height':65,
        'max':100,

        change : function (value) {
            //console.log("change : " + value);
        },
        release : function (value) {
            //console.log(this.$.attr('value'));
            console.log("release : " + value);
        },
        cancel : function () {
            console.log("cancel : ", this);
        },
        format : function (value) {
         return value + '%';
         },
        draw : function () {

            // "tron" case
            if(this.$.data('skin') == 'tron') {

                this.cursorExt = 1;

                var a = this.arc(this.cv)  // Arc
                    , pa                   // Previous arc
                    , r = 1;

                this.g.lineWidth = this.lineWidth;

                if (this.o.displayPrevious) {
                    pa = this.arc(this.v);
                    this.g.beginPath();
                    this.g.strokeStyle = this.pColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                    this.g.stroke();
                }

                this.g.beginPath();
                this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                this.g.stroke();

                this.g.lineWidth = 2;
                this.g.beginPath();
                this.g.strokeStyle = this.o.fgColor;
                this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                this.g.stroke();

                return false;
            }
        }
    });
    // Example of infinite knob, iPod click wheel
    var v, up=0,down=0,i=0
        ,$idir = $("div.idir")
        ,$ival = $("div.ival")
        ,incr = function() { i++; $idir.show().html("+").fadeOut(); $ival.html(i); }
        ,decr = function() { i--; $idir.show().html("-").fadeOut(); $ival.html(i); };
    $("input.infinite").knob(
        {
            min : 0
            , max : 20
            , stopper : false
            , change : function () {
            if(v > this.cv){
                if(up){
                    decr();
                    up=0;
                }else{up=1;down=0;}
            } else {
                if(v < this.cv){
                    if(down){
                        incr();
                        down=0;
                    }else{down=1;up=0;}
                }
            }
            v = this.cv;
        }
        });
})(jQuery);

 
var options = {
          series: [{
          name: 'TEAM A',
          type: 'area',
          data: [44, 48, 38, 47]
        }, {
          name: 'TEAM B',
          type: 'line',
          data: [42, 38, 48, 30]
        }],
          chart: {
          height:470,
          type: 'line',
          toolbar: {
            show:false,
          },

        },
        stroke: {
          curve: 'smooth',
          width: [5, 2],
          dashArray: [0, 8]
          
        },
        fill: {
          type:'solid',
          opacity: [0.35, 1],
        },
        labels: ['2010', '2011','2012','2013'],
        markers: {
          size: 5
        },
        responsive: [
          {
            breakpoint:991,
            options: {
              chart: {
                height:300
              }
            }
          },
          {
            breakpoint:1500,
            options: {
              chart: {
                height:325
              }
            }
          }
        ],
        yaxis: [
          {
             labels: {
                formatter: function (value) {
                  return value + "k";
                },
              },
          },
        ],
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if(typeof y !== "undefined") {
                return  y.toFixed(0) + " points";
              }
              return y;
            }
          }
        },
        legend: {
            show:false,
           },
           colors:[vihoAdminConfig.primary , vihoAdminConfig.secondary]
        };
var chart = new ApexCharts(document.querySelector("#chart-dash-2-line"), options);
chart.render();

//overview section chart in dashboard-2
var options25 = {
      chart:{
        type: "line",
        height: 450,
        foreColor: "#999",
        stacked: true,
        dropShadow: {
          enabled: true,
          enabledSeries: [0],
          top: -2,
          left: 2,
          blur: 5,
          opacity: 0.06
        },
        toolbar: {
            show:false,
          },
      },responsive: [
          {
            breakpoint:1470,
            options:{
              chart:{
                height:440
              }
            }
          },
          {
            breakpoint:1365,
            options:{
              chart:{
                height:300
              }
            }
          },
          {
            breakpoint:991,
            options:{
              chart:{
                height:250
              }
            }
          },
        ],
      colors:[vihoAdminConfig.primary, vihoAdminConfig.secondary],
      stroke:{       
        width:3
      },
      dataLabels: {
        enabled:false
      },
      series: [{
        name: 'Total Views',
        data: generateDayWiseTimeSeries(0, 18)
      }, {
        name: 'Unique Views',
        data: generateDayWiseTimeSeries(1, 18)
      }],
      markers: {
        size: 5,
        strokeColor: "#e3e3e3",
        strokeWidth: 3,
        strokeOpacity: 1,
        fillOpacity: 1,
        hover: {
          size: 6
        }
      },
      xaxis: {
        type: "datetime",
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        labels: {
          offsetX: 14,
          offsetY: -5
        },
        tooltip: {
          enabled: true
        },
        labels: {
            formatter: function (value) {
              return value + "k";
            },
          },
      },
      grid: {
        padding: {
          left: -5,
          right: 5
        }
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy"
        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        show:false
      },
      fill: {
         type: "solid",
        fillOpacity: 0.7
      },
    };
    var chart25 = new ApexCharts(document.querySelector("#timeline-chart"), 
    options25
    );
    chart25.render();

    function generateDayWiseTimeSeries(s, count) {
      var values = [[
        4,3,10,9,29,19,25,9,12,7,19,5,13,9,17,2,7,5
      ], [
        2,3,8,7,22,16,23,7,11,5,12,5,10,4,15,2,6,2
      ]];
      var i = 0;
      var series = [];
      var x = new Date("11 Nov 2012").getTime();
      while (i < count) {
        series.push([x, values[s][i]]);
        x += 86400000;
        i++;
      }
      return series;
    }


//Dashboard-2 Third chart for Yearly Growth


//new charts

          
var options51 = {
  series: [
    {
      name: "Yearly Profit",
      data: [
        {
          x: "2001",
          y: 5500
        },
        {
          x: "2002",
          y: 3800
        },
        {
          x: "2003",
          y: 5500
          
        },
        {
          x: "2004",
          y: 7700
        },
        {
          x: "2005",
          y: 1500
          
        },
        {
          x: "2006",
          y: 1000,
          fillColor: vihoAdminConfig.primary,
        },
        {
          x: "2007",
          y: 5000,
          fillColor: vihoAdminConfig.primary,
        },
        {
          x: "2008",
          y: 6000,
          fillColor: vihoAdminConfig.primary,
        },
        {
          x: "2009",
          y: 7900,
          fillColor: vihoAdminConfig.primary,
        },
        {
          x: "2010",
          y: 4700,
          fillColor: vihoAdminConfig.primary,
        },
        {
          x: "2011",
          y: 4000,
          fillColor: vihoAdminConfig.primary,
        },
        {
          x: "2012",
          y: 5000,
          fillColor: vihoAdminConfig.primary,
        },
        {
          x: "2013",
          y: 7500
        },
        {
          x: "2014",
          y: 3500
        },
        {
          x: "2015",
          y: 4000
        },
        {
          x: "2016",
          y: 6500
        },
        {
          x: "2017",
          y: 4000
        },
        {
          x: "2018",
          y: 5853
        },
        {
          x: "2019",
          y: 6553
        },
        {
          x: "2020",
          y: 5200
        },
        {
          x: "2021",
          y: 6200
        },
        {
          x: "2022",
          y: 880,
          fillColor: vihoAdminConfig.secondary,
        },
        {
          x: "2023",
          y: 1200,
          fillColor: vihoAdminConfig.secondary,
        },
        {
          x: "2024",
          y: 8010,
          fillColor: vihoAdminConfig.secondary,
        },
        {
          x: "2025",
          y: 6053,
          fillColor: vihoAdminConfig.secondary,
        },
        {
          x: "2026",
          y: 4000,
          fillColor: vihoAdminConfig.secondary,
        },
        {
          x: "2027",
          y: 1000,
          fillColor: vihoAdminConfig.secondary,
        },
        {
          x: "2028",
          y: 6200
        },
        {
          x: "2029",
          y: 6200
        },
        {
          x: "2030",
          y: 7500
        },
        {
          x: "2031",
          y: 7000
        },
        {
          x: "2032",
          y: 5000
        },
        {
          x: "2033",
          y: 6000
        },
        {
          x: "2034",
          y: 8000
        },
        {
          x: "2035",
          y: 4000
        },
        {
          x: "2036",
          y: 4500
        },
        {
          x: "2037",
          y: 4800
        },
        {
          x: "2038",
          y: 3000,
          fillColor: vihoAdminConfig.secondary,
        },
        {
          x: "2039",
          y: 4200,
          fillColor: vihoAdminConfig.secondary,
        },
        {
          x: "2040",
          y: 7900,
          fillColor: vihoAdminConfig.secondary,
        },
        {
          x: "2041",
          y: 4000,
          fillColor: vihoAdminConfig.secondary,
        },
        {
          x: "2042",
          y: 5500,
          fillColor: vihoAdminConfig.secondary,
        },
        {
          x: "2043",
          y: 1000
        },
        {
          x: "2044",
          y: 5500
        },
        {
          x: "2045",
          y: 7000
        },
        {
          x: "2046",
          y: 6500
        },
        {
          x: "2047",
          y: 4000
        }
        
      ]
    }
  ],
  chart: {
    height: 350,
    type: "bar",
    toolbar:{
      show:false,
    },
  },
  plotOptions:{
    bar:{
      horizontal:false,
      columnWidth:"70%",
    }
  },
  stroke: {
    show: false,
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: 1
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      show: false
    },
    labels: {
          show: false,
        },
    axisTicks:{
        show:false,
     },
  },
   yaxis: {
    labels: {
      formatter: function (val) {
        return val / 100 + "K";
      },
    }
  },
  responsive: [
    {
      breakpoint:991,
      options: {
        chart: {
          height:250
        }
      }
    }
  ], 
  colors:["#d8e3e5"]
};

var chart51 = new ApexCharts(document.querySelector("#chart-yearly-growth-dash-2"),
 options51
 );
chart51.render();
// column charts in apex charts 

// var options27 = {
  
//   series: [
//     {
//       data: [400, 230, 448, 370, 540, 580, 690, 1100, 1200, 1380,1150,580,330,580,1355,1280,1485,875,356,587,954,325,469,1254,1587,543,370,987,675,345,895,1200,1265,987,1400,852,654,254,155,899,754,254,789,235,456,256,900]
//     }
//   ],
//   chart: {
//     type: "bar",
//     height: 350,
//     toolbar: {
//             show:false,
//           },
//   },
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       distributed: true,
//       startingShape: "rounded",
//       endingShape: "rounded",
//       colors: {
//         backgroundBarColors: ["#eee"],
//         backgroundBarOpacity: 1,
//         backgroundBarRadius: 9
//       }
//     }
//   },
//   dataLabels: {
//     enabled: false
//   },
//   grid: {
//     yaxis: {
//       lines: {
//         show: false
//       },
      
//     }
//   },
//   yaxis: {
//     labels: {
//       formatter: function (val) {
//         return val / 100 + "K";
//       },
//     }
//   },
//   xaxis: {
//     axisBorder: {
//       show: false
//     },
//     categories: [
//       "Spain",
//       "Canada",
//       "United Kingdom",
//       "Netherlands",
//       "Italy",
//       "France",
//       "Japan",
//       "United States",
//       "China",
//       "Germany"
//     ],
//     labels: {
//           show: false,
//         },
//         axisTicks:{
//                show:false,
//              },
            
//   },
//   colors: [
//     "#d8e3e5",
//     "#d8e3e5",
//     "#d8e3e5",
//     "#d8e3e5",
//     "#d8e3e5",
//     "#24695c",
//     "#24695c",
//     "#24695c",
//     "#24695c",
//     "#24695c",
//     "#24695c",
//     "#24695c",
//     "#d8e3e5",
//     "#d8e3e5",
//     "#d8e3e5",
//     "#d8e3e5",
//     "#d8e3e5",
//     "#d8e3e5",
//     "#d8e3e5",
//     "#d8e3e5",
//     "#d8e3e5",
//     "#ba895d",
//     "#ba895d",
//     "#ba895d",
//     "#ba895d",
//     "#ba895d",
//     "#ba895d"
//   ],
  
//   legend: {
//     show: false
//   }
// };


// var chart27 = new ApexCharts(document.querySelector("#chart-unique-2"), 
//   options27
//   );
// chart27.render();

// 
var barOptions = {
  curvature: 1,
  
  animationSteps: 15,

  responsive: true,

  scaleShowVerticalLines: false,

  scaleShowHorizontalLines: false,
  
  scaleShowLabels: false,
   
  // String - Template string for single tooltips
  tooltipTemplate: "<%if (label){%><%=label %>: <%}%><%= value + ' %' %>",
  // String - Template string for multiple tooltips
  multiTooltipTemplate: "<%= value + ' %' %>",
  
  // Array - Array of string names to attach tooltip events
  tooltipEvents: ["mousemove", "touchstart", "touchmove"],

  // String - Tooltip background colour
  tooltipFillColor: "rgba(0,0,0,0.8)",

  // String - Tooltip label font declaration for the scale label
  tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

  // Number - Tooltip label font size in pixels
  tooltipFontSize: 14,

  // String - Tooltip font weight style
  tooltipFontStyle: "normal",

  // String - Tooltip label font colour
  tooltipFontColor: "#fff",

  // String - Tooltip title font declaration for the scale label
  tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

  // Number - Tooltip title font size in pixels
  tooltipTitleFontSize: 14,

  // String - Tooltip title font weight style
  tooltipTitleFontStyle: "bold",

  // String - Tooltip title font colour
  tooltipTitleFontColor: "#fff",

  // Number - pixel width of padding around tooltip text
  tooltipYPadding: 6,

  // Number - pixel width of padding around tooltip text
  tooltipXPadding: 6,

  // Number - Size of the caret on the tooltip
  tooltipCaretSize: 8,

  // Number - Pixel radius of the tooltip border
  tooltipCornerRadius: 6,

  // Number - Pixel offset from point x to tooltip edge
  tooltipXOffset: 10,

  barShowLabels: false,

  // Function - Will fire on animation progression.
  onAnimationProgress: function(){},

  // Function - Will fire on animation completion.
  onAnimationComplete: function(){}
};

Chart.types.Bar.extend({
  name: "BarAlt",
  initialize: function (data) {
      Chart.types.Bar.prototype.initialize.apply(this, arguments);
      
      if (this.options.curvature !== undefined && this.options.curvature <= 1) {
          var rectangleDraw = this.datasets[0].bars[0].draw;
          var self = this;
          var radius = this.datasets[0].bars[0].width * this.options.curvature * 0.2;
          
          // override the rectangle draw with ours
          this.datasets.forEach(function (dataset) {
              dataset.bars.forEach(function (bar) {
                  bar.draw = function () {
                      // draw the original bar a little down (so that our curve brings it to its original position)
                      var y = bar.y;
                      // the min is required so animation does not start from below the axes
                      bar.y = Math.min(bar.y + radius, self.scale.endPoint - 1);
                      // adjust the bar radius depending on how much of a curve we can draw
                      var barRadius = (bar.y - y);
                      rectangleDraw.apply(bar, arguments);
                      
                      // draw a rounded rectangle on top
                      Chart.helpers.drawRoundedRectangle(self.chart.ctx, bar.x - bar.width / 2, bar.y - barRadius + 1, bar.width, bar.height, barRadius);
                      ctx.fill();
                      
                      // restore the y value
                      bar.y = y;
                  }
              })
          })
      }
  }
});

var barData = {
  labels : ["3rd Mar","3rd Apr","3r May","3rd Jun","3rd Jul","3rd Aug","3rd Sep","3rd Nov","3rd dec", "3rd Mar","3rd Apr","3r May","3rd Jun","3rd Jul","3rd Aug","3rd Sep","3rd Nov","3rd dec", "3rd Mar","3rd Apr","3r May","3rd Jun","3rd Jul","3rd Aug","3rd Sep","3rd Nov","3rd dec", "3rd Mar","3rd Apr","3r May","3rd Jun","3rd Jul","3rd Aug","3rd Sep","3rd Nov","3rd dec", "3rd Mar","3rd Apr","3r May","3rd Jun","3rd Jul","3rd Aug","3rd Sep","3rd Nov","3rd dec"],
  datasets: [{
      label: "Third dataset",
      fillColor: "#1faf4b",
      strokeColor: "#1faf4b",
      data: [400, 230, 448, 370, 540, 580, 690, 1100, 1200, 1380,1150,580,330,580,1355,1280,1485,875,356,587,954,325,469,1254,1587,543,370,987,675,345,895,1200,1265,987,1400,852,654,254,155,899,754,254,789,235,456,256,900]
  }],
};

// var ctx = document.getElementById("myChart").getContext("2d");
// var myLine = new Chart(ctx).BarAlt(barData, barOptions);

// document.getElementById("addData").onclick = function addData() {
//        // Update one of the points in the second dataset
//        myLine.addData([Math.random() * 100]);
       
//    Chart.types.Bar.extend({
//   name: "BarAlt",
//   initialize: function (data) {
//       Chart.types.Bar.prototype.initialize.apply(this, arguments);
      

//           var rectangleDraw = this.datasets[0].bars[0].draw;
//           var self = this;
//           var radius = this.datasets[0].bars[0].width * this.options.curvature * 0.2;
          
//           // override the rectangle draw with ours
//           this.datasets.forEach(function (dataset) {
//               dataset.bars.forEach(function (bar) {
//                   bar.draw = function () {
//                       // draw the original bar a little down (so that our curve brings it to its original position)
//                       var y = bar.y;
//                       // the min is required so animation does not start from below the axes
//                       bar.y = Math.min(bar.y + radius, self.scale.endPoint - 1);
//                       // adjust the bar radius depending on how much of a curve we can draw
//                       var barRadius = (bar.y - y);
//                       rectangleDraw.apply(bar, arguments);
                      
//                       // draw a rounded rectangle on top
//                       Chart.helpers.drawRoundedRectangle(self.chart.ctx, bar.x - bar.width / 2, bar.y - barRadius + 1, bar.width, bar.height, barRadius);
//                       ctx.fill();
                      
//                       // restore the y value
//                       bar.y = y;
//                   }
//               })
//           })
//       }
// });

//        // Remove the first point so we dont just add values forever
//        myLine.removeData();
// }



var options3 = {
          series: [{
          name: 'Inflation',
          data: [2.3, 5.1, 3.0, 9.1, 2.0, 4.6, 2.2, 9.3, 5.4, 4.8, 3.5, 5.2,2.3, 5.1, 3.0, 9.1, 2.0, 4.6, 2.2, 9.3, 5.4, 4.8, 3.5, 5.2]
          // data: [4.3, 5.1, 3.0, 8.1, 3.0, 5.6, 3.2]
        }],
          chart: {
          height:90,
          type: 'bar',
          toolbar: {
              show: false
           },
        },
        plotOptions: {
             bar: {
              dataLabels: {
                position: 'top', // top, center, bottom
              },

             columnWidth: '20%',
             startingShape: 'rounded',
             endingShape: 'rounded',
             colors: {
        backgroundBarColors: ["#d8e3e5"],
        backgroundBarOpacity: 1,
        backgroundBarRadius: 9
      },
          }
        },
        dataLabels: {
          enabled: false,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -10,
          style: {
            fontSize: '12px',
            colors: ["#912efc"]
          }
        },
        
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          position: 'bottom',
        
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: vihoAdminConfig.primary,
                colorTo: '#c481ec',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          tooltip: {
            enabled: true,
          },
          labels:{
            show:false
          }

        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            }
          }
        },
         colors: [vihoAdminConfig.secondary],

        };
       var chart3 = new ApexCharts(document.querySelector("#column-chart"),
          options3
      );
      
      chart3.render();