app.directive('shop', function () {
    return {
        restrict: 'EA',
        templateUrl: './App/View/demo.html',
        link: function(scope,ele,attr){
            var myscroll = new IScroll('.wrapper',{})
        }
    }
});