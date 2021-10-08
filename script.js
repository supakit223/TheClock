function validation() {
    const hour = document.getElementById("hour")
    const minute = document.getElementById("minute")
    const second = document.getElementById("second")
    if (!hour.checkValidity()) {
      document.getElementById("alertHour").innerHTML = hour.validationMessage
    }
    if (!minute.checkValidity()) {
      document.getElementById("alertMinute").innerHTML = minute.validationMessage
    }
    if (!second.checkValidity()) {
      document.getElementById("alertSecond").innerHTML = second.validationMessage
    }    
    if (hour.checkValidity() && minute.checkValidity() && second.checkValidity()) {
        result()
    }
}
function result() {
    const result = Math.abs(-999)
    document.getElementById("showResult2").innerHTML = result
}
