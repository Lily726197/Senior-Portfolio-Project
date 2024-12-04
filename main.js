$("#dev-photo").click(function(){
    $("#dev-photo").animate({height: "400px", width: "200px"}, "slow");
    $("#dev-photo").animate({height: "200px", width: "100px"}, "slow");
})

$("#bpa-logo").click(function(){
    $("#bpa-logo").hide("slow");
    $("#bpa-logo").show("slow");
});