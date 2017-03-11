
	function SetValues() {
		a = Number(document.getElementById("a").value);	
		b = Number(document.getElementById("b").value);
		}	

	var a, b, result;

		function add(){

			SetValues();

			var result = a + b;
			}


		function sub(){

			SetValues();

			var result = a - b;
		    }

		function mul(){

			SetValues();


			var result = a * b;
           }

        function div () {

			SetValues();

			var result = a / b;
		   }


  		function Average() {
    
        var afinal=((a+b)/2);

            document.getElementById('avg').value=afinal;

    	var result = total / add.length;