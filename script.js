const topics = [

{
title:"Кездейсоқ төртбұрыш",

theory:`

<div class="card">

<h2>Кездейсоқ төртбұрыштың қасиеттері</h2>

<p>
1) Ішкі бұрыштарының қосындысы 360°:
</p>

<div class="formula">
α + β + γ + θ = 360°
</div>

<img src="images/quad-properties-full.png" class="theory-img">

<br><br>

<p>
2) Егер төртбұрыш шеңберге сырттай сызылса,
онда оның қарсы жатқан қабырғаларының
қосындысы тең болады:
</p>

<div class="formula">
a + c = b + d
</div>

<img src="images/quad-outside-circle.png" class="theory-img">

<br><br>

<p>
3) Егер төртбұрыш шеңберге іштей сызылса,
онда оның қарсы жатқан бұрыштарының
қосындысы 180°-қа тең болады:
</p>

<div class="formula">
α + γ = 180°
<br>
β + θ = 180°
</div>

<img src="images/quad-inside-circle.png" class="theory-img">

</div>

<div class="card">

<h2>Кездейсоқ төртбұрыштың ауданы</h2>

<p>
1) Диагональдар мен олардың арасындағы бұрыш арқылы:
</p>

<div class="formula">
S = 1/2 · d₁ · d₂ · sinφ
</div>

<img src="images/quad-area-diagonal.png" class="theory-img">

<br><br>

<p>
2) Төртбұрышқа іштей сызылған шеңбердің
радиусы мен жартылай периметр арқылы:
</p>

<div class="formula">
S = p · r
</div>

<div class="formula">
p = (a + b + c + d) / 2
</div>

<div class="formula">
r — іштей сызылған шеңбер радиусы
</div>

<img src="images/quad-area-radius.png" class="theory-img">

<br><br>

<p>
3) Шеңберге іштей сызылған төртбұрыштың ауданы:
</p>

<div class="formula">
S = √((p-a)(p-b)(p-c)(p-d))
</div>

<div class="formula">
p = (a + b + c + d) / 2
</div>

<img src="images/quad-area-circle.png" class="theory-img">

</div>

`,

example:`

<h3>1-мысал</h3>

<img src="images/example1.png" class="example-img">

<div class="example-step">
120° + 80° + 2x + 2y = 360°
<br><br>
2x + 2y = 160°
<br>
x + y = 80°
</div>

<div class="example-step">
α + x + y = 180°
<br><br>
α + 80° = 180°
<br><br>
α = 100°
</div>

<div class="formula">
Жауабы: 100°
</div>

<br><br>

<h3>2-мысал</h3>

<img src="images/example2.png" class="example-img">

<div class="example-step">
2α - 30° + 60° = 180°
<br><br>
2α = 150°
<br><br>
α = 75°
</div>

<div class="formula">
Жауабы: 75°
</div>

<br><br>

<h3>3-мысал</h3>

<img src="images/example3.png" class="example-img">

<div class="example-step">
x + 2x = 4 + 11
<br><br>
3x = 15
<br><br>
x = 5
</div>

<div class="example-step">
AB = 5 см
<br>
CD = 10 см
</div>

<div class="formula">
Жауабы: 5 см; 10 см
</div>

<br><br>

<h3>4-мысал</h3>

<img src="images/example4.png" class="example-img">

<div class="example-step">
S = 1/2 · d₁ · d₂ · sinφ
<br><br>
S = 1/2 · 18 · 24 · sin30°
<br><br>
S = 108 см²
</div>

<div class="formula">
Жауабы: 108 см²
</div>

<br><br>

<h3>5-мысал</h3>

<img src="images/example5.png" class="example-img">

<div class="example-step">
x + y = 6 + 14
<br><br>
x + y = 20
</div>

<div class="example-step">
S = p · r
<br><br>
S = 20 · 4
<br><br>
S = 80 см²
</div>

<div class="formula">
Жауабы: 80 см²
</div>

`,

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
},

{
q:"Сырттай сызылған төртбұрышта қай теңдік дұрыс?",
options:["a+b=c+d","a+c=b+d","a²+b²=c²","a·c=b·d"],
answer:"a+c=b+d"
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

${topic.theory}

<div class="card">

<h3>Мысал есептер</h3>

${topic.example}

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
Қате. Дұрыс жауап:
<b>${test.answer}</b>
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
