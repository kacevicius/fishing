
// get colors array from the string
function getChartColorsArray(chartId) {
    if (document.getElementById(chartId) !== null) {
        var colors = document.getElementById(chartId).getAttribute("data-colors");
        if (colors) {
            colors = JSON.parse(colors);
            return colors.map(function (value) {
                var newValue = value.replace(" ", "");
                if (newValue.indexOf(",") === -1) {
                    var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
                    if (color) return color;
                    else return newValue;;
                } else {
                    var val = value.split(',');
                    if (val.length == 2) {
                        var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
                        rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
                        return rgbaColor;
                    } else {
                        return newValue;
                    }
                }
            });
        }
    }
}

// Sales Figures-100% Stacked Column Chart

var chartColumnStacked100Colors = getChartColorsArray("sales_figures");
if (chartColumnStacked100Colors) {
    var options = {
        series: [{
            name: 'New users',
            data: [44, 55, 41, 67, 22, 43, 21, 49, 30, 18, 46, 78, 34, 52],
        }, {
            name: 'Unique users',
            data: [13, 23, 20, 8, 13, 27, 33, 12, 10, 18, 22, 5, 10, 14]
        }],
        dataLabels: {
            enabled: false
        },
        chart: {
            type: 'bar',
            height: 400,
            stacked: true,
            stackType: '100%',
            toolbar: {
                show: false,
            },
            borderRadius: 30,
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            }
        },
        stroke: {
            width: 3,
            colors: ['#fff']
        },

        plotOptions: {
            bar: {
                borderRadius: 6,
                columnWidth: '20%'
            },

        },
        responsive: [{
            breakpoint: 850,
            options: {
                chart: {
                    height: 300,
                },
                plotOptions: {
                    bar: {
                        columnWidth: '30%'
                    }
                }
            }
        },
        {
            breakpoint: 620,
            options: {
                series: [
                    {
                        data: [44, 55, 41, 67, 22, 43, 21, 49, 30],
                    },
                    {
                        data: [13, 23, 20, 8, 13, 27, 33, 12, 10]
                    }
                ],
                plotOptions: {
                    bar: {
                        columnWidth: '40%'
                    }
                }
            }
        },
        {
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        },
        {
            breakpoint: 350,
            options: {
                series: [
                    {
                        data: [44, 55, 41, 67, 22, 43, 21],
                    },
                    {
                        data: [13, 23, 20, 8, 13, 27, 33]
                    }
                ],
                plotOptions: {
                    bar: {
                        columnWidth: '50%'
                    }
                }
            }
        }],
        xaxis: {
            categories: ['Jan', 'Feb', 'March', 'April', 'May', 'June',
                'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ],
        },
        fill: {
            opacity: 1
        },
        legend: {
            position: 'top',
            offsetX: 100,
            offsetY: 0
        },
        colors: chartColumnStacked100Colors,
    };

    var chart = new ApexCharts(document.querySelector("#sales_figures"), options);
    chart.render();
}

// Multi-Radial Bar
var chartRadialbarMultipleColors = getChartColorsArray("support_requests");
if (chartRadialbarMultipleColors) {
    var options = {
        series: [55, 67, 83],
        chart: {
            height: 202,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
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
        // labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        colors: chartRadialbarMultipleColors
    };

    var chart = new ApexCharts(document.querySelector("#support_requests"), options);
    chart.render();
}

// Products - Poly Radar Charts
var chartRadarPolyradarColors = getChartColorsArray("products");
if (chartRadarPolyradarColors) {
    var options = {
        series: [{
            name: 'Series 1',
            data: [48, 100, 40, 68, 56, 80, 92],
        }],
        chart: {
            height: 400,
            type: 'radar',
            toolbar: {
                show: false
            },
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            radar: {
                size: 140,
                polygons: {
                    strokeColor: '#e8e8e8',
                    fill: {
                        colors: ['#f8f8f8', '#fff']
                    }
                }
            }
        },
        colors: chartRadarPolyradarColors,
        markers: {
            size: 7,
            colors: ['#fff'],
            strokeColors: ['#38c66c', '#74788d', '#fe5b5b', '#4e7adf', '#41c3a9', '#ffd166', '#343a40'],
            strokeWidth: 5,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val
                }
            }
        },
        xaxis: {
            categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        },
        yaxis: {
            tickAmount: 7,
            labels: {
                formatter: function (val, i) {
                    if (i % 2 === 0) {
                        return val
                    } else {
                        return ''
                    }
                }
            }
        },
        responsive:[{
            breakpoint: 420,
            options: {
                chart: {
                    height: '300',
                },
                plotOptions: {
                    radar: {
                        size: 110,
                    }
                },
            }
        }]
    };

    var chart = new ApexCharts(document.querySelector("#products"), options);
    chart.render();
}

