//Check passwords



function checkPassword(){
    form = document.getElementById("form");
    password1 = form.password.value;
    password2 = form.passwordconfirmone.value;

    console.log(password1);
    console.log(password2);

    if (password1 == '')
        alert ("Please enter password");

    else if (password2 == '')
        alert ("Please confirm password");
        
    else if (password1 != password2) {
        alert ("Password did not match: Please try again...")
        return false;
    }
    else{
        return true;
    }
}