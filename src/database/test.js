const Database = require('./db')
const createProffy = require('./createProffy')
Database.then(async(db) => {

    proffyValue = {
        name: "Genival",
        avatar: "https://avatars1.githubusercontent.com/u/36050566?s=460&u=5019a066069f95950853d1f348b27a9a019497a9&v=4",
        whatsapp: "1122334455",
        bio: "VIdadadad",
    }

    classValue = {
        subject: "1",
        cost: "20",
    }

    classScheduleValue = [{
        weekday: 1,
        time_from: 720,
        time_to: 1220
    }]

  // await createProffy(db, {proffyValue, classValue, classScheduleValue})
    
    const selectdProffys = await db.all("SELECT * FROM proffys")

  //  console.log(selectdProffys)

    const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
    `
    )
    //console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = 1
    `)
 //   console.log(selectClassesSchedules)
})