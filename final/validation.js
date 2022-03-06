$(document).ready(function() {
    $("#registration").validate({
        rules: {
            name: {
                required: true,
                minlength: 3

            },
            surname: {
                required: true,
                minlength: 3
            },
            username: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            pass: {
                required: true,
                minlength: 8
            },
            cpass: {
                required: true,
            }
        },
        messages: {
            name: {
                required: 'Name is required!'
            },
            surname: {
                required: 'Surname is required!'
            },
            username: {
                required: 'Username is required!'
            },
            email: {
                required: 'Email is required!'
            },
            pass: {
                required: 'Password is required!'
            },
            cpass: {
                required: 'Confirmation is required!'
            }
        }

    });
    $('#sltext').click(function() {
        $('#slidetext').slideToggle();
    })
    $(function() {
        $("#dropdownButton").ejSplitButton({
            size: "medium",
            showRoundedCorner: true,
            buttonMode: ej.ButtonMode.Dropdown,
            targetID: "menu"
        });
    });
});