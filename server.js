const express = require('express')
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/pt/2016/mobile/actividades_evento/', (req, res) => {
    res.json({
        "data":  {
            "2016-08-20": [
                {
                    "id": 1,
                    "title": "Example Title",
                    "place": "Example Place",
                    "start": "2016-08-20 08:00:00",
                    "imageId": {},
                    "image": "Example",
                    "descr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \nDonec commodo ut dolor ultrices pulvinar. \nAliquam erat volutpat. \nPellentesque commodo ornare elit, ac finibus magna. \nSed sollicitudin nulla quis tristique facilisis. \nMauris imperdiet, eros vel faucibus tempus, lorem nisi tristique velit, ut porta quam augue non enim. ",
                    "end": "2016-08-20 10:00:00"
                },
                {
                    "id": 2,
                    "title": "Example Title",
                    "place": "Example Place",
                    "start": "2016-08-20 10:00:00",
                    "imageId": {},
                    "image": "Example",
                    "descr": "Example Description",
                    "end": "2016-08-20 12:00:00"
                },
                {
                    "id": 3,
                    "title": "Example Title",
                    "place": "Example Place",
                    "start": "2016-08-20 14:00:00",
                    "imageId": {},
                    "image": "Example",
                    "descr": "Example Description",
                    "end": "2016-08-20 16:00:00"
                }
            ],
            "2016-08-21": [
                {
                    "id": 2,
                    "title": "Example Title",
                    "place": "Example Place",
                    "start": "2016-08-21 14:00:00",
                    "imageId": {},
                    "image": "Example",
                    "descr": "Example Description",
                    "end": "2016-08-21 15:00:00"
                }
            ],
        }
    });
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});