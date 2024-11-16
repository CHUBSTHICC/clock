const clock = document.querySelector('.clock')

clock.addEventListener('load', tick)

function tick()
{
    const now = new Date()
    const h = now.getHours()
    const m = now.getMinutes()
    const s = now.getSeconds()
    const d = now.getDate()
    const y = now.getFullYear()
    const date = new Date() // Creates a Date object for the current date and time
    const monthIndex = date.getMonth()
     // Returns the month index (0-11)
    
    const minute = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56 ,57, 58, 59]
    const minName = minute[m]
    const second = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56 ,57, 58, 59]
    const secName = second[s]
    const isPM = h >= 12
    let ampm = "AM"
    const dd = now.getDay()
    const day = ["Error", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const daday = day[dd]
    if(isPM == true)
    {
        ampm = "PM"
    }
    const hours12 = h % 12 || 12
    // Convert month index to month name (optional)
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const monthName = monthNames[monthIndex]
        const html = `
        <span>${daday} </span?>
        <span>${monthName} </span?>    
        <span>${d},</span?>
        <span>${y}</span?>
        <br>

        <span>${hours12} :</span?>
        <span>${minName} :</span?>
        <span>${secName} </span?>
        <span>${ampm} </span?>
        `    

    clock.innerHTML = html

}

setInterval(tick, 1000)
