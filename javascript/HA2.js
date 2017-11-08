function a1(){
	var s="#"
	while(s.length<=7){
		console.log(s);
		s=s+"#"
	}
}


function a2(){
	var x=0
	var s=""
	while(x<=100){
		if(x%3==0)s="FIZZ"
		if(x%5==0)s=s+"BUZZ"
		if(s=="")s=x
		console.log(s)
		s=""
		x++
	}
}



function a3(){
	var i=0
	var s=""
	while(i<=7){
		if(!(i%2)){
			while(s.length!=8){
			s=s+" #"
			}
				console.log(s)
				i++
				s=""
			}
		 else{
			while(s.length!=8){
			s=s+"# "
			}
				console.log(s)
				i++
				s=""
			}
		}
	}
	
console.log("A1")
a1()
console.log("A2")
a2()
console.log("A3")
a3()
