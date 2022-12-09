$("#lgout").click(function (){
    window.location.replace("file:///C:/Users/ous00/Desktop/proj/hull.html")
})

var key = "api_key=48586718f1619baec6911ced95941d83"

var baseUrl = "https://api.themoviedb.org/3/trending/movie/day?"

var apiUrl = baseUrl + key
console.log(apiUrl)
var zz = []
// https://image.tmdb.org/t/p/original
fetch(apiUrl).then(res => res.json()).then(data => {
    console.log(data.results)

    for (var i = 15; data.results.length > i; i++) {
        zz.push(i)
        var imgSrc = "https://image.tmdb.org/t/p/original" + data.results[i].backdrop_path
        $("#trending").append(`<img src =${imgSrc}>`)
    }
    console.log(zz)

})

















$("#browse").click(function(){
    
   $("#searching").toggle(1000)
   

})
$("#hulu").click(function(){
    
    $("#lgout").toggle(1000)
    
 
 })

 var mov=[]
 fetch(apiUrl).then(res => res.json()).then(data => {
     
    
    for(var i = 0; data.results.length>i ; i++){
    mov.push(data.results[i].title)
    console.log(mov)
   
    }
    
    
    
 
 })
//  $("#search").click(
//  function searchin(event){
    
 
//      for(var i=0;i<mov.length;i++){
//          if($("#search").val()===mov[i]){
//              console.log(mov[i])
//              var y="https://www.imdb.com/find?q="+mov[i]+"&ref_=nv_sr_sm"
//              window.location.replace(y)
//          }
        
//         }
        
     
     
//   event.stopPropagation()
    
//  })
$("#name").click(function(event){
    event.stopPropagation()
})
$("#name").html(JSON.parse(localStorage.getItem('active')))
$("#home").click(function(event){
    event.stopPropagation()
    window.location.replace("file:///C:/Users/ous00/Desktop/proj/index.html")
})

$("#search").click(
    function searchin(event){
       
    
        for(var i=0;i<mov.length;i++){
            if($("#search").val()===mov[i]){
                fetch(apiUrl).then(res => res.json()).then(data => {
              console.log(data.results)
                    for (var j = 0;  j<data.results.length; j++) {
                       if(data.results[j].title===mov[i]){
                        console.log(data.results[j].title)
                        var imgSrc = "https://image.tmdb.org/t/p/original" + data.results[j].backdrop_path
                        $("#result").append(`<img src =${imgSrc}>`)}}})
                    
                
                }
            }
           
           
           
        
        
     event.stopPropagation()
       
    })