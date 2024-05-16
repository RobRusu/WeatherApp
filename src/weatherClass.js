export class Weather {
  constructor(
    country,
    date,
    city,
    region,
    feelsC,
    feelsF,
    windKPH,
    windMPH,
    humidity,
    tempC,
    tempF,
    forecast
  ) {
    this.country = country;
    this.date = date;
    this.city = city;
    this.region = region;
    this.feelsC = feelsC;
    this.feelsF = feelsF;
    this.windKPH = windKPH;
    this.windMPH = windMPH;
    this.humidity = humidity;
    this.tempC = tempC;
    this.tempF = tempF;
    this.forecast = forecast;
  }

  splitDate(date) {
    const splitDate = date.split(" ");
    return splitDate;
  }
}
