var person=[]
var need=$("#cnt").click(function login(){
   
   
    console.log($('#psw').val())
    console.log($('#em').val())
   var x=0
    for (var index = 0; index < person.length; index++) {
     if($('#psw').val()===person[index].password&&$('#em').val()===person[index].email){
     x++
     
    }
 }
 if(x===1){
  
    alert('Hello user')
    
 }
 else{
    alert('try again')
 }
 })
 $("#cnt1").click(function add(){
   
   
    console.log($('#psw1').val())
    console.log($('#em1').val())
   
    if($('#psw1').val().length>8){
 person.push({email:$('#em1').val(),password:$('#psw1').val()})
 alert('welcome!!enjoy your watch')}
 else{
    alert('try a password longer than 8')
 }
 })