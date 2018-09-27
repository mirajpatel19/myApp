app.controller('homebetterctrl', function ($scope) {
    $scope.size1 = '0';
    $scope.qtys1 = '0';
    $scope.size2 = '0';
    $scope.qtys2 = '0';

    $scope.reset = function () {
        $scope.firstname = "";
        $scope.lastname = "";
        $scope.employeenumber = "";
        $scope.saledate = "";
        $scope.typeOfEmpm = "";
        $scope.email = "";

        $scope.variety1 = {}
        $scope.variety2 = {};
        $scope.variety3 = {};
        $scope.variety4 = {};
        $scope.variety5 = {};
        $scope.variety6 = {};
        $scope.variety7 = {};
        $scope.variety8 = {};
        $scope.variety9 = {};
        $scope.variety10 = {};
        $scope.variety11 = {};
        $scope.variety12 = {};
        $scope.variety13 = {};
        $scope.variety14 = {};
        $scope.variety15 = {};
        $scope.variety16 = {};
    };

    $scope.getSaleDate = function () {
        var date = new Date();
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        var dayOfMonth = firstDay.getDate();
        var fridayCounter = 1;
        var thirdFriday;

        while (dayOfMonth < lastDay.getDate()) {
            var newDate = new Date(date.getFullYear(), date.getMonth(), dayOfMonth);
            if (newDate.getDay() == 5) {
                if (fridayCounter == 3) {
                    thirdFriday = newDate;
                }
                var fridayCounter = fridayCounter + 1;
            }
            dayOfMonth = dayOfMonth + 1;
        }
        var test = new Date(date.getFullYear(), date.getMonth(), 6);
        $scope.saledate = thirdFriday;
    }

    $scope.varietys = [{
            'Group': 'Jacks',
            'Variety': 'Marble Jack',
            'Req': 'MUST'
        },
        {
            'Group': 'Jacks',
            'Variety': 'Monterey Jack',
            'Req': 'MUST'
        },
        {
            'Group': 'Jacks',
            'Variety': 'Pepper Jack',
            'Req': 'MUST'
        },
        {
            'Group': 'Cheddar',
            'Variety': 'Marble Cheddar',
            'Req': 'MUST'
        },
        {
            'Group': 'Cheddar',
            'Variety': 'Medium Cheddar',
            'Req': 'MUST'
        },
        {
            'Group': 'Cheddar',
            'Variety': 'Mild Cheddar',
            'Req': 'MUST'
        },
        {
            'Group': 'Cheddar',
            'Variety': 'Sharp Cheddar',
            'Req': 'MUST'
        },
        {
            'Group': 'Mozz',
            'Variety': 'Part Skim Mozz',
            'Req': 'MUST'
        },
        {
            'Group': 'Mozz',
            'Variety': 'Whole Milk Mozz',
            'Req': 'MUST'
        },
        {
            'Group': 'Mozz',
            'Variety': 'Mozz',
            'Req': 'MUST'
        },
        {
            'Group': 'Mozz',
            'Variety': 'String',
            'Req': 'MUST'
        },
        {
            'Group': 'Other Flavors',
            'Variety': 'Cream Cheese',
            'Req': 'MUST'
        },
        {
            'Group': 'Other Flavors',
            'Variety': 'Muenster',
            'Req': 'MUST'
        },
        {
            'Group': 'Other Flavors',
            'Variety': 'Provolone',
            'Req': 'MUST'
        },
        {
            'Group': 'Other Flavors',
            'Variety': 'Swiss',
            'Req': 'MUST'
        },
        {
            'Group': 'Other Flavors',
            'Variety': 'Variety Pack',
            'Req': 'MUST'
        },
    ]
    console.log($scope.size1)
    $scope.styles = [{
        'Style': 'Shared',
        'Variety': 'Swiss'
    }, 
    {
        'Style': 'Chunk',
        'Variety': 'Marble Jack'
    }
    ];

    $scope.sizes = ['0', '8 oz', '11 lb', '12 lb', '13 lb', '14 lb', '15 lb'];
    $scope.qtys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
    //$scope.pounds = ['-'];

    $scope.calPounds = function () {
        // console.log($scope.size1);
        // console.log($scope.qty1)

        $scope.countPounds1 = parseFloat($scope.size1) * parseInt($scope.qty1);
        $scope.countPounds2 = parseFloat($scope.size2) * parseInt($scope.qty2);
        $scope.countPounds3 = parseFloat($scope.size3) * parseInt($scope.qty3);
        $scope.countPounds4 = parseFloat($scope.size4) * parseInt($scope.qty4);
        $scope.countPounds5 = parseFloat($scope.size5) * parseInt($scope.qty5);
        $scope.countPounds6 = parseFloat($scope.size6) * parseInt($scope.qty6);
        $scope.countPounds7 = parseFloat($scope.size7) * parseInt($scope.qty7);
        $scope.countPounds8 = parseFloat($scope.size8) * parseInt($scope.qty8);
        $scope.countPounds9 = parseFloat($scope.size9) * parseInt($scope.qty9);
        $scope.countPounds10 = parseFloat($scope.size10) * parseInt($scope.qty10);
        $scope.countPounds11 = parseFloat($scope.size11) * parseInt($scope.qty11);
        $scope.countPounds12 = parseFloat($scope.size12) * parseInt($scope.qty12);
        $scope.countPounds13 = parseFloat($scope.size13) * parseInt($scope.qty13);
        $scope.countPounds14 = parseFloat($scope.size14) * parseInt($scope.qty14);
        $scope.countPounds15 = parseFloat($scope.size15) * parseInt($scope.qty15);
        $scope.countPounds16 = parseFloat($scope.size16) * parseInt($scope.qty16);

        console.log(parseFloat($scope.countPounds1));
        console.log(parseFloat($scope.countPounds2));
        console.log(parseFloat($scope.countPounds3));
        console.log(parseFloat($scope.countPounds4));
        console.log(parseFloat($scope.countPounds5));
        console.log(parseFloat($scope.countPounds6));
        console.log(parseFloat($scope.countPounds7));

        console.log('Total: ' + (parseFloat($scope.countPounds1) + parseFloat($scope.countPounds2)));
    }

    $scope.update = function (vari) {
        console.log(vari.Type)
        console.log('hi variety1');
        //console.log($scope.variety1.Type)
        if (vari.Type == 'Marble Jack') {
            $scope.styles = ['Hello']
            console.log('Hello')
        } else {
            $scope.styles = ['Not Hi']
            console.log('Not Hi')
        }
    }
});