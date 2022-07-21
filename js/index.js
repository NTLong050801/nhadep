$('input').click(function(){
    $('.list_search').css("display","block");
})
$("body").click
(
  function(e)
  {
    if(e.target.className !== "txt-search")
    {
        $('.list_search').css("display","none");

    }
  }
);