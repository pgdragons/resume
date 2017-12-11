function calculateSum(arr){
	var sum = 0;
	for(var i in arr){
		sum += arr[i].cost;
	}
	return sum;
}