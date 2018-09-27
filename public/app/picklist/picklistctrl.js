app.controller('picklistctrl', function ($scope, $http, myService) {
    $scope.date = ' ';
    $scope.send = function () {
        var posting = $http({
            method: 'POST',
            url: '/picklist',
            data: {
                'date': $scope.myDate
            }
        }).then(function (response) {
            $scope.orders = response.data;
            $scope.sortField = 'userid';
            $scope.reverse = true;
        })
    }

    $scope.getOrder = function (key, value) {
        $scope.fullOrder = value;
        //calling the service, inject myService into the function!
        myService.fillOrder($scope.fullOrder);
    };

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
});