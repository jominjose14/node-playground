const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=0ab4f38dbe09ef5dc9a05821afe69668&query=40,-75&units=f';

const request = http.request(url, response => {
    let data = '';

    response.on('data', chunk => {
        data += chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
})

request.on('error', error => {
    console.error(error);
});

request.end();