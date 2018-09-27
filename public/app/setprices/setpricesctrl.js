app.controller('setpricesctrl', function ($scope, $http) {
    var posting = $http({
        method: 'POST',
        url: '/setPrices'
    }).then(function (response) {
        $scope.orders = response.data;
    });

    $scope.addFunc = function () {
        $http.post('/addPrices', {
            'saledate': $scope.saledate,
            'price': $scope.price
        })
        .then(function (response) {
            var newDate = new Date($scope.saledate);
            var day = newDate.getDate();
            var month = newDate.getMonth() + 1;
            var year = newDate.getFullYear();
            if (day < 10) {
                day = '0' + day
            }
            if (month < 10) {
                month = '0' + month
            }
            var newDate = month + '/' + day + '/' + year;
            $scope.orders.push({
                'saledate': newDate,
                'price': $scope.price,
                'id': response.data[0].id
            });
            //Clearing form values.
            $scope.saledate = '';
            $scope.price = '';
        });
    }

    $scope.deleteFunc = function (key, value) {
        $http.post('/deletePrice', {
            'id': value.id,
            'saledate': value.saledate,
            'price': value.price
        })
        for (key in $scope.orders) {
            if ($scope.orders[key]['id'] == value.id) {
                $scope.orders.splice(key, 1);
            }
        }
    }

    //getting next cheese sale date.
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    var dayOfMonth = firstDay.getDate();
    var fridayCounter = 1;
    var thirdFriday;
    while (dayOfMonth < lastDay.getDate()) {
        var newDate = new Date(date.getFullYear(), date.getMonth(), dayOfMonth);
        if (newDate.getDay() == 5) {
            //console.log(" ");
            // console.log(newDate);
            // console.log('ITS FRIDAY........');
            //console.log(" ");
            if (fridayCounter == 3) {
                thirdFriday = newDate;
            }
            var fridayCounter = fridayCounter + 1;
        }
        dayOfMonth = dayOfMonth + 1;
    }
    $scope.saledate = thirdFriday;
});