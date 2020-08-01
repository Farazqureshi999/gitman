import $ from 'jquery'
$(document).ready(function(){
   $("#btn-menu").click(()=>{
        $("#btn-menu").toggleClass('open');
        $(".mob-nav").toggleClass('open');
   })
});