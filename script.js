beers = [];


var addBeer = function(name, category, num){
    var newbeer = {
    name : name,
    category : category,
    rating : num
    }
    beers.push(newbeer);
    };

$('.post-beer').click(function(){
    var Bname = $('.beer-input').val();
    var Bcategory = $('.category-input').val();
    var Brating = $('.rate-input').val();
    addBeer(Bname, Bcategory, Brating);
    renderbeer();
});


var renderbeer = function(){
$('.beers-list').empty();
for (i=0; i<beers.length; i++){
    $('.beers-list').append('<li> The name of the beer is: ' + beers[i].name +', its Category of it is: '+ beers[i].category + ' and its rating is: ' +beers[i].rating + '</li>');    
}
};