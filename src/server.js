const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4", whatsapp: "8998765422",
        bio: "Enthusiast of the best web & mobile development technologies.",
        subject: "Química",
        cost: "40",
        weekday: [
            0
        ],
        time_from: [
            720
        ],
        time_to: [
            1220
        ]
    },
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4", whatsapp: "8998765422",
        bio: "Enthusiast of the best web & mobile development technologies.",
        subject: "Química",
        cost: "40",
        weekday: [
            0
        ],
        time_from: [
            720
        ],
        time_to: [
            1220
        ]
    },
]

const express = require('express')
const server = express()

server.use(express.static("public"))
    .get("/", (req, res) => {
        return res.sendFile(__dirname + "/views/index.html")
    })
    .get("/study", (req, res) => {
        return res.sendFile(__dirname + "/views/study.html")
    })
    .get("/give-classes", (req, res) => {
        return res.sendFile(__dirname + "/views/give-classes.html")
    })

    .listen(5000)