var email  = "keagoteam@gmail.com",
    btnCopy = document.getElementById( 'copy' ),
    paste   = document.getElementById( 'cleared' );

btnCopy.addEventListener( 'click', function(){
  email.select();
  paste.value = email;
