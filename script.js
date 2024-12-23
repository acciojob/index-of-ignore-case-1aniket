function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let s2Size=s2.length;
	s1=s1.toUpperCase();
	s2=s2.toUpperCase();

	for(let i=0;i<=s1.length-s2Size;i++)
	{

		if(s1.substr(i , s2Size).toUpperCase()== s2.toUpperCase())
		{
		  
			return i;
		}
			
	}
	
	return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));

