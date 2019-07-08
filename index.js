var arr = [1,5,8,3,4,2,6,7];

function sort(arr){
		var first = [];
		var second = [];
		first = arr.map(function(x){
			return x%2 !==0? x: false;
		});
		second = arr.map(function(x){
			return x%2 ===0? x: false;
		});
		first.sort(function(a,b){
			return a-b;
 		});
		second.sort(function(a,b){
			return a-b;
		});
	 first = first.concat(second);
	 var remove = first.indexOf(false);
	 while(remove !== -1){
	 	first.splice(remove,1);
	 	remove = first.indexOf(false);
	 }

	 return first;
};
