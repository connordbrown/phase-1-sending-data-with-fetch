function submitData (userName, userEmail) {
    
    const formData = {
        name: `${userName}`,
        email: `${userEmail}`
    };

    const postObject = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", postObject)
      .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        const x = document.createElement('p');
        x.textContent = object.id;
        document.body.append(x);
    })
    .catch(function (error) {
        alert("Error!");
        const x = document.createElement('p');
        x.textContent = error.message;
        document.body.append(x);
    })

}

