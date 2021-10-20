function validate_cal() {
  const hour = document.getElementById("hour")
  const minute = document.getElementById("minute")
  const second = document.getElementById("second")
  const hourShow = hour.value  
  let hourcal = hour.value

  if (!hour.checkValidity()) {
    document.getElementById("alertHour").innerHTML = hour.validationMessage
  }else{
    document.getElementById("alertHour").innerHTML = ""
  } 
  if (!minute.checkValidity()) {
    document.getElementById("alertMinute").innerHTML = minute.validationMessage
  }else{
    document.getElementById("alertMinute").innerHTML = ""    
  } 
  if (!second.checkValidity()) {
    document.getElementById("alertSecond").innerHTML = second.validationMessage
  }else{
    document.getElementById("alertSecond").innerHTML = ""          
  } 
  if (hour.checkValidity() && minute.checkValidity() && second.checkValidity()) {   
    if (hourcal > 12) {
      hourcal = hourcal - 12
    }
    let degreeDouble = Math.abs(30*hourcal-5.5*minute.value-0.09166*second.value)
    if (degreeDouble > 180) {
      degreeComplete = convertDegree(360 - degreeDouble)
    }else{
      degreeComplete = convertDegree(degreeDouble)
    }
    
    document.getElementById("showResult1").innerHTML = `ขณะเวลา ${hourShow} นาฬิกา ${minute.value} นาที ${second.value} วินาที`
    document.getElementById("showResult2").innerHTML = degreeComplete
    document.getElementById("showResult3").innerHTML = "หมายเหตุ : 1 องศา = 60 ลิปดา และ 1 ลิปดา = 60 ฟิลิปดา"

    document.getElementById("alertHour").innerHTML = ""  
    document.getElementById("alertMinute").innerHTML = ""  
    document.getElementById("alertSecond").innerHTML = ""  

    document.getElementById("showResult").classList.remove("invisible")
    document.getElementById("showResult").classList.add("visible")

    document.getElementById("showResult1").classList.add("yellow")
    document.getElementById("showResult2").classList.add("purple")
    document.getElementById("showResult3").classList.add("blue")    
  }else{
    document.getElementById("showResult").classList.remove("visible")
    document.getElementById("showResult").classList.add("invisible")
  } 
}

function convertDegree(number) {
  const degree = Math.floor(number) //องศา
  const num1 = number - degree //เลขทศนิยม

  const lipda = Math.floor(num1*60) //ลิปดา
  const num2 = num1*60 - lipda //เลขทศนิยม

  const philipda = Math.floor(num2*60) //ฟิลิปดา
  return `เข็มชั่วโมงและเข็มนาทีทำมุมกันมีขนาด ${degree} องศา ${lipda} ลิปดา ${philipda} ฟิลิปดา`
}
function reset_page() {
  document.getElementById("time").classList.remove("fade")
  document.getElementById("time").classList.add("active")

  document.getElementById("degree").classList.remove("active")        
  document.getElementById("degree").classList.add("fade")

  document.getElementById("nav-link2").classList.remove("active")  
  document.getElementById("nav-link1").classList.add("active") 
  
  setTimeout(function(){location.reload()}, 100)
}
// function reset_page() {
//   document.getElementById("showResult").classList.remove("visible")
//   document.getElementById("showResult").classList.add("invisible")  

//   document.getElementById("time").classList.remove("fade")
//   document.getElementById("time").classList.add("active")

//   document.getElementById("degree").classList.remove("active")        
//   document.getElementById("degree").classList.add("fade")

//   document.getElementById("nav-link2").classList.remove("active")  
//   document.getElementById("nav-link1").classList.add("active")      
// }

