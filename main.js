$("#dev-photo").click(function(){
    $("#dev-photo").animate({height: "500px", width: "600px"}, "slow");
    $("#dev-photo").animate({height: "300px", width: "400px"}, "slow");
})

$("#bpa-logo").click(function(){
    $("#bpa-logo").hide("slow");
    $("#bpa-logo").show("slow");
});