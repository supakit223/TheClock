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
        document.getElementById("showResult1").innerHTML = `เวลาที่เข็มชั่วโมงกับเข็มนาทีทำมุมกันมีขนาด ${ongsa.value} องศา ${lipda.value} ลิปดา ${philipda.value} ฟิลิปดา คือ` 
        
        let ongsaValue = parseInt(ongsa.value)
        let lipdaValue = parseInt(lipda.value)
        let philipdaValue = parseInt(philipda.value)
        
        let degree1 = ongsaValue+lipdaValue/60+philipdaValue/3600          
        for (let i = 0; i < 12; i++) {
            for (let j = 0; j < 60; j++) {
                for (let k = 0; k < 60; k++) {      
                    let degree2 = Math.abs(30*i-5.5*j-0.09166*k)                          
                    
                    // if (Math.abs(degree1-degree2) < 0.001) {                        
                    //     document.getElementById("showResult2").innerHTML = `${i} นาฬิกา ${j} นาที ${k} วินาที <br>`
                    //     document.getElementById("showResult3").innerHTML = "หมายเหตุ : 1 องศา = 60 ลิปดา และ 1 ลิปดา = 60 ฟิลิปดา"
                    // }                        

                    if (Math.abs(degree1-degree2) < 0.01) {     
                        console.log(`i=${i} j=${j} k=${k}`)
                        console.log(degree1)
                        console.log(degree2)
                        console.log(`ผลต่างของมุม = ${Math.abs(degree1-degree2)}`)
                    }
                }                
            }            
        }      
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
  

  
  