function processData(input) {
    //Enter your code here
    //split the array to fetch individual words and remove the first element as it contain no of elements present in it
    let inputcopy=input.split('\n').slice(1);
    //console.log(inputcopy);
    
    let str;
    //for each string present in the array ,will collect the even place and odd place characters and join them  having space in between them
    inputcopy.forEach((str)=>{
        let even='',odd='';
        for(let i=0;i<str.length;i++)
        {
      if(i%2==0)
          even+=str[i];
       else
      odd+=str[i];
        }
        console.log(even+" "+odd);
    });
       
}
      

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
