

const phoneEvent = () => {
    const input = document.getElementById('input-value');
    const inputValue = input.value;
    document.getElementById('container').innerHTML = '';
  
    if (inputValue=="") {
        document.getElementById('error-massage').innerHTML = `
        <h2>Sorry not found of infro plasse try agine</h2>
       `
    }else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
        fetch(url)
        .then(res => res.json())
            .then(data => displayPhone(data.data))
        input.value = '';
     }
      
}

const displayPhone = phones => {
    const container = document.getElementById('container');
    phones.forEach(element => {
        // console.log(element.phone_name)
        const div = document.createElement('div');
        div.className=('col-col-md-6 col-lg-4 mb-3 p-5 ')
        div.innerHTML = `
          <div class="card text text-center">
              <div>
                  <img class="mt-3 w-50" src="${element.image}" alt="">
              </div>
                 <h2>Name:${element.phone_name}</h2>
                 <h2>Brand Name:${element.brand}</h2>
             <div>
                <button onclick="detalic()" class="btn btn-success mb-4">Datlice</button>
              </div>
         </div>
    
         `
         container.appendChild(div)
    });
}
 
const detalic = ()=> {
    fetch(' https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089')
    .then(res => res.json())
    .then(data=>displayInfro(data))
}
   
const displayInfro = infroData => {
    console.log(infroData)
}