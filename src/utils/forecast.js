const request = require('request');

const forecast = (lat, long, callback) => {
    const url = "https://api.darksky.net/forecast/c8e27a919c2d71714dcc29d0b4f659c6/" + lat + "," + long + "?units=si";

    request({ url, json: true }, (err, { body }) => {
        if (err) {
            callback('Unable to connect to Weather Service!');
        } else if (body.error) {
            callback('Unable to find location!')
        } else {
            const curr = body.currently;
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + curr.temperature + ' degrees out. There is a ' + curr.precipProbability + '% chance of rain.')
        }
    });
}

module.exports = forecast;