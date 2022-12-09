// https://image.tmdb.org/t/p/original
$("#lgout").click(function (){
    window.location.replace("hull.html")
})
$("#hulu").click(function(){
    
    $("#lgout").toggle(1000)
    
 
 })
 $("#name").click(function(event){
    event.stopPropagation()
})
$("#name").html(JSON.parse(localStorage.getItem('active')))
 $("#lgout").hide()

function trendingUrl(str) {
    return `https://api.themoviedb.org/3/trending/${str}/day?api_key=48586718f1619baec6911ced95941d83`
}

async function getMovies(url) {
    var data = await fetch(url);
    data = await data.json();
    for (var i = 0; data.results.length > i; i++) {
        var imgSrc = "https://image.tmdb.org/t/p/original" + data.results[i].backdrop_path
        $("#trendingMovies").append(`<img src =${imgSrc}>`)
    }
}
async function fetcher(url, f) {
    var data = await fetch(url);
    data = await data.json();
    for (var i = 0; data.results.length > i; i++) {
      f(data.results[i])
    }
}

fetcher(trendingUrl('movie'), function(element){
    var imgSrc = "https://image.tmdb.org/t/p/original" + element.backdrop_path
    $("#trendingMovies").append(`<img src =${imgSrc}>`)
})
fetcher(trendingUrl('movie'), function(element){
    var imgSrc = "https://image.tmdb.org/t/p/original" + element.backdrop_path
    $("#trendingSeries").append(`<img class='SerieImg' src =${imgSrc}>  </img`)
})








getSeries(trendingUrl('tv'))
$("#mute").click(function () {


    console.log($("#thevid").get(0).currentTime)


})



$("#thevid").prop('muted', true);

$("#mute").click(function () {
    if ($("#thevid").prop('muted')) {
        $("#thevid").prop('muted', false);
        $("#volume").attr("src", "assets/imgs//volume.svg")
    } else {
        $("#thevid").prop('muted', true);

        $("#volume").attr("src", "assets/imgs//mute.svg")

    }
});



$("#browse").click(function () {

    $("#searching").toggle(1000)


})
$("#searching").hide()

async function getSearch(query) {
    var data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=48586718f1619baec6911ced95941d83&language=en-US&page=1&query=${query}`);
    data = await data.json();
    for (var i = 0; data.results.length > i; i++) {
        var imgSrc = "https://image.tmdb.org/t/p/original" + data.results[i].backdrop_path
        $("#main").html(`<img src=${imgSrc}>`)

    }


}
    $("#search").click(
        function searchin(event) {
            event.stopPropagation()
            console.log()
            getSearch($("#search").val())
        })






