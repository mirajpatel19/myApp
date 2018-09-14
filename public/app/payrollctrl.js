app.controller('payrollctrl', function ($scope, $http) {
    $scope.date = ' ';
    $scope.send = function () {
        console.log("inside send function for payroll.html");
        var posting = $http({
            method: 'POST',
            url: '/payRoll',
            data: {
                'date': $scope.myDate,
            }
        }).then(function (response) {
            $scope.orders = response.data;
            $scope.sortField = 'userid';
            $scope.reverse = true;
        })
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
});