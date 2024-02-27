// let user = prompt("misollarni yechishga harak qilib koring")
let user2 = +prompt("necta misollar ishlamoqchisiz")

// while (isNaN(user2) || user2 == "0") {
//     user2 = prompt("iltimos qayta son kirgazing")
// }

for (let i = 0; i <= user2; i++) {
    
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

 
    if ( a == 1 ) {
        a = "*"
         
      var d = +prompt(b + " * " + c + "= ?"  )
        if (d == e ) {
            console.log("sizning javob togri " + d);
        }else{
            console.log("sizning javob notogri:" + d + " || togri javob " + f);
        }
    } else if (a == 2 ){
        a = "/"
        if (b < c) {
           a == 3 || a == 1
        }else{
            var k = +prompt(b + "/" + c + "= ?")
            if (k == f ) {
            console.log("sizning javob togri " + k);
            }else{
            console.log("sizning javob notogri:" + k + " || togri javob " + f);
           }
        }
    }else if( a == 3){
          a = "+"
          
    var l = +prompt(b + "+" + c + "= ?")
          if (l == g) {
            console.log("sizning javob togri " + l);
          }else{
            console.log("sizning javob notogri:" + l + " || togri javob " + g);
          }
    }else if(a == 4 ){
        a = "-"
        if (b < c ) {
            a == 3
        }else{
            var m = +prompt(b + "-" + c + "= ?")
            if (m == h) {
                console.log("sizning javob togri " + m);
            }else{
                console.log("sizning javob notogri:" + m + " || togri javob " + h);
            }
        }
   
    }else{
        a == "%"
      if (b < c ) {
        a == 1
      }else{
        var n = +prompt(b + "%" + c + "= ?")
        if (n == j) {
            console.log("sizning javob togri " + n);
        }else{
            console.log("sizning javob notogri:" + n + " || togri javob " + j);
        }
      }
  
    } 
}



for (let i = 1; i <= 10; i++) {

 let name = prompt("ismingizni kiriting")
 while (!isNaN(name)) {
    alert("iltimos son kirgazmang")
    name = prompt("ismingizni qayta kiritishga urining ")
 }
 let age = prompt("yoshingizni kiriting")
 while (isNaN(age) || age == "0") {
    age = +prompt("iltimos yoshingizni qayta kiriting")
 }

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
