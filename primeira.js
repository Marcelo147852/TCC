function  click1(){
    //data atual
    var dat = new Date()
    var d = dat.getUTCDate()
    var m = dat.getUTCMonth()+1
    var a = dat.getUTCFullYear()
     //window.alert(`${d}/${m}/${a}`)
    // data inserida
    var Di = window.document.getElementById('n')
    var Me = window.document.getElementById('m')
    var An = window.document.getElementById('a')
    var D = Number(Di.value)
    var M = Number(Me.value)
    var A = Number(An.value)
    // window.alert(`${D}/${M}/${A}`)
    if((a==A)&(m-M<2)){
        window.alert(`BCG ,Hepatite`)
    }else if((a==A)&(m-M<3)){
        window.alert(` Meningocócica C`)
     }else if((a==A)&(m-M<4)){
         window.alert( `Pentavalente, Vip, Peneumocócica 10v,Rotavirus Humano`)
     }else if((a==A)&(m-M<5)){
        window.alert(` Meningocócica C`)
     }else if((a==A)&(m-M<6)){
        window.alert(`  Pentavalente, Vip`) 
     }else if((a==A)&(m-M<9)){
        window.alert(` Febre Amarela`)
     }else if((a==A)&(m-M<9)){

     } 
     
}