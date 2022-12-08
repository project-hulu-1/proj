

var key = "api_key=48586718f1619baec6911ced95941d83"

var baseUrl = "https://api.themoviedb.org/3/trending/movie/day?"

var apiUrl = baseUrl + key
var zz = []
// https://image.tmdb.org/t/p/original
fetch(apiUrl).then(res => res.json()).then(data => {

    for (var i = 15; data.results.length > i; i++) {
        zz.push(i)
        var imgSrc = "https://image.tmdb.org/t/p/original" + data.results[i].backdrop_path
        $("#trending").append(`<img src =${imgSrc}>`)
    }
    console.log(zz)

})















// $("#main").html("<h1>qsdqsdqsd</h1>")


// fetch("https://api.themoviedb.org/3/search/movie?api_key=48586718f1619baec6911ced95941d83&language=en-US&page=1&query=avatar").then(res => res.json()).then(data => {

//    console.log(data.results)
//    for(var i = 0; data.results.length>i ; i++){
//     $("#trending").append(`<img src=${"https://image.tmdb.org/t/p/original" + data.results[i].backdrop_path} >`)
//    }

// })