//global_sale Scatter - Images Charts
var chartGlobalSalesColors = getChartColorsArray("global_sales");
if (chartGlobalSalesColors) {
    var options = {
        series: [{
            name: 'User A',
            data: [
                [16.4, 5.4],
                [21.7, 4],
                [25.4, 3],
                [19, 2],
                [10.9, 1],
                [13.6, 3.2],
                [10.9, 7],
                [10.9, 8.2],
                [16.4, 4],
                [13.6, 4.3],
                [13.6, 12],
                [29.9, 3],
                [10.9, 5.2],
                [16.4, 6.5],
                [10.9, 8],
                [24.5, 7.1],
                [10.9, 7],
                [8.1, 4.7],
            ]
        }, {
            name: 'User B',
            data: [
                [6.4, 5.4],
                [11.7, 4],
                [15.4, 3],
                [9, 2],
                [10.9, 11],
                [20.9, 7],
                [12.9, 8.2],
                [6.4, 14],
                [11.6, 12]
            ]
        }],
        chart: {
            height: 350,
            type: 'scatter',
            animations: {
                enabled: false,
            },
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false
            }
        },
        colors: chartGlobalSalesColors,
        xaxis: {
            tickAmount: 10,
            min: 0,
            max: 40
        },
        yaxis: {
            tickAmount: 7
        },
        markers: {
            size: 20
        },
        fill: {
            type: 'image',
            opacity: 1,
            image: {
                src: ['build/images/users/avatar-4.png', 'build/images/users/avatar-7.png'],
                width: 40,
                height: 40
            }
        },
        legend: {
            show: false
        }
    };

    var chart = new ApexCharts(document.querySelector("#global_sales"), options);
    chart.render();
}

// coin1sparkline
var chartcoin1SparklineColors = getChartColorsArray("coin1_sparkline_charts");
if (chartcoin1SparklineColors) {
    var options = {
        series: [{
            data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
        }],
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            curve: 'smooth'
        },
        // fill: {
        //     opacity: 0,
        // },
        yaxis: {
            min: 0
        },
        colors: chartcoin1SparklineColors,
        tooltip: {
            enabled: false
        }
    };

    var chart = new ApexCharts(document.querySelector("#coin1_sparkline_charts"), options);
    chart.render();
}

// coin2sparkline
var chartcoin2SparklineColors = getChartColorsArray("coin2_sparkline_charts");
if (chartcoin2SparklineColors) {
    var options = {
        series: [{
            data: [35, 41, 35, 27, 10, 53, 61, 27, 54, 43, 19, 46, 47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51]
        }],
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            curve: 'smooth'
        },
        // fill: {
        //     opacity: 0,
        // },
        yaxis: {
            min: 0
        },
        colors: chartcoin2SparklineColors,
        tooltip: {
            enabled: false
        }
    };

    var chart = new ApexCharts(document.querySelector("#coin2_sparkline_charts"), options);
    chart.render();
}

// coin3sparkline
var chartcoin3SparklineColors = getChartColorsArray("coin3_sparkline_charts");
if (chartcoin3SparklineColors) {
    var options = {
        series: [{
            data: [13, 50, 35, 27, 10, 50, 38, 27, 56, 24, 65, 31, 37, 39, 62, 51, 54, 43, 19, 46, 47, 45, 54, 38]
        }],
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            curve: 'smooth'
        },
        // fill: {
        //     opacity: 0,
        // },
        yaxis: {
            min: 0
        },
        colors: chartcoin3SparklineColors,
        tooltip: {
            enabled: false
        }
    };

    var chart = new ApexCharts(document.querySelector("#coin3_sparkline_charts"), options);
    chart.render();
}

