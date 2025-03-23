$(document).ready(function() {
    // Form validation
    $(document).on('submit', '#contactForm', function(e) {
        e.preventDefault();
        // Validation code
        if ($(this).valid()) {
            toastr.success('Data saved successfully');
            $('#contactForm')[0].reset(); // Reset form
        }
    });

    // Update password strength indicator dynamically
    $(document).on('keyup', '#password', function() {
        var password = $(this).val();
        var strength = 0;

        // If password contains uppercase and lowercase letters
        if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
            strength += 1;
        }
        // If password contains numbers
        if (password.match(/[0-9]/)) {
            strength += 1;
        }
        // If password contains special characters
        if (password.match(/[$&+,:;=?@#|'<>.^*()%!-]/)) {
            strength += 1;
        }

        // Update password strength message dynamically
        var strengthText = '';
        switch (strength) {
            case 0:
                strengthText = 'Weak';
                break;
            case 1:
                strengthText = 'Medium';
                break;
            case 2:
                strengthText = 'Strong';
                break;
            case 3:
                strengthText = 'Very Strong';
                break;
        }
        $('#passwordStrength').html('Password Strength: ' + strengthText);
    });

    // Check email format dynamically (if '@' is missing)
    $(document).on('keyup', '#email', function() {
        var email = $(this).val();
        if (email.indexOf('@') === -1) {
            $('#emailMessage').html('Email must contain "@"').css('color', 'red');
        } else {
            $('#emailMessage').html(''); // Clear the message once '@' is present
        }
    });

    // Phone number validation (optional)
    $(document).on('keyup', '#phone', function() {
        var phone = $(this).val();
        var phonePattern = /^[0-9]{10}$/; // Example pattern for 10 digit phone number
        if (!phone.match(phonePattern)) {
            $('#phoneMessage').html('Phone number must be 10 digits').css('color', 'red');
        } else {
            $('#phoneMessage').html(''); // Clear the message once valid phone number is entered
        }
    });
});

