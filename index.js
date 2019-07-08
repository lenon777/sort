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

// Singleton pattern

var DBconnection = (function(){
	var uniqueConection;
	function createConnection(driver,username,password,URL){
		var uniqueConnection = new Object();		
		uniqueConnection.driver = driver;
		uniqueConnection.username = username;
		uniqueConnection.password = password;
		uniqueConnection.URL = URL;

		return uniqueConnection;
	}
		return{
			setConnection: function(driver,username,password,URL){
			if(!uniqueConection){
				uniqueConection = createConnection(driver,username,password,URL);
			}
			return uniqueConection;
		}
	}

}());
var sql = DBconnection.setConnection("sqlDriver","zorro","zorro124","http://www.zorro.com");
var mongo = DBconnection.setConnection("mongoDriver","transformer","transformer124","http://www.transformer.com");
console.log(sql === mongo); //true
