app.controller('homectrl', function ($scope) {
    $scope.populateStyle = (vari, sty) => {
        console.log("7000");
        var vari = document.getElementById(vari);
        var sty = document.getElementById(sty);
        sty.innerHTML = "";
        if (vari.value == "-") {
          var optionArray = ["-|Select"];
        } else if (vari.value == "Marble Jack" | vari.value == "Pepper Jack" | vari.value == "Medium Cheddar" | vari.value ==
          "Mozz" | vari.value == "Swiss") {
          var optionArray = ["-|Select", "Chunk|Chunk", "Shingle|Shingle", ];
        } else if (vari.value == "Monterey Jack") {
          var optionArray = ["-|Select", "Chunk|Chunk", "Shingle|Shingle", "Shred|Shred"];
        } else if (vari.value == "Marble Cheddar" | vari.value == "Mild Cheddar") {
          var optionArray = ["-|Select", "Chunk|Chunk", "Shred|Shred", "Sliced|Sliced"];
        } else if (vari.value == "Sharp Cheddar") {
          var optionArray = ["-|Select", "Chunk|Chunk", "Shred|Shred"];
        } else if (vari.value == "Part Skim Mozz" | vari.value == "Whole Milk Mozz") {
          var optionArray = ["-|Select", "Ball|Ball"];
        } else if (vari.value == "String") {
          var optionArray = ["-|Select", "String|String"];
        } else if (vari.value == "Cream Cheese") {
          var optionArray = ["-|Select", "Chunk|Chunk"];
        } else if (vari.value == "Muenster" | vari.value == "Provolone") {
          var optionArray = ["-|Select", "Shingle|Shingle"];
        } else if (vari.value == "Variety Pack") {
          var optionArray = ["-|Select", "Sliced|Sliced"];
        }
  
        for (var option in optionArray) {
          var pair = optionArray[option].split("|");
          var newOption = document.createElement("option");
          newOption.value = pair[0];
          newOption.innerHTML = pair[1];
          sty.options.add(newOption);
        }
      }
});