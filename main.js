
// https://image.tmdb.org/t/p/original

function trendingUrl(str){
    return `https://api.themoviedb.org/3/trending/${str}/day?api_key=48586718f1619baec6911ced95941d83`
}

async function getMovies(url) {
    var data = await fetch(url);
    data = await data.json();
    for (var i = 0; data.results.length > i; i++) {
        console.log(data.results[i])
        var imgSrc = "https://image.tmdb.org/t/p/original" + data.results[i].backdrop_path
        $("#trendingMovies").append(`<img src =${imgSrc}>`)
    }
}
=======
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


async function getSeries(url) {
    var data = await fetch(url);
    data = await data.json();
    for (var i = 0; data.results.length > i; i++) {
        console.log(data.results[i])
        var imgSrc = "https://image.tmdb.org/t/p/original" + data.results[i].backdrop_path
        $("#trendingSeries").append(`<img src =${imgSrc}>`)
    }
}

getMovies(trendingUrl('movie'))
getSeries(trendingUrl('tv'))






   














$("#browse").click(function(){
    
   $("#searching").toggle(1000)
   

})
$("#hulu").click(function(){
    
    $("#lgout").toggle(1000)
    
 
 })


    
 
 
// 
$("#name").click(function(event){
    event.stopPropagation()
})
$("#name").html(JSON.parse(localStorage.getItem('active')))
$("#home").click(function(event){
    event.stopPropagation()
    window.location.replace("file:///C:/Users/ous00/Desktop/proj/index.html")
})