// coin4sparkline
var chartcoin4SparklineColors = getChartColorsArray("coin4_sparkline_charts");
if (chartcoin4SparklineColors) {
    var options = {
        series: [{
            data: [19, 46, 47, 56, 24, 65, 31, 37, 39, 62, 13, 50, 35, 27, 10, 50, 38, 27, 51, 54, 54, 38, 43, 45]
        }],
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            curve: 'smooth'
        },
        // fill: {
        //     opacity: 0,
        // },
        yaxis: {
            min: 0
        },
        colors: chartcoin4SparklineColors,
        tooltip: {
            enabled: false
        }
    };

    var chart = new ApexCharts(document.querySelector("#coin4_sparkline_charts"), options);
    chart.render();
}

// coin5sparkline
var chartcoin5SparklineColors = getChartColorsArray("coin5_sparkline_charts");
if (chartcoin5SparklineColors) {
    var options = {
        series: [{
            data: [19, 46, 47, 56, 24, 65, 31, 37, 39, 62, 13, 50, 35, 27, 10, 50, 38, 27, 51, 54, 54, 38, 43, 45]
        }],
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            curve: 'smooth'
        },
        // fill: {
        //     opacity: 0,
        // },
        yaxis: {
            min: 0
        },
        colors: chartcoin5SparklineColors,
        tooltip: {
            enabled: false
        }
    };

    var chart = new ApexCharts(document.querySelector("#coin5_sparkline_charts"), options);
    chart.render();
}

// coin6sparkline
var chartcoin6SparklineColors = getChartColorsArray("coin6_sparkline_charts");
if (chartcoin6SparklineColors) {
    var options = {
        series: [{
            data: [13, 50, 35, 27, 10, 50, 38, 27, 56, 24, 65, 31, 37, 39, 62, 51, 54, 43, 19, 46, 47, 45, 54, 38]
        }],
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            curve: 'smooth'
        },
        // fill: {
        //     opacity: 0,
        // },
        yaxis: {
            min: 0
        },
        colors: chartcoin6SparklineColors,
        tooltip: {
            enabled: false
        }
    };

    var chart = new ApexCharts(document.querySelector("#coin6_sparkline_charts"), options);
    chart.render();
}

// coin7sparkline
var chartcoin7SparklineColors = getChartColorsArray("coin7_sparkline_charts");
if (chartcoin7SparklineColors) {
    var options = {
        series: [{
            data: [35, 41, 35, 27, 10, 53, 61, 27, 54, 43, 19, 46, 47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51]
        }],
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            curve: 'smooth'
        },
        // fill: {
        //     opacity: 0,
        // },
        yaxis: {
            min: 0
        },
        colors: chartcoin7SparklineColors,
        tooltip: {
            enabled: false
        }
    };

    var chart = new ApexCharts(document.querySelector("#coin7_sparkline_charts"), options);
    chart.render();
}

// coin8sparkline
var chartcoin8SparklineColors = getChartColorsArray("coin8_sparkline_charts");
if (chartcoin8SparklineColors) {
    var options = {
        series: [{
            data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
        }],
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            curve: 'smooth'
        },
        // fill: {
        //     opacity: 0,
        // },
        yaxis: {
            min: 0
        },
        colors: chartcoin8SparklineColors,
        tooltip: {
            enabled: false
        }
    };

    var chart = new ApexCharts(document.querySelector("#coin8_sparkline_charts"), options);
    chart.render();
}

// dumbbell_chart

