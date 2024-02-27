let user = prompt("misollarni yechishga harak qilib koring")
let user2 = +prompt("necta misollar ishlamoqchisiz")

for (let i = 0; i < user2; i++) {
    
    let a = calculate(1, 5)
    let b = math(1, 1000)
    let c = math(1, 1000)
    let e = b * c
    let f = b / c
    let g = b + c
    let h = b - c
    let j = b % c  
    
    function calculate(min, max) {

        return Math.round(Math.random() * (max - min) + min)
    }
       
    function math(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }
    
   var d = +prompt(b + " * " + c + "= ?"  )
    
    if ( a == 1 ) {
        a = "*"
        if (d == e ) {
            console.log("sizning javob togri " + d);
        }else{
            console.log("sizning javob notogri:" + d + " || togri javob " + e);
        }
    } else if (a == 2 ){
        a = "/"
        if (d == f ) {
            console.log("sizning javob togri " + d);
        }else{
            console.log("sizning javob notogri:" + d + " || togri javob " + f);
        }
    }else if( a == 3){
          a = "+"
          if (d == g) {
            console.log("sizning javob togri " + d);
          }else{
            console.log("sizning javob notogri:" + d + " || togri javob " + h);
          }
    }else if(a ==4 ){
        a = "-"
        if (d == h) {
            console.log("sizning javob togri " + d);
        }else{
            console.log("sizning javob notogri:" + d + " || togri javob " + g);
        }
    }else{
        a == "%"
        if (d == j) {
            console.log("sizning javob togri " + d);
        }else{
            console.log("sizning javob notogri:" + d + " || togri javob " + j);
        }
    } 
}


for (let i = 1; i <= 10; i++) {

 let name = prompt("ismingizni kiriting")
 let age = prompt("yoshingizni kiriting")

   const users = {
      obj:{
        name:name,
        age:age
      },
   }
   for (const obj in users) {
   var c = "foydalanuvchi " + i 
   var o = "sizning ismingiz: " +  users[obj].name
   var u = "sizning yosh: " + users[obj].age
   }
   console.log(c);
   console.log(o);
   console.log(u);
}
