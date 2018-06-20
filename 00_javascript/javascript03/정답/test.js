total=0

for(x=1 ; x<=10 ; x++){
	total=total+x
	document.write(x)

	if(x!=10){
		document.write("+")
	}
}

document.write("="+ total)