var chartColumnDumbellColors = getChartColorsArray("user_traffic");
if (chartColumnDumbellColors) {
    var options = {
        series: [
            {
                data: [
                    {
                        x: '4am',
                        y: [2800, 4500]
                    },
                    {
                        x: '5am',
                        y: [3200, 4100]
                    },
                    {
                        x: '6am',
                        y: [2950, 7800]
                    },
                    {
                        x: '7am',
                        y: [3000, 4600]
                    },
                    {
                        x: '8am',
                        y: [3500, 4100]
                    },
                    {
                        x: '9am',
                        y: [4500, 6500]
                    },
                    {
                        x: '10am',
                        y: [4100, 5600]
                    }
                ]
            }
        ],
        chart: {
            height: 400,
            type: 'rangeBar',
            zoom: {
                enabled: false
            }
        },
        plotOptions: {
            bar: {
                isDumbbell: true,
                columnWidth: 3,
                dumbbellColors: [chartColumnDumbellColors]
            }
        },
        legend: {
            show: false
        },
        fill: {
            type: 'gradient',
            gradient: {
                type: 'vertical',
                gradientToColors: [chartColumnDumbellColors[1]],
                inverseColors: true,
                stops: [0, 100]
            }
        },
        grid: {
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        xaxis: {
            tickPlacement: 'on'
        }
    };

    var chart = new ApexCharts(document.querySelector("#user_traffic"), options);
    chart.render();
}

// Stacked Bar Charts
var chartStackedBarColors = getChartColorsArray("total_cov");
if (chartStackedBarColors) {
    var options = {
        series: [{
            name: 'Marine Sprite',
            data: [37, 22, 43, 21]
        }, {
            name: 'Striking Calf',
            data: [52, 13, 43, 32]
        }, {
            name: 'Tank Picture',
            data: [9, 15, 11, 20]
        }, {
            name: 'Bucket Slope',
            data: [8, 6, 9, 10]
        }],
        dataLabels: {
            enabled: false
        },
        chart: {
            type: 'bar',
            height: 180,
            stacked: true,
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '40%',
                borderRadius: 4
            },
        },
        stroke: {
            width: 2,
            colors: ['#fff']
        },
        xaxis: {
            categories: [2020, 2021, 2022, 2023],
            labels: {
                formatter: function (val) {
                    return val + "K"
                }
            }
        },
        yaxis: {
            title: {
                text: undefined
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "K"
                }
            }
        },
        fill: {
            opacity: 1
        },
        legend: {
            show: false,
        },
        colors: chartStackedBarColors
    };

    var chart = new ApexCharts(document.querySelector("#total_cov"), options);
    chart.render();
}

// Bubble Charts Generate Data
function generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([x, y, z]);
        baseval += 86400000;
        i++;
    }
    return series;
}

// 3D Bubble
var chartBubbleColors = getChartColorsArray("sales_dynamics");
if (chartBubbleColors) {
    var options = {
        series: [{
            name: 'Latest',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'New trends',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Men',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Women',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        }
        ],
        chart: {
            height: 285,
            type: 'bubble',
            toolbar: {
                show: false,
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
        },
        xaxis: {
            tickAmount: 12,
            type: 'datetime',
            labels: {
                rotate: 0,
            }
        },
        yaxis: {
            max: 70
        },
        theme: {
            palette: 'palette2'
        },
        colors: chartBubbleColors
    };

    var chart = new ApexCharts(document.querySelector("#sales_dynamics"), options);
    chart.render();
}

// Multiple Series - Heatmap
function generateHeatmapData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
}

var data = [{
    name: '2000',
    data: generateHeatmapData(7, {
        min: 0,
        max: 90
    })
},
{
    name: '1600',
    data: generateHeatmapData(7, {
        min: 0,
        max: 90
    })
},
{
    name: '1200',
    data: generateHeatmapData(7, {
        min: 0,
        max: 90
    })
},
{
    name: '800',
    data: generateHeatmapData(7, {
        min: 0,
        max: 90
    })
},
{
    name: '400',
    data: generateHeatmapData(7, {
        min: 0,
        max: 90
    })
},
{
    name: '200',
    data: generateHeatmapData(7, {
        min: 0,
        max: 90
    })
},
{
    name: '100',
    data: generateHeatmapData(7, {
        min: 0,
        max: 90
    })
}
]

data.reverse()

var colors = ["#f7cc53", "#f1734f", "#663f59", "#6a6e94", "#4e88b4", "#00a7c6", "#18d8d8", '#a9d794', '#46aF78', '#a93f55', '#8c5e58', '#2176ff', '#5fd0f3', '#74788d', '#51d28c']

colors.reverse()

