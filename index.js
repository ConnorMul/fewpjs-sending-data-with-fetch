// Add your code here
function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(object) {
        document.body.innerHTML = object[ "id" ]
    })
    .catch(function(error) {
        alert("There was an error processing your request")
        document.body.innerHTML = error.message
    })
}