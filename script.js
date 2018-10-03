
var text1 = "<h2>You Ordered:</h2>";    // pizza order with selections and price
var runningTotal = 0;                   // Calculates the total price of the selected items


// getReceipt() is called from the HTML page
// No paremters were needed

function getReceipt() {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
    runningTotal = sizeTotal;
    text1 = text1+selectedSize+ "  $"+sizeTotal+".00"+"<br>";
    
    
    getCrust(); // Crust seletion
    getSauce(); // Sauce selection
    getCheese(); // Cheese selection
    getVeggie(); // Veggie selection
    getMeat();  // Meat selection
};	


// getCrust() - Updates the Crust selection for the Pizza

    function getCrust() {
        // console.log("Insidse the function getCrust")
        var crustTotal = 0;
        var crustArray = document.getElementsByClassName("crust");
        var selectedCrust = "";

            for(var k = 0; k < crustArray.length; k++) {
                if (crustArray[k].checked) {
                        selectedCrust = crustArray[k].value;
                }
            }
            if (selectedCrust === "Cheese Stuffed Crust") {
                crustTotal = 3
            } else {
                crustTotal= 0
            } 
            runningTotal = (runningTotal + crustTotal);
            text1 = text1+selectedCrust+ "  $"+crustTotal+".00"+"<br>";
            document.getElementById("showText").innerHTML=text1;
            document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";

    }

// getSauce() - Updates the Sauce selection for the Pizza

    function getSauce() {
        var sauceTotal = 0;
        var sauceArray = document.getElementsByClassName("sauce");
        var selectedSauce = "";

            for(var k = 0; k < sauceArray.length; k++) {
                if (sauceArray[k].checked) {
                    selectedSauce = sauceArray[k].value;
                }
            }
            runningTotal = (runningTotal + sauceTotal);
            text1 = text1+selectedSauce+ "  $"+sauceTotal+".00"+"<br>";
            document.getElementById("showText").innerHTML=text1;
            document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";


    }

// getCheese() - Updates the Cheese selection for the Pizza

    function getCheese() {
        var cheeseTotal = 0;
        var cheeseArray = document.getElementsByClassName("cheese");
        var selectedCheese = "";

            for(var k = 0; k < cheeseArray.length; k++) {
                if (cheeseArray[k].checked) {
                        selectedCheese = cheeseArray[k].value;
                }
            }
            if (selectedCheese === "Extra Cheese") {
                cheeseTotal = 3
            } else {
                cheeseTotal= 0
            } 
            runningTotal = (runningTotal + cheeseTotal);
            text1 = text1+selectedCheese+ "  $"+cheeseTotal+".00"+"<br>";
            document.getElementById("showText").innerHTML=text1;
            document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    }

// getVeggie() - Updates the Veggie selection for the Pizza

    function getVeggie() {
        var veggieTotal = 0;
        var selectedVeggie = [];
        var veggieArray = document.getElementsByClassName("veggie");
        for (var j = 0; j < veggieArray.length; j++) {
            if (veggieArray[j].checked) {
                selectedVeggie.push(veggieArray[j].value);
            }
        }


        var veggieCount = selectedVeggie.length;
        if (veggieCount > 1) {
            veggieTotal = (veggieCount - 1);
        } else {
            veggieTotal = 0;
        }
        runningTotal = (runningTotal + veggieTotal);
        text1 = text1+selectedVeggie+ "  $"+veggieTotal+".00"+"<br>";
        document.getElementById("showText").innerHTML=text1;
        document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    };

// getMeat() - Updates the Meat selection for the Pizza

    function getMeat() {
        var meatTotal = 0;
        var selectedMeat = [];
        var meatArray = document.getElementsByClassName("meats");
        for (var j = 0; j < meatArray.length; j++) {
            if (meatArray[j].checked) {
                selectedMeat.push(meatArray[j].value);
            }
        }

        var meatCount = selectedMeat.length;
        if (meatCount > 1) {
            meatTotal = (meatCount - 1);
        } else {
            meatTotal = 0;
        }
        runningTotal = (runningTotal + meatTotal);
        text1 = text1+selectedMeat+ "  $"+meatTotal+".00"+"<br>";
        document.getElementById("showText").innerHTML=text1;
        document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
        
    };		


