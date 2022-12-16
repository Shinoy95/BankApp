function register(){
    acno=reg_acno.value;
    uname=reg_name.value;
    pswd=reg_pswd.value;
    balance=2000;


    acnoDetails={
        acno,uname,pswd,balance
    }

    if(acno in localStorage){
        alert('Accno already present');
    }
    else{
        localStorage.setItem(acno,JSON.stringify(acnoDetails));
        alert('Register successfully');
        window.location.href="index.html";
    }

}

function Login(){
    acno=login_acno.value;
    pswd=login_pswd.value;

    if(acno in localStorage){
        acnoDetails=JSON.parse(localStorage.getItem(acno));
        //console.log(accnoDetails ["pswd"]);
        if(pswd==acnoDetails.pswd){
        alert('login successful');
        window.location.href="home.html";
        result.innerHTML=`r: ${acnoDetails.uname}`
        }
        else{
            alert('Incorrect password')
        }
    }
    else{
        alert('invalid account number');
    }
}