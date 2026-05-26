const topics = [

{
title:"Кездейсоқ төртбұрыш",

theory:`
Кездейсоқ төртбұрыштың ішкі бұрыштарының қосындысы 360° болады.

Егер төртбұрыш шеңберге сырттай сызылса:
a + c = b + d

Егер төртбұрыш шеңберге іштей сызылса:
α + γ = 180°

Төртбұрыштың ауданы:
S = 1/2 · d₁ · d₂ · sinφ
`,

example:{
problem:"Диагональдары 18 см және 24 см, бұрышы 30°.",
steps:[
"S = 1/2 · d₁ · d₂ · sinφ",
"S = 1/2 · 18 · 24 · sin30°",
"S = 108 см²"
]
},

tests:[
{
q:"Төртбұрыштың ішкі бұрыштарының қосындысы?",
options:["180°","270°","360°","540°"],
answer:"360°"
},
{
q:"Іштей сызылған төртбұрышта қарсы бұрыштар қосындысы?",
options:["90°","120°","180°","360°"],
answer:"180°"
}
]
},

{
title:"Параллелограмм",

theory:`
Параллелограмм — қарама-қарсы қабырғалары параллель болатын төртбұрыш.

Қасиеттері:
• Қарама-қарсы қабырғалары тең
• Қарама-қарсы бұрыштары тең
• Диагональдары қақ бөлінеді

Формулалар:
P = 2(a+b)

S = a·h

S = a·b·sinα
`,

example:{
problem:"a = 6 см, b = 9 см, α = 60°",
steps:[
"S = a·b·sinα",
"S = 6·9·sin60°",
"S = 27√3 см²"
]
},

tests:[
{
q:"Параллелограмм периметрі?",
options:["P=4a","P=2(a+b)","P=a+b","P=ab"],
answer:"P=2(a+b)"
},
{
q:"Іргелес бұрыштар қосындысы?",
options:["90°","120°","180°","360°"],
answer:"180°"
}
]
}

];

const menu = document.getElementById("menu");
const content = document.getElementById("content");

topics.forEach((topic,index)=>{

const btn = document.createElement("button");

btn.className = "menu-btn";

btn.textContent = `${index+1}. ${topic.title}`;

btn.onclick = ()=>showTopic(index);

menu.appendChild(btn);

});

function generateTests(topic){

let html = "";

topic.tests.forEach((test,index)=>{

html += `

<div class="question" id="q-${index}">

<p><b>${index+1}-сұрақ.</b> ${test.q}</p>

<div class="options">

${test.options.map(option=>`

<label class="option">

<input type="radio" name="q-${index}" value="${option}">

${option}

</label>

`).join("")}

</div>

<div class="feedback" id="fb-${index}"></div>

</div>

`;

});

return html;

}

function showTopic(index){

const topic = topics[index];

content.innerHTML = `

<div class="card">

<h2>${topic.title}</h2>

</div>

<div class="card">

<h3>Теориялық блок</h3>

<div class="formula">

${topic.theory}

</div>

</div>

<div class="card">

<h3>Мысал есеп</h3>

<p><b>${topic.example.problem}</b></p>

${topic.example.steps.map((step,i)=>`

<div class="example-step">

${i+1}-қадам: ${step}

</div>

`).join("")}

</div>

<div class="card">

<h3>Тест</h3>

<button class="check-btn" onclick="checkAnswers(${index})">

Тексеру

</button>

<div class="result" id="result"></div>

${generateTests(topic)}

</div>

`;

}

function checkAnswers(topicIndex){

const topic = topics[topicIndex];

let score = 0;

topic.tests.forEach((test,index)=>{

const selected = document.querySelector(`input[name="q-${index}"]:checked`);

const feedback = document.getElementById(`fb-${index}`);

const question = document.getElementById(`q-${index}`);

question.classList.remove("correct","wrong");

if(selected){

if(selected.value === test.answer){

score++;

question.classList.add("correct");

feedback.innerHTML = "Дұрыс!";

}else{

question.classList.add("wrong");

feedback.innerHTML = `
Қате. Дұрыс жауап: <b>${test.answer}</b>
`;

}

}else{

question.classList.add("wrong");

feedback.innerHTML = "Жауап таңдалмады";

}

});

const result = document.getElementById("result");

result.style.display = "block";

result.innerHTML = `
<h3>Нәтиже: ${score}/${topic.tests.length}</h3>
`;

}

showTopic(0);
