const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_val= document.getElementById("temp_val");
const temp_status = document.getElementById("temp_status");
const data_hide = document.querySelector(".middle_layer");

let x;
let y;

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal=== ""){
        city_name.innerText = "Please write the name before search";
        data_hide.classList.add("data_hide");
    
    }

    else {
        try{
         let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=428f63b899de32690f8f77bc12bd55fb`
         const response = await fetch(url);
         const data = await response.json();
         const arrData = [data];
         
         city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;

         x= arrData[0].main.temp;
         y= (x-273).toFixed(0);
         temp_val.innerText = y;
        //  temp_val.innerText = arrData[0].main.temp;
         tempMood= arrData[0].weather[0].main;
           console.log(data);
         if(tempMood == "Clear"){
             temp_status.innerHTML =
              "<i class='fa fa-sun' style='color: #eccc68;'></i>";
         } else if(tempMood=="Clouds"){
            temp_status.innerHTML =
            "<i class='fa fa-cloud' style='color: #f1f2f6;'></i>"; 
         } else if(tempMood=="Rain"){
            temp_status.innerHTML =
            "<i class='fa fa-rain' style='color: #a4b0be;'></i>"; 
         } else{
            temp_status.innerHTML =
            "<i class='fa fa-sun' style='color: #eccc68;'></i>"; 
         }
         data_hide.classList.remove("data_hide");
        }catch{
            city_name.innerText = "Plz enter the city name properly";
            data_hide.classList.add("data_hide");
        }
    }

}


submitBtn.addEventListener("click", getInfo);