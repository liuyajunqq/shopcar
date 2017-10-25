app.controller('shopController', ['$scope', 'ajaxServer', function ($scope, ajaxServer) {
    ajaxServer.ajax('get', 'http://localhost:8090/data').then(function (data) {
        $scope.users = data;
        getTotal();
    });
    $scope.alls = false;
    $scope.all = function () {
        if (!$scope.alls) {
            $scope.alls = true;
            for (var i = 0; i < $scope.users.length; i++) {
                for (j = 0; j < $scope.users[i].con.length; j++) {
                    $scope.users[i].con[j].states = true
                }
            }
        } else {
            $scope.alls = false;
            for (var i = 0; i < $scope.users.length; i++) {
                for (j = 0; j < $scope.users[i].con.length; j++) {
                    $scope.users[i].con[j].states = false
                }
            }
        }
        getTotal()
    };
    $scope.dan = function (use) {
        var count = 0;
        var num = 0;
        use.states = !use.states;
        for (var i = 0; i < $scope.users.length; i++) {
            for (var j = 0; j < $scope.users[i].con.length; j++) {
                if ($scope.users[i].con[j].states) {
                    num++;
                }
            }
            count += $scope.users[i].con.length
        }
        if (count == num) {
            $scope.alls = true;
        } else {
            $scope.alls = false;
        }
        getTotal()
    };
    $scope.handle = function (hand, use) {
        if (hand === '-') {
            use.val--;
            if (use.val < 1) {
                use.val = 1
            }
        } else {
            use.val++;
        }
        getTotal()
    };
    function getTotal(){
        $scope.sum = 0;
        $scope.numbers = 0;
        for(var i=0;i<$scope.users.length;i++){
            for(var j=0;j<$scope.users[i].con.length;j++){
                if($scope.users[i].con[j].states){
                    $scope.numbers += $scope.users[i].con[j].val;
                    $scope.sum += $scope.users[i].con[j].three*$scope.users[i].con[j].val;
                }
            }
        }
    };
}]);