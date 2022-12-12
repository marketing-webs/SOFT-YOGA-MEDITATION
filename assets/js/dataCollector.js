// Data Collector as external include

let ip, country_code, city, latitude, longitude, postal;

let bundle;

const date = new Date();

const collectData = () => {
  fetch("https://ipwho.is")
    .then((response) => response.json())
    .then((data) => {
      ip = data.ip;
      country_code = data.country_code;
      city = data.city;
      latitude = data.latitude;
      longitude = data.longitude;
      postal = data.postal;
    })
    .then(() => {
      bundle = {
        ip: ip,
        country_code: country_code,
        city: city,
        latitude: String(latitude),
        longitude: String(longitude),
        postal: postal,
        date: date,
      };
      let headers = new Headers();
      headers.append("Content-Type", "application/json");

      console.log(JSON.stringify(bundle));
      fetch(
        "https://yeb4d2bpv4.execute-api.eu-central-1.amazonaws.com/staging",
        {
          method: "POST",
          body: JSON.stringify(bundle),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
};

// Logging in console all fields
const logToConsole = () => {
  console.log(geolocation);
};

// Collect all information after page load
window.onload = () => {
  collectData();
  // Execute log
  // logToConsole();
};
