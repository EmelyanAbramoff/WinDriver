/*
 * https://github.com/brinley/jSignature
 *
 * based on:
 * "jSignature": "2.0.2",
 * "angular": "1.3.11",
 * "jquery": "2.1.3"
 * 
 * include at least these jSignature files: 
 * 'jSignature/src/jSignature.js',
 * 'jSignature/src/plugins/jSignature.CompressorBase30.js'
 *
 */

//<j-signature-directive sig="your.signature.model" bg-color="#00f" color="#ffcc00"></j-signature-directive>

app.directive('jSignatureDirective', function() {
    return {
        restrict: 'E',
        template: '<button ng-click="reset()">reset</button>',
        scope: {
            sig: '=',
            width: '@',
            height: '@',
            color: '@',
            bgColor: '@',
            lineWidth: '@',
            cssclass: '@'
        },
        link: function($scope, $element) {

console.log('jSignatureDirective: link');
console.dir($scope);

/*

width   Defines the width of the canvas. Numerical value without % or px    250
height  Defines the height of the canvas. Numerical value without % or px   150
color   Defines the color of the strokes on the canvas. Accepts any color hex values.   #000
background-color    Defines the background color of the canvas. Accepts any color hex values.   #fff
lineWidth   Defines the thickness of the lines. Accepts any positive numerical value    1
cssclass    Defines a custom class for the canvas.  None

*/

            $scope.initialized = false;

            var options = {
                width:                  $scope.width,
                height:                 $scope.height,
                color:                  $scope.color,
                'background-color':     $scope.bgColor,
                lineWidth:              $scope.lineWidth,
                cssclass:               $scope.cssclass
            };

            $scope.initialize = function () {
                if(!$scope.initialized) {
                    $element.jSignature(options);
                    $scope.initialized = true;
                }
            };

            $scope.reset = function() {
console.log('reset!!!');
                $element.jSignature('reset');
            };

            $scope.getData = function() {
console.log('getData!!!');
            var datapair = $element.jSignature('getData', 'base30');
console.dir(datapair);
            };

            $scope.setData = function(sig) {
console.log('setData!!!');
                var datapair = ['image/jsignature;base30'];
                datapair[1] = 'base30,2A0Z101100001110000000_4XZ6954655685877555655_3I10000000000000000Z1_4RZ487868658576656664_2B469754_3w10000Z1_4A001011000000000000_4NZ856566755597676675_4D65_q00_4F654_1E201_4B76_4KZ10_5K00000000000Z100000001_4PZ79678786555467565554_5L34334_4OZ21221_6N0001001000000000000_4PZ6958888755776556655_6P43332_4OZ32323_8CZ322121010000000Y1132342111012001000100Z11234_1K24444554556657554332Z134555445656656554432Y1_aF0Z1000000100000000000Y12231322222212212222322221000010000Z101000000_i559657657575558555564Z536455335435Y336443434335Z68789556a6984656655_cOZ42120000Y212323422110000Z11232_1N25545556554442Z43554555754433_dK00000100000000000Z11112Y4543433Z3545_4GZ565557897a555586764454Y22121232210_ew0000000001101110111_g6767677675687645444_eR0100000000000001355_i8895559a78855665200_gHZ345522200Y1233355211_3uZ3100Y334555322210Z344_gJ0001011001000000001001_a6674666565765655564554_iM223223224211123122213332323242222222222Z658669654374555_3yZ53546644734443553334Y3643453564337444435000000001201000_jD323333_3H545632_ku445533_3J244643_kT78aa8_3I36565';
                
                if (sig) {
                    datapair[1] = sig;
                }
console.log(datapair);
                $element.jSignature('setData', 'data:' + datapair.join(','));
            };


            $scope.initialize();
            $scope.setData();


            $scope.$watch('sig', function (sig) {
                if(sig) {
console.log('watch if ' + sig);
                    $scope.setData(sig);

                    return;
                }
console.log('watch else');

            });


        }
    };
});