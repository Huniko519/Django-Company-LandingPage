// history
var lineArea1 = new Chartist.Line('.history', {
  labels: ['1', '2', '3', '4', '5'],
  series: [{
    name: 'highest',
    data: [3.8, 4, 2.8, 4, 3.2, 5]
  }, {
    name: 'lowest',
    data: [3.8, 4.5, 3.5, 5, 4.6, 7]
  }]
}, {
  plugins: [
    Chartist.plugins.tooltip({
      appendToBody: false,
      className: "ct-tooltip"
    })
  ],
  fullWidth: true,
  chartPadding: {
    right: 0,
    left: -17,
    bottom: 0
  },
  axisY: {
        low: 0,
  },
  axisX: {
      showLabel: false,
      offset: 0
  },
  series: {
    'highest': {
      lineSmooth: Chartist.Interpolation.simple({
        divisor: 2
      }),
      showPoint: false
    },
    'lowest': {
      lineSmooth: Chartist.Interpolation.cardinal({
        divisor: 2
      }),
      showArea: true
    },
  }
}).on("draw", function(e) {
      if ("point" === e.type) {
          var t = new Chartist.Svg("circle", {
              cx: e.x,
              cy: e.y,
              "ct:value": e.y,
              r: 5,
              class: 5 === e.value.y ? "ct-point circle-point" : "ct-point circle-trans"
          });
          e.element.replace(t)
      }
});

lineArea1.on('created', function (data) {
    var defs = data.svg.elem('defs');

    defs.elem('linearGradient', {
        id: 'gradient',
        x1: 1,
        y1: 1,
        x2: 1,
        y2: 0
    }).elem('stop', {
        offset: 0,
        'stop-color': '#ffffff'
    }).parent().elem('stop', {
        offset: 1,
        'stop-color': '#f73164'
    });
});

// project status
var options = {
    chart: {
        height: 320,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: '20px',
                },
                value: {
                    fontSize: '16px',
                },
                total: {
                    show: true,
                    label: 'Total',
                    formatter: function (w) {
                        return 249
                    }
                }
            }
        }
    },
    series: [45, 70, 60],
    labels: ['Running', 'Complete', 'Pending'],
    colors:['#f73164', '#51bb25', '#fdd92a']


}

var chart = new ApexCharts(
    document.querySelector("#project-status"),
    options
);

chart.render();

