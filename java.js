const celciusInput = document.getElementById("celcius");
const fahrenheitInput = document.getElementById("fahrenheit");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i< inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);

       switch (e.target.name) {

        case "fahrenheit":
                celciusInput.value = (value - 32) / 1.8;
               
               break;
           case "celcius":
               fahrenheitInput.value = (value * 1.8) + 32;

               
               break;
               
               
       }
       
        
    });
}

        //a function that creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh"
        function create(n){
            var n;
            var arr = [];
            for (i=1; i<=n; i++){
                if (i%2==0 && i%3==0 && i%5==0){
                   arr.push("yu-gi-oh");
                }else  if (i%2==0 && i%3==0){
                   arr.push("yu-gi");
                }else  if (i%2==0 && i%5==0){
                   arr.push("yu-oh");
                } else  if (i%3==0 && i%5==0){
                   arr.push("gi-oh");
                } else  if (i%5==0){
                   arr.push("oh");
                } else  if (i%3==0){
                   arr.push("gi");
                } else  if (i%2==0){
                   arr.push("yu");
                } 
                else{
                   arr.push(i);
                }
              console.log(arr);
            }
            return arr;
           }
           return ans;
     }}
checkYuGiOh(10);
checkYuGiOh("5");
checkYuGiOh("fizzbuzz is meh");