var chartHeatMapMultipleColors = getChartColorsArray("multiple_heatmap");
if (chartHeatMapMultipleColors) {
    var options = {
        series: data,
        chart: {
            height: 242,
            type: 'heatmap',
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: [chartHeatMapMultipleColors[0], chartHeatMapMultipleColors[1], chartHeatMapMultipleColors[2], chartHeatMapMultipleColors[3], chartHeatMapMultipleColors[4], chartHeatMapMultipleColors[5], chartHeatMapMultipleColors[6], chartHeatMapMultipleColors[7]],
        xaxis: {
            type: 'category',
            categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        },
        grid: {
            padding: {
                right: 20
            }
        },
        stroke: {
            colors: [chartHeatMapMultipleColors[7]]
        }
    };
    var chart = new ApexCharts(document.querySelector("#multiple_heatmap"), options);
    chart.render();
}

// Multi Series Timeline
var chartTimelineMultiSeriesColors = getChartColorsArray("efficiency");
if (chartTimelineMultiSeriesColors) {
    var options = {
        series: [{
            name: 'Pettern',
            data: [{
                x: '$100',
                y: [
                    new Date('2023-03-05').getTime(),
                    new Date('2023-03-08').getTime()
                ]
            },
            {
                x: '$50',
                y: [
                    new Date('2023-03-08').getTime(),
                    new Date('2023-03-11').getTime()
                ]
            },
            {
                x: '$10',
                y: [
                    new Date('2023-03-11').getTime(),
                    new Date('2023-03-16').getTime()
                ]
            }
            ]
        },
        {
            name: 'Products',
            data: [{
                x: '$100',
                y: [
                    new Date('2023-03-02').getTime(),
                    new Date('2023-03-05').getTime()
                ]
            },
            {
                x: '$50',
                y: [
                    new Date('2023-03-06').getTime(),
                    new Date('2023-03-09').getTime()
                ]
            },
            {
                x: '$10',
                y: [
                    new Date('2023-03-10').getTime(),
                    new Date('2023-03-19').getTime()
                ]
            }
            ]
        }
        ],
        chart: {
            height: 300,
            type: 'rangeBar',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                var a = moment(val[0])
                var b = moment(val[1])
                var diff = b.diff(a, 'days')
                return diff + (diff > 1 ? ' days' : ' day')
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [50, 0, 100, 100]
            }
        },
        xaxis: {
            type: 'datetime'
        },
        legend: {
            show: false
        },
        colors: chartTimelineMultiSeriesColors
    };

    var chart = new ApexCharts(document.querySelector("#efficiency"), options);
    chart.render();
}

// Column with Negative Values
var chartNagetiveValuesColors = getChartColorsArray("monthly_states");
if (chartNagetiveValuesColors) {
    var options = {
        series: [{
            name: 'Cash Flow',
            data: [1.45, 5.42, -0.42, -12.6, -18.1, -11.1, -6.09, 3.88, 13.07,
                5.8, 8.1, -13.57, 15.75, 17.1, -27.03, -47.2, -43.3, -18.6, -
                48.6, -41.1, -39.6, -29.4
            ]
        }],
        chart: {
            type: 'bar',
            height: 300,
            toolbar: {
                show: false,
            }

        },
        plotOptions: {
            bar: {
                colors: {
                    ranges: [{
                        from: -100,
                        to: -46,
                        color: chartNagetiveValuesColors[1]
                    }, {
                        from: -45,
                        to: 0,
                        color: chartNagetiveValuesColors[2]
                    }]
                },
                columnWidth: '100%',

            }
        },
        dataLabels: {
            enabled: false,
        },
        colors: chartNagetiveValuesColors[0],
        yaxis: {
            labels: {
                formatter: function (y) {
                    return y.toFixed(0) + "k";
                }
            }
        },
        xaxis: {
            type: 'datetime',
            categories: [
                '2021-07-01', '2021-08-01', '2021-09-01', '2021-10-01', '2021-11-01',
                '2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01',
                '2022-07-01', '2022-08-01', '2022-09-01', '2022-10-01', '2022-11-01',
                '2023-01-01', '2023-02-01', '2023-03-01', '2023-04-01', '2023-05-01',
                '2023-07-01', '2023-08-01', '2023-09-01'
            ],
            labels: {
                rotate: -90
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#monthly_states"), options);
    chart.render();
}
