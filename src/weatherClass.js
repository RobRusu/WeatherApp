export class Weather {
  constructor(
    country,
    date,
    tomorrowDate,
    dayAfterDate,
    city,
    feelsC,
    feelsF,
    windKPH,
    windMPH,
    humidity,
    tempC,
    tempF,
    isDay,
    forecast,
    tomorrowForecast,
    dayAfterForecast,
    todaysMinC,
    todaysMaxC,
    todaysMinF,
    todaysMaxF,
    tomorrowMinC,
    tomorrowMaxC,
    tomorrowMinF,
    tomorrowMaxF,
    dayAfterMinC,
    dayAfterMaxC,
    dayAfterMinF,
    dayAfterMaxF,
    todayRainChance
  ) {
    this.country = country;
    this.date = date;
    this.tomorrowDate = tomorrowDate;
    this.dayAfterDate = dayAfterDate;
    this.city = city;
    this.feelsC = feelsC;
    this.feelsF = feelsF;
    this.windKPH = windKPH;
    this.windMPH = windMPH;
    this.humidity = humidity;
    this.tempC = tempC;
    this.tempF = tempF;
    this.isDay = isDay;
    this.forecast = forecast;
    this.tomorrowForecast = tomorrowForecast;
    this.dayAfterForecast = dayAfterForecast;
    this.todaysMinC = todaysMinC;
    this.todaysMaxC = todaysMaxC;
    this.todaysMinF = todaysMinF;
    this.todaysMaxF = todaysMaxF;
    this.tomorrowMinC = tomorrowMinC;
    this.tomorrowMaxC = tomorrowMaxC;
    this.tomorrowMinF = tomorrowMinF;
    this.tomorrowMaxF = tomorrowMaxF;
    this.dayAfterMinC = dayAfterMinC;
    this.dayAfterMaxC = dayAfterMaxC;
    this.dayAfterMinF = dayAfterMinF;
    this.dayAfterMaxF = dayAfterMaxF;
    this.todayRainChance = todayRainChance;
  }

  splitDate(date) {
    const splitDate = date.split(" ");
    return splitDate;
  }
}
