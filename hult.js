var persons=[]
function memoire(){
localStorage.setItem('person',JSON.stringify(persons))
console.log(JSON.parse(localStorage.getItem('person')))}

$("#cnt").click(function login(){
   
   
    console.log($('#psw').val())
    console.log($('#em').val())
   var x=0
    for (var index = 0; index <(JSON.parse(localStorage.getItem('person'))).length; index++) {
     if($('#psw').val()===JSON.parse(localStorage.getItem('person'))[index].password&&$('#em').val()===JSON.parse(localStorage.getItem('person'))[index].email){
     x++
     localStorage.setItem('active',JSON.stringify($('#em').val()))
    }
 }
 if(x===1){
   
    alert('Hello user')
    window.location.replace("http://127.0.0.1:5500/index.html")
 }
 else{
  
    alert('try again')
 }
 return x
 })
 $("#cnt1").click(function add(){
   
   
    console.log($('#psw1').val())
    console.log($('#em1').val())
   
    if($('#psw1').val().length>8){
      persons.push({email:$('#em1').val(),password:$('#psw1').val()})
      memoire()
      alert('welcome!!enjoy your watch')
   }
 else{
    alert('try a password longer than 8')
 }
 })