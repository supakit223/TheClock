function validate_cal2() {
    const ongsa = document.getElementById("ongsa")
    const lipda = document.getElementById("lipda")
    const philipda = document.getElementById("philipda")    
  
    if (!ongsa.checkValidity()) {
      document.getElementById("alertDegree").innerHTML = ongsa.validationMessage
    } 
    if (!lipda.checkValidity()) {
      document.getElementById("alertLipda").innerHTML = lipda.validationMessage
    } 
    if (!philipda.checkValidity()) {
      document.getElementById("alertPhilipda").innerHTML = philipda.validationMessage
    } 
    if (ongsa.checkValidity() && lipda.checkValidity() && philipda.checkValidity()) {   
    
      
      document.getElementById("showResult1").innerHTML = `ขณะเวลา ${hourShow} นาฬิกา ${minute.value} นาที ${second.value} วินาที`
      document.getElementById("showResult2").innerHTML = degreeComplete
      document.getElementById("showResult3").innerHTML = "หมายเหตุ : 1 องศา = 60 ลิปดา และ 1 ลิปดา = 60 ฟิลิปดา"
    } 
  }  
  function reset_page2() {
    document.getElementById('time').classList.remove("active")
    document.getElementById('degree').classList.remove("fade")
    document.getElementById('time').classList.add("fade")    
    document.getElementById('degree').classList.add("active")

    document.getElementById('nav-link1').classList.remove("active")     
    document.getElementById('nav-link2').classList.add("active")     
    
    setTimeout(function(){location.reload()}, 100)
  }
  

  
  