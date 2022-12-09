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






   












// $("#main").html("<h1>qsdqsdqsd</h1>")


// fetch("https://api.themoviedb.org/3/search/movie?api_key=48586718f1619baec6911ced95941d83&language=en-US&page=1&query=avatar").then(res => res.json()).then(data => {

//    console.log(data.results)
//    for(var i = 0; data.results.length>i ; i++){
//     $("#trending").append(`<img src=${"https://image.tmdb.org/t/p/original" + data.results[i].backdrop_path} >`)
//    }

// })