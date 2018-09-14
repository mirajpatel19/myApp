app.controller('setpricesctrl', function ($scope, $http) {
    console.log("inside setPricesCtrl function");
    var posting = $http({
        method: 'POST',
        url: '/setPrices'
    }).then(function (response) {
        $scope.orders = response.data;
    });

    $scope.addFunc = function () {
        console.log("Inside addFunc on setPrices.html");
        $http.post('/addPrices', {
                'saledate': $scope.saledate,
                'price': $scope.price
            })
            .then(function (response) {
                console.log(response);
                console.log(response.data[0].id);
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
        console.log('Into deleteFunc to delete data on setPrices.html');
        $http.post('/deletePrice', {
            'id': value.id,
            'saledate': value.saledate,
            'price': value.price
        })
        for (key in $scope.orders) {
            if ($scope.orders[key]['id'] == value.id) {
                console.log($scope.orders[key]);
                $scope.orders.splice(key, 1);
            }
        }
    }

    //getting next cheese sale date.
    var date = new Date();
    //console.log("todays date: " + date);
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    //console.log('First day of month: ' + firstDay);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    // console.log('Last day of month: ' + lastDay);
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
                //console.log('Its third friday of the month!!!!!!');
                thirdFriday = newDate;
                //console.log('Here is the date for it: ' + thirdFriday);
            }
            var fridayCounter = fridayCounter + 1;
        }
        dayOfMonth = dayOfMonth + 1;
    }
    console.log("3rd friday: " + thirdFriday);
    //var test = new Date(date.getFullYear(), date.getMonth(), 6);
    //document.getElementById("saledate").valueAsDate = thirdFriday;
    $scope.saledate = thirdFriday;
});