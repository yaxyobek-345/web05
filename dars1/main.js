let btn = document.querySelector("button")
const car = {
    image:"htps",
    name: "BMW M5 CS",
    price: 200000,
    count: 12
}
btn.addEventListener("click", function(){
    fetch("https://fakestoreapi.com/products",  {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(car)
    }) 
    .then(response =>{
        return response.json()
    })

    .then(data =>{
        alert("Yuborildi" ,data);
            window.location.href="../dars1/next.html"
    })
    .catch(error =>{
        console.log(error);
        
    })

}
)