import SearchCity from "./search-city";

export default function fetchData({city}) {
    const api = {
        key: "a1cbff707be4edcb35cb530eb679456d",
        baseURL: "https://api.openweathermap.org/data/2.5/",
      };

    const handleSearch = () => {
        fetch(`${api.baseURL}weather?q=${city}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then((result) => {
          console.log(result);
        })
      }
}