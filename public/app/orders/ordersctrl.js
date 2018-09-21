app.controller('orderctrl', function ($scope, $http, myService) {
    $scope.date = ' ';
    $scope.query = ' ';

    $scope.serviceOrder = myService.getOrder();

    if ($scope.serviceOrder.serviceValue == "True") {
        $scope.query = $scope.serviceOrder.variety;
        $scope.myDate = $scope.serviceOrder.saledate;
    }
    $scope.serviceOrder.serviceValue = "False";

    $scope.pickUpFunc = function (key, value) {
        $http.post('/pickupstatus', {
            'id': value
        })
    }
    
    $scope.send = function () {
        var newDate = new Date($scope.myDate);
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
        $scope.saledate = newDate;
        $http.post('/orders', {
                'date': $scope.myDate
            })
            .then(function (response) {
                $scope.orders = response.data;
                $scope.sortField = 'userid';
                $scope.reverse = true;
            })
    }

    $scope.deleteFunc = function (value, key) {
        $http.post('/deleteOrder', {
            'id': value
        })
        for (key in $scope.orders) {
            if ($scope.orders[key]['id'] == value) {
                $scope.orders.splice(key, 1);
            }
        }
    }

    $scope.addFunc = function () {
        $http.post('/addOrder', {
                'boxnum': $scope.boxnum,
                'saledate': $scope.saledate,
                'variety': $scope.variety,
                'style': $scope.style,
                'size': $scope.size,
                'qty': $scope.qty,
                'pounds': $scope.pounds
            })
            .then(function (response) {
                $scope.orders.push({
                    'id': response.data.id,
                    'boxnum': $scope.boxnum,
                    'userid': $scope.userid,
                    'empnum': response.data.empnum,
                    'fname': response.data.fname,
                    'lname': response.data.lname,
                    'saledate': $scope.saledate,
                    'variety': $scope.variety,
                    'style': $scope.style,
                    'size': $scope.size,
                    'qty': $scope.qty,
                    'pounds': $scope.pounds
                });
                //Clearing form values
                $scope.id = '';
                $scope.boxnum = '';
                $scope.variety = '';
                $scope.style = '';
                $scope.size = '';
                $scope.qty = '';
                $scope.pounds = '';
            });
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
                //console.log('Its third friday of the month!!!!!!');
                thirdFriday = newDate;
                //console.log('Here is the date for it: ' + thirdFriday);
            }
            var fridayCounter = fridayCounter + 1;
        }
        dayOfMonth = dayOfMonth + 1;
    }
    $scope.myDate = thirdFriday;

    //format date
    var newDate = new Date(thirdFriday);
    var day = newDate.getDate();
    var month = newDate.getMonth() + 1;
    var year = newDate.getFullYear();
    if (day < 10) {
        day = '0' + day
    }
    if (month < 10) {
        month = '0' + month
    }
    thirdFriday = month + '/' + day + '/' + year;
    $scope.saledate = thirdFriday;
});