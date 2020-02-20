const documentBody = document.querySelector("body"); 

function submitData(name, email){
    let objectData ={
        name: name, 
        email: email
    }

    let configObj = {
        method: "POST", 
        headers: {
            "Content-type": "application/json", 
            "Accept": "application/json"
        }, 
        body: JSON.stringify(objectData)
    }; 

    return fetch("http://localhost:3000/users", configObj)
    .then(function(response){
        return response.json(); 
    })
    .then(function(object){
        console.log(object)
        // debugger;
        const idListing = document.createElement('p'); 
        idListing.innerHTML = object.id; 
        documentBody.appendChild(idListing)
    })

        .catch(function(error){
            let errorPara = document.createElement('p');
            errorPara.innerHTML = error.message; 
            documentBody.appendChild(errorPara);
        }
    )

}