$(document).ready(function(){

    var nombreUsuario = $('#user')
    var pass = $('#pass')
    $('.loginButton').on('click', function(event) {
        if (nombreUsuario.val() != "" && pass.val() != "") 
        {
            $.ajax({
                url:'/events/login',
                type : 'POST',
                data : {user: nombreUsuario.val(), pass: pass.val()},
                success : function (response) 
                {
                    if (response == "Validado") 
                    {
                        window.location.href = "http://localhost:3000/main.html"
                    }
                    else
                    {
                        alert("Usuario o password errados")
                    }
                }
            })
        } 
        else 
        {
            alert("Complete todos los campos")
        }
    })
})