// website development
var options1 = {
            chart: {
                height: 380,
                type: 'rangeBar',
                toolbar: {
                    show: false
                },
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
            dataLabels: {
              enabled: true
            },
            colors:['#fdd92a', '#f73164'],
            series: [{
                name: "John",
                data: [{
                  x: 'Design',
                  y: [10, 40]
                }, {
                  x: 'Code',
                  y: [30, 35]
                }, {
                  x: 'Test',
                  y: [20, 40]
                }, {
                  x: 'Deployment',
                  y: [20, 25]
                }]
            }, {
                name: "Alena",
                data: [{
                  x: 'Design',
                  y: [35, 45]
                }, {
                  x: 'Code',
                  y: [10, 25]
                }, {
                  x: 'Test',
                  y: [30, 50]
                }, {
                  x: 'Deployment',
                  y: [15, 25]
                }]
            }],
            
        }

       var chart1 = new ApexCharts(
            document.querySelector("#websites"),
            options1
        );
        
        chart1.render();

// vector map
! function(maps) {
    "use strict";
    var b = function() {};
    b.prototype.init = function() {
        maps("#asia").vectorMap({
            map: "asia_mill",
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: "#f73164"
                } 
            },
            markers: [
                { latLng: [39.91, 116.36], name: 'china', style: {r: 8, fill:'white'}},
                { latLng: [24.774, 46.73], name: 'saudi Arbia', style: {r: 8, fill:'white'}},
                { latLng: [43.238949, 76.889709], name: 'Kyrgyzstan', style: {r: 8, fill:'white'}},
                { latLng: [20.59, 78.96], name: 'India', style: {r: 8, fill:'white'}},
                { latLng: [35.86, 104.19], name: 'Changzhou', style: {r: 8, fill:'white'}},
                { latLng: [23.026, 113.13], name: 'Dongguan', style: {r: 8, fill:'white'}},
                { latLng: [34.68, 112.45], name: 'Henan', style: {r: 8, fill:'white'}},
                { latLng: [33.22, 43.67], name: 'Iraq', style: {r: 8, fill:'white'}}
            ],
            series: {
          regions: [{
            scale: ['#fdd5df', '#fd0846'],
            normalizeFunction: 'polynomial',
            values: {
              "AF": 16.63,
              "AL": 11.58,
              "DZ": 158.97,
              "AO": 85.81,
              "AG": 1.1,
              "AR": 351.02,
              "AM": 8.83,
              "AU": 1219.72,
              "AT": 366.26,
              "AZ": 52.17,
              "BS": 7.54,
              "BH": 21.73,
              "BD": 105.4,
              "BB": 3.96,
              "BY": 52.89,
              "BE": 461.33,
              "BZ": 1.43,
              "BJ": 6.49,
              "BT": 1.4,
              "BO": 19.18,
              "BA": 16.2,
              "BW": 12.5,
              "BR": 2023.53,
              "BN": 11.96,
              "BG": 44.84,
              "BF": 8.67,
              "BI": 1.47,
              "KH": 11.36,
              "CM": 21.88,
              "CA": 1563.66,
              "CV": 1.57,
              "CF": 2.11,
              "TD": 7.59,
              "CL": 199.18,
              "CN": 5745.13,
              "CO": 283.11,
              "KM": 0.56,
              "CD": 12.6,
              "CG": 11.88,
              "CR": 35.02,
              "CI": 22.38,
              "HR": 59.92,
              "CY": 22.75,
              "CZ": 195.23,
              "DK": 304.56,
              "DJ": 1.14,
              "DM": 0.38,
              "DO": 50.87,
              "EC": 61.49,
              "EG": 216.83,
              "SV": 21.8,
              "GQ": 14.55,
              "ER": 2.25,
              "EE": 19.22,
              "ET": 30.94,
              "FJ": 3.15,
              "FI": 231.98,
              "FR": 2555.44,
              "GA": 12.56,
              "GM": 1.04,
              "GE": 11.23,
              "DE": 3305.9,
              "GH": 18.06,
              "GR": 305.01,
              "GD": 0.65,
              "GT": 40.77,
              "GN": 4.34,
              "GW": 0.83,
              "GY": 2.2,
              "HT": 6.5,
              "HN": 15.34,
              "HK": 226.49,
              "HU": 132.28,
              "IS": 12.77,
              "IN": 1430.02,
              "IR": 337.9,
              "IE": 204.14,
              "IL": 201.25,
              "IT": 2036.69,
              "JM": 13.74,
              "JP": 5390.9,
              "KZ": 129.76,
              "KE": 32.42,
              "KI": 0.15,
              "KR": 986.26,
              "KW": 117.32,
              "KG": 4.44,
              "LA": 6.34,
              "LV": 23.39,
              "LB": 39.15,
              "LS": 1.8,
              "LR": 0.98,
              "LY": 77.91,
              "LT": 35.73,
              "LU": 52.43,
              "MK": 9.58,
              "MG": 8.33,
              "MW": 5.04,
              "MY": 218.95,
              "MV": 1.43,
              "ML": 9.08,
              "MT": 7.8,
              "MR": 3.49,
              "MU": 9.43,
              "MX": 1004.04,
              "MD": 5.36,
              "MN": 5.81,
              "ME": 3.88,
              "MA": 91.7,
              "MZ": 10.21,
              "MM": 35.65,
              "NA": 11.45,
              "NP": 15.11,
              "NL": 770.31,
              "NZ": 138,
              "NI": 6.38,
              "NE": 5.6,
              "NG": 206.66,
              "NO": 413.51,
              "PK": 174.79,
              "PA": 27.2,
              "PG": 8.81,
              "PY": 17.17,
              "PE": 153.55,
              "PH": 189.06,
              "PL": 438.88,
              "PT": 223.7,
              "QA": 126.52,
              "RO": 158.39,
              "RU": 1476.91,
              "RW": 5.69,
              "WS": 0.55,
              "ST": 0.19,
              "SN": 12.66,
              "RS": 38.92,
              "SC": 0.92,
              "SL": 1.9,
              "SG": 217.38,
              "SK": 86.26,
              "SI": 46.44,
              "SB": 0.67,
              "ZA": 354.41,
              "ES": 1374.78,
              "LK": 48.24,
              "KN": 0.56,
              "LC": 1,
              "VC": 0.58,
              "SD": 65.93,
              "SR": 3.3,
              "SZ": 3.17,
              "SE": 444.59,
              "CH": 522.44,
              "TW": 426.98,
              "TJ": 5.58,
              "TZ": 22.43,
              "TH": 312.61,
              "TL": 0.62,
              "TG": 3.07,
              "TO": 0.3,
              "TT": 21.2,
              "TN": 43.86,
              "TM": 0,
              "UG": 17.12,
              "UA": 136.56,
              "GB": 2258.57,
              "US": 14624.18,
              "UY": 40.71,
              "UZ": 37.72,
              "VU": 0.72,
              "VE": 285.21,
              "VN": 101.99,
              "ZM": 15.69,
              "ZW": 5.57
            }
          }]
        }
        })
    }, maps.VectorMap = new b, maps.VectorMap.Constructor = b
}(window.jQuery),
    function(maps) {
        "use strict";
        maps.VectorMap.init()
    }(window.jQuery);