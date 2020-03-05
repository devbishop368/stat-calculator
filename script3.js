// Test values:  600 470 170 430 300
/* Calculate Mean*/
function calcMean(array) {
	var total = calcSum(array);	
	var mean = total / array.length;
	return mean.toFixed(2);
}
/* Calculate Median */
function calcMedian(array) {
	var arrayVar = sortArray(array);
	var middle = Math.floor(arrayVar.length / 2);
	if(arrayVar.length % 2) {
		return (arrayVar[middle].toFixed(2));
	}
	else 
	return ((arrayVar[middle-1] + arrayVar[middle]) / 2.0).toFixed(2); 
}
/* Calculate Mode */
function calcMode(array) {
	var modeNums = [];
	var count = [];
	var num = 0;
	var maximumIndex = 0;
	
	for(i = 0; i < array.length; i += 1) {
		num = array[i];
		count[num] = (count[num] || 0) + 1;
		if(count[num] > maximumIndex) {
			maximumIndex = count[num];
		}
	}

	for(i in count) {
		if(count.hasOwnProperty(i)) {
			if(count[i] === maximumIndex) {
				modeNums.push(Number(i));
			}
		}
	}
	return modeNums.join(" ");
}

/* Calculate Standard Deviation */
function calcStdDev(array) {
	var stdDev = Math.sqrt(calcVariance(array));
	return stdDev.toFixed(2);
}

/* Calculate Sum */
function calcSum(array) {
	var total = 0;
	for(var i = 0; i < array.length; i++) {
		total += array[i];
	}
	return total.toFixed(2);
}

/*Calculate Variance */
function calcVariance(array) {
	var varyArray = sortArray(array);
	//Work out the mean using the calcMean(array) function
	var mean = calcMean(varyArray);
	// Then for each number: subtract the mean and square the result(the squared difference)	
	var squaredDifferences = varyArray.map(function(value) {
		var difference = value - mean;
		var sqrDifference = difference * difference;
		return sqrDifference;
	});
	//Then return the average for those squared differences
	var variance = calcMean(squaredDifferences);
	variance = parseInt(variance);
	return variance.toFixed(2); 
}

/* Find Maximum Value */
function findMax(array) {
	var maxValue = Math.max(...array);
	return maxValue.toFixed(2);
}

/* Find Minimum Value */
function findMin(array) {
	var minValue = Math.min(...array);
	return minValue.toFixed(2);
}

/* Perform Statistics*/
function performStatistics() {
	//var goodToGo = false;
	if (document.getElementById('textAreaInput').value.trim() != '') {
	var numArray = document.getElementById('textAreaInput').value.split(" ").map(Number);
	document.getElementById("minNum").value=findMin(numArray);
	document.getElementById("maxNum").value=findMax(numArray);
	document.getElementById("sumOfNums").value=calcSum(numArray);
	document.getElementById("meanNum").value=calcMean(numArray);
	document.getElementById("medianNum").value=calcMedian(numArray);
	document.getElementById("modeNums").value=calcMode(numArray);
	document.getElementById("varianceNum").value=calcVariance(numArray);
	document.getElementById("stdDevNum").value=calcStdDev(numArray);
	goodToGo = true;
	}
	else if (document.getElementById('textAreaInput').value.trim() == '' || isNaN(document.getElementById('textAreaInput').value.trim())) {
		alert("Valid numerical values are required to perform statistical calculations.");
		return false;
	}

	/* Remove before submission! 
	if (goodToGo === true) {
		alert("Values have been calculated");
	}*/
	return false; //600 470 170 430 300  document.getElementById('textAreaInput').value.trim() == '' || 
}

/* Sort Array */
function sortArray(array) {
	return array.slice().sort((a, b) => a - b);
}