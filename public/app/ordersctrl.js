app.controller('orderctrl', function ($scope, $http, myService) {
    $scope.date = ' ';
    $scope.query = ' ';

    $scope.test = myService.getOrder();
    // console.log('variety', $scope.test.variety);
    // console.log('sale date', $scope.test.saledate);

    // console.log('test', $scope.query)
    // //if null it is not going to excsute
    // if ($scope.test.variety) {
    //     console.log('not null')
    //     $scope.query = $scope.test.variety;
    //     $scope.myDate = $scope.test.saledate;
    // }

    $scope.pickUpFunc= function (key, value) {
        console.log('Key:', key, 'Value:', value);
        console.log('one clicked');
        $http.post('/pickupstatus', {
            'id': value
        })
    }

    $scope.send = function () {
        console.log("inside send function with date: ");
        console.log($scope.myDate);
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
        console.log("here is my new date: " + newDate);
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
        console.log('Into deleteFunc to delete data on orders.html with Id, index: ');
        console.log(value, key);
        $http.post('/deleteOrder', {
            'id': value
        })
        for (key in $scope.orders) {
            if ($scope.orders[key]['id'] == value) {
                console.log($scope.orders[key]);
                $scope.orders.splice(key, 1);
            }
        }
    }

    $scope.addFunc = function () {
        console.log('Into addFunc to add data on orders.html: ');
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
                console.log("here is the response on addorder: ");
                console.log(response.data);
                console.log("into response for addFunc: ");
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