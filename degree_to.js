function validate_cal2() {
    const ongsa = document.getElementById("ongsa")
    const lipda = document.getElementById("lipda")
    const philipda = document.getElementById("philipda")    
    const error = document.getElementById("error")    
  
    if (!ongsa.checkValidity()) {
        document.getElementById("alertDegree").innerHTML = ongsa.validationMessage        
    }else{
        document.getElementById("alertDegree").classList.remove("visible")
        document.getElementById("alertDegree").classList.add("invisible")
    }
    if (!lipda.checkValidity()) {
        document.getElementById("alertLipda").innerHTML = lipda.validationMessage
    }else{
        document.getElementById("alertLipda").classList.remove("visible")
        document.getElementById("alertLipda").classList.add("invisible")
    } 
    if (!philipda.checkValidity()) {
        document.getElementById("alertPhilipda").innerHTML = philipda.validationMessage
    }else{
        document.getElementById("alertPhilipda").classList.remove("visible")
        document.getElementById("alertPhilipda").classList.add("invisible")
    }
    if (!error.checkValidity()) {
        document.getElementById("alertError").innerHTML = error.validationMessage
    }else {
        document.getElementById("alertError").classList.remove("visible")
        document.getElementById("alertError").classList.add("invisible")
    }
    if (ongsa.checkValidity() && lipda.checkValidity() && philipda.checkValidity() && error.checkValidity()) {  
        document.getElementById("alertDegree").classList.remove("visible")
        document.getElementById("alertDegree").classList.add("invisible")
        document.getElementById("alertLipda").classList.remove("visible")
        document.getElementById("alertLipda").classList.add("invisible")
        document.getElementById("alertPhilipda").classList.remove("visible")
        document.getElementById("alertPhilipda").classList.add("invisible")
        document.getElementById("alertError").classList.remove("visible")
        document.getElementById("alertError").classList.add("invisible")
        
        document.getElementById("showResult_degreeTo").classList.remove("invisible")
        document.getElementById("showResult_degreeTo").classList.add("visible")
        document.getElementById("showResult_degreeTo3").classList.remove("invisible")
        document.getElementById("showResult_degreeTo3").classList.add("visible")

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
        let degree2 = 360-ongsaValue+lipdaValue/60+philipdaValue/3600   
        
        let show1 = ""   
        let show2 = ""   
        let count = 0
        for (let i = 0; i < 12; i++) {
            for (let j = 0; j < 60; j++) {
                for (let k = 0; k < 60; k++) {      
                    let degree3 = Math.abs(30*i-5.5*j-0.09166*k)                     
                    if (Math.abs(degree1-degree3) <= errorValue/3600 || Math.abs(degree2-degree3) <= errorValue/3600) { 
                        count++
                        if (degree3 > 180) {
                            degree3 = 360 - degree3
                        }
                        show1 = show1 + `${i} นาฬิกา ${j} นาที ${k} วินาที<br> โดย ${convertDegree(degree3)}<br><hr>`                                               
                        show2 = show2 + `${i+12} นาฬิกา ${j} นาที ${k} วินาที<br> โดย ${convertDegree(degree3)}<br><hr>`                                                 
                    }            
                }                
            }            
        } 
        document.getElementById("showResult_degreeTo2").innerHTML = show1                        
        document.getElementById("showResult_degreeTo3").innerHTML = show2   
        if (count == 0) {
            document.getElementById("showResult_degreeTo2").innerHTML = "ไม่มีเวลาที่สอดคล้อง"
            document.getElementById("showResult_degreeTo3").classList.add("invisible")
        }
        document.getElementById("showResult_degreeTo4").innerHTML = "หมายเหตุ : 1 องศา = 60 ลิปดา และ 1 ลิปดา = 60 ฟิลิปดา"    
    }
    else{
        document.getElementById("showResult_degreeTo").classList.remove("visible")
        document.getElementById("showResult_degreeTo").classList.add("invisible")
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
  function reset_page2() {   
    document.getElementById("time").classList.remove("active")
    document.getElementById("time").classList.add("fade")

    document.getElementById("degree").classList.remove("fade")        
    document.getElementById("degree").classList.add("active")

    document.getElementById("nav-link1").classList.remove("active")     
    document.getElementById("nav-link2").classList.add("active")  

    setTimeout(function(){location.reload()}, 100)
  }  
//   function reset_page2(){
//     document.getElementById("showResult").classList.remove("visible")
//     document.getElementById("showResult").classList.add("invisible")  

//     document.getElementById("time").classList.remove("active")
//     document.getElementById("time").classList.add("fade")

//     document.getElementById("degree").classList.remove("fade")        
//     document.getElementById("degree").classList.add("active")

//     document.getElementById("nav-link1").classList.remove("active")     
//     document.getElementById("nav-link2").classList.add("active")  
//   }    
  

  
  