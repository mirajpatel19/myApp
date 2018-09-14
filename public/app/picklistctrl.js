app.controller('picklistctrl', function ($scope, $http, myService) {
    $scope.date = ' ';
    $scope.send = function () {
        console.log("inside send function");
        console.log($scope.myDate);
        var posting = $http({
            method: 'POST',
            url: '/picklist',
            data: {
                'date': $scope.myDate
            }
        }).then(function (response) {
            $scope.orders = response.data;
            console.log($scope.orders);
            $scope.sortField = 'userid';
            $scope.reverse = true;
        })
    }

    $scope.getOrder = function (key, value) {
        console.log(key, value);
        console.log('test');
        $scope.fullOrder = value;

        //calling the service, inject myService into the function!
        //$rootScope.test = 7000; 
        myService.fillOrder($scope.fullOrder);
        $scope.test = myService.getOrder();
    };

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
});