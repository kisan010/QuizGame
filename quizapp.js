const questions = [
  {
    que: "1) what is the full form of lpg ?",
    a: "liquid petroleum gas",
    b: "locamite premium gastroli",
    c: "lemon parasite gas",
    d: "lucali pepite gas",
    correct: "a",
  },
  {
    que: "2) what is the capital of india ?",
    a: "mumbai",
    b: "delhi",
    c: "odisha",
    d: "karnatak",
    correct: "b",
  },
  {
    que: "3) what is currency of india ?",
    a: "yan",
    b: "peso",
    c: "dollar",
    d: "rupees",
    correct: "d",
  },
];

let index = 0;
let n = questions.length;
let optionInputs = document.querySelectorAll(".options");

function show() {
  const data1 = questions[index];
  let question = document.getElementById("question");
  question.innerHTML = data1.que;

  let option1 = document.getElementById("a");
  let option2 = document.getElementById("b");
  let option3 = document.getElementById("c");
  let option4 = document.getElementById("d");

  option1.innerHTML = data1.a;
  option2.innerHTML = data1.b;
  option3.innerHTML = data1.c;
  option4.innerHTML = data1.d;
  if (index == n - 1) document.getElementById("btn").innerHTML = "submit";

 
}
let score = 0;


function next() {
   const ans=   inputs();
   

  if (ans == questions[index].correct) {
    score++;
  }
  console.log(score);

  if (n == index + 1) {
    scores();
  } else {
    index++;
    show();

    //   or you can use optioninputs[0].nextElementSiblings.innerText=data.a like that b c d
  }
}

const inputs = () => {
  let iv;
  optionInputs.forEach(function (input) {
    console.log(input.checked);
    if (input.checked) {
       iv = input.value;
      console.log(iv);
    }
  })
  return iv;
};

show();

   function reset() {
  index = 0;
  score = 0;
  show();
}

function scores() {
  
  

  var box = document.querySelector(".box")
    .innerHTML = `<h1>Thank you for playing quiz </h1>
                     <h1>Your Score is:</h1>
                         <p>${score}</p> 
                          <button onclick="location.reload()">Reset</button> 
                          `
                          
  
}
