$(document).ready(function() {

    $('#name').click(function(){
        $('#name').addClass("formstyle");

    });
 


    $("#contact_form").submit(function()
    {
    	event.preventDefault();
    	
        var email = $("#email").val(); // get email field value
        var name = $("#name").val(); // get name field value
        var msg = $("#msg").val(); // get message field value
        
        $.ajax(
        {
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': 'eZWqJd6D1NCJhfiI7DyOQw',
                'message': {
                    'from_email': email,
                    'from_name': name,
                    'headers': {
                        'Reply-To': email
                    },
                    'subject': 'Website Contact Form Submission',
                    'text': msg ,
                    'to': [
                    {
                        'email': 'chnw1947@gmail.com',
                        'name': 'Chinenyem Nwadiugwu',
                        'type': 'to'
                    }]
                }
            }
        })
        .done(function(response) {
            $(".success").append("<p class=\"newtext\">We have recieved your email. We will contact you soon. Thank you</p>" );
            $("#name").val(''); // reset field after successful submission
            $("#email").val(''); // reset field after successful submission
            $("#msg").val(''); // reset field after successful submission
            
        })
        .fail(function(response) {
            alert('Error sending message.');
        });
        return false; // prevent page refresh
    });


});

