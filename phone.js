

const phoneEvent = () => {
    const input = document.getElementById('input-value');
    const inputValue = input.value;
    document.getElementById('container').innerHTML = '';
    document.getElementById('error-massage').innerHTML = '';
    document.getElementById('error-massage').innerHTML = '';
    document.getElementById('phone-datlice').innerHTML = '';

    const spinner = document.getElementById('spinner');
    spinner.style.display = 'block';
    if (inputValue == "" || inputValue == 0) {
      const errpr=  document.getElementById('error-massage').innerHTML = `
        <h2>Sorry not found of infro plasse try agine</h2>
       `
        input.value = "";
        errpr.innerHTML = '';

    } else if (inputValue>20 ) {
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
    container.innerHTML = '';
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
        div.innerHTML = '';
        div.className=('col- col-md-6 col-lg-4 mb-3 p-5 m-auto')
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
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'none';
}
 
const detalic = (phoneDatlic) => {
    const url = (`https://openapi.programming-hero.com/api/phone/${phoneDatlic}`)
     fetch(url)
    .then(res => res.json())
        .then(data => displayInfro(data.data))
        const spinner = document.getElementById('spinner');
        spinner.style.display = 'block';
}  
const displayInfro = infroData => {
    const phoneDatlic = document.getElementById('phone-datlice')
   console.log(infroData.others)
    const div = document.createElement('div');
    document.getElementById('phone-datlice').innerHTML = '';
    div.className=('row border border-primary shadow-lg p-3 mb-5 bg-body rounded')
    div.innerHTML = `
     <div class="col-md-6">
     <img class="mt-3" src="${infroData.image}" alt="">
     </div>
     <div class="col-md-6 w-70">
         <div class="text-center">
            <h2>Name:${infroData.name}</h2>
            <h3>Release Date:${infroData.releaseDate}</h3>
            <h5>Others:
              ${infroData.others.Bluetooth}
            </h5>
            <p>Sensors:${infroData.mainFeatures.sensors}</p>
     </div>       
            `
    phoneDatlic.appendChild(div)
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'none';

}


