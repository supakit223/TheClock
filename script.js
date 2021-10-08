function validate_cal() {
  const hour = document.getElementById("hour")
  const minute = document.getElementById("minute")
  const second = document.getElementById("second")
  const hourShow = hour.value  

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
    if (hour.value > 12) {
      hour.value = hour.value - 12
    }
    const degreeDouble = Math.abs(30*hour.value-5.5*minute.value-0.09166*second.value)
    const degreeComplete = convertDegree(degreeDouble)
    document.getElementById("showResult1").innerHTML = `ขณะเวลา ${hourShow} นาฬิกา ${minute.value} นาที ${second.value} วินาที`
    document.getElementById("showResult2").innerHTML = degreeComplete
  } 
} 

function convertDegree(number) {
  const degree = Math.floor(number) //องศา
  const num1 = number - degree //เลขทศนิยม

  const lipda = Math.floor(num1*60) //ลิปดา
  const num2 = num1*60 - lipda //เลขทศนิยม

  const philipda = Math.floor(num2*60) //ฟิลิปดา
  return `เข็มชั่วโมงและเข็มนาทีทำมุมกันมีขนาด ${degree}องศา ${lipda}ลิปดา ${philipda}ฟิลิปดา`
}

