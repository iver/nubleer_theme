(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    table = $('table');
    table.attr({ class:"dataTable", role:"grid", "aria-describedby":"data-table-simple_info" });
    table.find('tr').attr({ role:"row" })
    table.find('tbody tr:odd').attr({ class:"odd"});
    table.find('tbody tr:not(.odd)').attr({ class:"even"});

  }); // end of document ready
})(jQuery); // end of jQuery name space
