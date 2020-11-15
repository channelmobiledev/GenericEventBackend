const express = require("express");
const https = require("https");
const nodemon = require("nodemon");

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/pt/2016/mobile/actividades_evento/", (req, res) => {
  res.json({
    data: {
      "2016-08-20": [
        {
          id: 1,
          title: "Example Title",
          place: "Example Place",
          start: "2016-08-20 08:00:00",
          imageId: {},
          image: "Example",
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \nDonec commodo ut dolor ultrices pulvinar. \nAliquam erat volutpat. \nPellentesque commodo ornare elit, ac finibus magna. \nSed sollicitudin nulla quis tristique facilisis. \nMauris imperdiet, eros vel faucibus tempus, lorem nisi tristique velit, ut porta quam augue non enim. ",
          end: "2016-08-20 10:00:00",
        },
        {
          id: 2,
          title: "Example Title",
          place: "Example Place",
          start: "2016-08-20 10:00:00",
          imageId: {},
          image: "Example",
          descr: "Example Description",
          end: "2016-08-20 12:00:00",
        },
        {
          id: 3,
          title: "Example Title",
          place: "Example Place",
          start: "2016-08-20 14:00:00",
          imageId: {},
          image: "Example",
          descr: "Example Description",
          end: "2016-08-20 16:00:00",
        },
      ],
      "2016-08-21": [
        {
          id: 2,
          title: "Example Title",
          place: "Example Place",
          start: "2016-08-21 14:00:00",
          imageId: {},
          image: "Example",
          descr: "Example Description",
          end: "2016-08-21 15:00:00",
        },
      ],
    },
  });
});

app.get("/info/", (req, res) => {
  res.json({
    event: {
      name: "Generic Event App",
      url: "https://github.com/channelmobiledev/GenericEventApp",
      start: "2016-08-20 08:00:00",
      end: "2016-08-20 23:59:00",
    },
    tickets: {
      buy: {
        phisical: {
          available: yes,
          instructions: [
            "1. Find the ticket selling booth at the entrance of the event",
          ],
        },
        app: {
          available: yes,
          isTickedValidated: no,
          qr: "TODO",
        },
        digital: {
          available: yes,
          url: "http://gettickets.co/generic-event",
          instructions: [
            "1. Follow the link and purchase the digital ticket",
            "2. Get the event bracelet at the ticket selling booth",
          ],
        },
      },
      ticketTypes: [
        {
          name: "One day ticket",
          description: ["Access day 1 event"],
          price: "5€",
        },
        {
          name: "Two day ticket",
          description: ["Access day 1 event", "Access day 2 event"],
          price: "8€",
        },
        {
          name: "Digital Deluxe Ticket",
          description: [
            "Access the whole event",
            "Early access on the event",
            "Access to the backstage to meet the cosplayers",
          ],
          price: "9.99€",
        },
      ],
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
