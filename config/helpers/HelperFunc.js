export const generateWeatherImage = (condition = '', isDay = false) => {
    let cond = '';
    let daytime = '';

    switch (condition.toLowerCase()) {
        case "clear":
        case "sunny":
            cond = "clear-";
            daytime = isDay ? "d" : "n";
            break;
        case "mostly sunny":
            cond = "sunny-";
            daytime = isDay ? "d" : "n";
            break;
        case "partly sunny":
            cond = "partsun-";
            daytime = isDay ? "d" : "n";
            break;
        case "scattered thunderstorms":
        case "scattered showers":
        case "thunderstorm":
        case "chance of storm":
            cond = "thunderstorm";
            break;
        case "showers":
        case "chance of rain":
        case "light rain":
            cond = "rainy";
            break;
        case "rain and snow":
        case "chance of snow":
            cond = "snowy";
            break;
        case "overcast":
        case "mist":
            cond = "windy";
            break;
        case "partly cloudy":
        case "mostly cloudy":
        case "Cloudy":
            cond = "cloudy-n";
            break;

        default:
            cond = "clear-";
            daytime = isDay ? "d" : "n";
            break;
    }
    return cond + daytime;
}