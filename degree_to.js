function validate_cal2() {
    const ongsa = document.getElementById("ongsa")
    const lipda = document.getElementById("lipda")
    const philipda = document.getElementById("philipda")    
    const error = document.getElementById("error")    
  
    if (!ongsa.checkValidity()) {
        document.getElementById("alertDegree").innerHTML = ongsa.validationMessage
    } 
    if (!lipda.checkValidity()) {
        document.getElementById("alertLipda").innerHTML = lipda.validationMessage
    } 
    if (!philipda.checkValidity()) {
        document.getElementById("alertPhilipda").innerHTML = philipda.validationMessage
    } 
    if (!error.checkValidity()) {
        document.getElementById("alertError").innerHTML = error.validationMessage
    } 
    if (ongsa.checkValidity() && lipda.checkValidity() && philipda.checkValidity() && error.checkValidity()) {           
        document.getElementById("showResult_degreeTo").classList.remove("invisible")
        document.getElementById("showResult_degreeTo").classList.add("visible")

        document.getElementById("showResult_degreeTo1").classList.add("yellow")
        document.getElementById("showResult_degreeTo2").classList.add("purple")
        document.getElementById("showResult_degreeTo3").classList.add("purple")
        document.getElementById("showResult_degreeTo4").classList.add("blue")    

        document.getElementById("showResult_degreeTo1").innerHTML = `เวลาที่เข็มชั่วโมงกับเข็มนาทีทำมุมกันมีขนาด ${ongsa.value} องศา ${lipda.value} ลิปดา ${philipda.value} ฟิลิปดา มีค่ามุมคลาดเคลื่อน บวกหรือลบ ไม่เกิน ${error.value} ฟิลิปดา คือ` 
        
        let ongsaValue = parseInt(ongsa.value)
        let lipdaValue = parseInt(lipda.value)
        let philipdaValue = parseInt(philipda.value)
        let errorValue = parseInt(error.value)        
        let degree1 = ongsaValue+lipdaValue/60+philipdaValue/3600   

        let show1 = ""   
        let show2 = ""   
        for (let i = 0; i < 12; i++) {
            for (let j = 0; j < 60; j++) {
                for (let k = 0; k < 60; k++) {      
                    let degree2 = Math.abs(30*i-5.5*j-0.09166*k)                     
                    if (Math.abs(degree1-degree2) <= errorValue/3600) { 
                        show1 = show1 + `${i} นาฬิกา ${j} นาที ${k} วินาที<br> โดย ${convertDegree(degree2)}<br><hr>`                                               
                        show2 = show2 + `${i+12} นาฬิกา ${j} นาที ${k} วินาที<br> โดย ${convertDegree(degree2)}<br><hr>`                                               
                        document.getElementById("showResult_degreeTo2").innerHTML = show1                        
                        document.getElementById("showResult_degreeTo3").innerHTML = show2                       
                    }                       
                }                
            }            
        }  
        document.getElementById("showResult_degreeTo4").innerHTML = "หมายเหตุ : 1 องศา = 60 ลิปดา และ 1 ลิปดา = 60 ฟิลิปดา"    
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
  function reset_page2(){
    document.getElementById("showResult").classList.remove("visible")
    document.getElementById("showResult").classList.add("invisible")  

    document.getElementById("time").classList.remove("active")
    document.getElementById("time").classList.add("fade")

    document.getElementById("degree").classList.remove("fade")        
    document.getElementById("degree").classList.add("active")

    document.getElementById("nav-link1").classList.remove("active")     
    document.getElementById("nav-link2").classList.add("active")  
  }    
//   function reset_page2() {    
//     setTimeout(function(){location.reload()}, 100)
//   }
  

  
  