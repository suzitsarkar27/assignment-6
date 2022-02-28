

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
        div.className=('col-col-md-6 col-lg-4 mb-3 p-5 m-auto')
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
    .then(data=>displayInfro(data.data))
}
   
const displayInfro = infroData => {
    const phoneDatlic = document.getElementById('phone-datlice')
   
    const div = document.createElement('div');
    document.getElementById('phone-datlice').innerHTML = '';
    // console.log(infroData.others)
    div.innerHTML = `
    <div class="card text-center">
    <div>
        <img class="mt-3 w-50" src="${infroData.image}" alt="">
    </div>
       <h2>Name:${infroData.name}</h2>
       <h3>Release Date:${infroData.releaseDate}</h3>
       <h4>Storage:${infroData.mainFeatures. storage}</h4>
       <h4>Memory:${infroData.mainFeatures. memory}</h4>
       <h5>Bluetooth:${infroData.others.Bluetooth}</h5>
       <h5>USB:${infroData.others.USB}</h5>
      
   <div>
      <button class="btn btn-success mb-4">All Data</button>
    </div>
</div>
    `
    phoneDatlic.appendChild(div)
}