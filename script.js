
('#save').on('click', function(){

    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
       localStorage.setItem(id);
    
    })
    });