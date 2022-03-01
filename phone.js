

const phoneEvent = () => {
    const input = document.getElementById('input-value');
    const inputValue = input.value;
    document.getElementById('container').innerHTML = '';
    document.getElementById('error-massage').innerHTML = '';
    document.getElementById('error-massage').innerHTML = '';
    document.getElementById('phone-datlice').innerHTML = '';
  
    if (inputValue == "" || inputValue == 0) {
      const errpr=  document.getElementById('error-massage').innerHTML = `
        <h2>Sorry not found of infro plasse try agine</h2>
       `
        input.value = "";
        errpr.innerHTML = '';

    } else if (inputValue>20) {
        document.getElementById('error-massage').innerHTML = `
        <h2> Sorry not a data trye aging</h2>
       `
        input.value = "";
    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
        fetch(url)
        .then(res => res.json())
            .then(data => displayPhone(data.data))
        input.value = '';
     }
   
}

const displayPhone = phones => {
    const container = document.getElementById('container');
    if (phones.length == 0) {
        const errpr=  document.getElementById('error-massage').innerHTML = `
        <h2>Sorry not found of infro plasse try agine</h2>
       `
        input.value = "";
        errpr.innerHTML = '';
    }
    const phone = phones.slice(0, 20);
    phone.forEach(element => {
        // console.log(element)
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
                <button onclick="detalic('${element.slug}')" class="btn btn-success mb-4">Datlice</button>
              </div>
         </div>
    
         `
         container.appendChild(div)
    });
}
 
const detalic = (phoneDatlic) => {
    const url = (`https://openapi.programming-hero.com/api/phone/${phoneDatlic}`)
     fetch(url)
    .then(res => res.json())
    .then(data=>displayInfro(data.data))
}  
const displayInfro = infroData => {
    const phoneDatlic = document.getElementById('phone-datlice')
   
    const div = document.createElement('div');
    document.getElementById('phone-datlice').innerHTML = '';
    div.innerHTML = `
    <div class="card text-center">
    <div>
        <img class="mt-3 w-50" src="${infroData.image}" alt="">
    </div>
       <h2>Name:${infroData.name}</h2>
       <h3>Release Date:${infroData.releaseDate}</h3>
       <h4>Memory:${infroData.mainFeatures. memory}</h4>
       <h5>Bluetooth:${infroData.others.Bluetooth}</h5>
       <h5>USB:${infroData.others.USB}</h5>
       <h5>WLAN:${infroData.others.WLAN}</h5>
       <h5>Sensors:${infroData.mainFeatures.sensors}</h5>
       
   
      
   <div>
      <button class="btn btn-success mb-4">All Data</button>
    </div>
</div>
    `
    phoneDatlic.appendChild(div)
}