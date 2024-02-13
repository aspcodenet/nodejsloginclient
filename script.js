const loginButton = document.getElementById('login')
const email = document.getElementById('email')
const password = document.getElementById('password')
const error = document.getElementById('error')


loginButton.addEventListener('click',async (ev)=>{
    ev.preventDefault()
    const rawResponse = await fetch('http://localhost:3000/api/signIn',{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method:'POST',
          credentials:'include',
          body: JSON.stringify({email: email.value, password: password.value})                
    })
    if(rawResponse.status == 200){
        const content = await rawResponse.json();
        window.location.replace('secretpage.html');
    }else{
        error.style.display = "block";
    }

})

