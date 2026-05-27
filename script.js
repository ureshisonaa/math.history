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

<h3>1-мысал. ∠AED бұрышының градустық өлшемін табыңыз</h3>

<img src="images/example1-top.png" class="example-img">

<div class="example-step">

<h4>Шешімі:</h4>

<p>
Төртбұрыштың ішкі бұрыштарының қосындысы 360°:
</p>

<div class="formula">
120° + 80° + 2x + 2y = 360°
</div>

<div class="formula">
2x + 2y = 160°
</div>

<div class="formula">
x + y = 80°
</div>

</div>

<img src="images/example1-solution.png" class="example-img">

<div class="example-step">

<p>
Үшбұрыштың ішкі бұрыштарының қосындысы 180°:
</p>

<div class="formula">
α + x + y = 180°
</div>

<div class="formula">
α + 80° = 180°
</div>

<div class="formula">
α = 100°
</div>

</div>

<div class="formula">
Жауабы: 100°
</div>

`,

tests:[

{
q:"x + y өрнегінің мәнін табыңыз.",
img:"images/test1.png",
options:["165°","175°","185°","195°"],
answer:"185°"
},

{
q:"Шеңберге сырттай сызылған ABCD төртбұрышының периметрін табыңыз.",
img:"images/test2.png",
options:["22","24","26","28"],
answer:"26"
},

{
q:"ABCD төртбұрышының ауданын табыңыз.",
img:"images/test3.png",
options:["48","54","60","72"],
answer:"60"
},

{
q:"x-тің мәнін табыңыз.",
img:"images/test4.png",
options:["10","11","12","13"],
answer:"12"
},

{
q:"x-тің мәнін табыңыз.",
img:"images/test5.png",
options:["30°","45°","60°","75°"],
answer:"45°"
},

{
q:"ABCD төртбұрышының ауданын табыңыз.",
img:"images/test6.png",
options:["10","12","14","16"],
answer:"12"
},

{
q:"AB мен CD қабырғаларын табыңыз.",
options:[
"AB=6, CD=2",
"AB=9, CD=3",
"AB=12, CD=4",
"AB=15, CD=5"
],
answer:"AB=9, CD=3"
},

{
q:"Қалған екі қабырғаның үлкенін табыңыз.",
options:["18","19","20","21"],
answer:"21"
},

{
q:"Қалған екі қабырғаның кішісін табыңыз.",
options:["4","5","6","7"],
answer:"6"
},

{
q:"Төртбұрыштың ауданын табыңыз.",
options:["70√3","80√3","90√3","100√3"],
answer:"70√3"
},

{
q:"ABCD төртбұрышының ауданын табыңыз.",
options:["18","20","22","24"],
answer:"21"
},

{
q:"Төртбұрыштың ауданын табыңыз.",
options:["70√3","80√3","121√3","140√3"],
answer:"70√3"
}

]

}

,
{
title:"Параллелограмм",

theory:`

<div class="card">

<h2>Параллелограмм</h2>

<div class="formula">
Қарама-қарсы қабырғалары параллель болатын төртбұрыш параллелограмм деп аталады.
</div>

</div>

<div class="card">

<h2>Параллелограммның қасиеттері мен белгілері</h2>

<p>1) Қарама-қарсы қабырғалары тең:</p>

<div class="formula">
P = 2(a+b)
</div>

<img src="images/parallelogram-property1.png" class="theory-img">

<br><br>

<p>2) Қарама-қарсы бұрыштары тең:</p>

<div class="formula">
α + β = 180°
</div>

<img src="images/parallelogram-property2.png" class="theory-img">

<br><br>

<p>3) Диагональдар қиылысу нүктесімен қақ бөлінеді:</p>

<img src="images/parallelogram-property3.png" class="theory-img">

<br><br>

<p>4) Диагональдарының квадраттарының қосындысы:</p>

<div class="formula">
d₁² + d₂² = 2(a²+b²)
</div>

<img src="images/parallelogram-property4.png" class="theory-img">

</div>

<div class="card">

<h2>Параллелограммның ауданы</h2>

<p>1) Қабырға және оған түсірілген биіктік арқылы:</p>

<div class="formula">
S = a · hₐ
<br>
S = b · hᵦ
</div>

<img src="images/parallelogram-area1.png" class="theory-img">

<br><br>

<p>2) Екі іргелес қабырға мен бұрыш арқылы:</p>

<div class="formula">
S = a · b · sinα
</div>

<img src="images/parallelogram-area2.png" class="theory-img">

<br><br>

<p>3) Диагональдар арқылы:</p>

<div class="formula">
S = (d₁ · d₂ · sinφ)/2
</div>

<img src="images/parallelogram-area3.png" class="theory-img">

<br><br>

<p>4) Әр диагональ параллелограмды тең екі үшбұрышқа бөледі.</p>

<img src="images/parallelogram-area4.png" class="theory-img">

<br><br>

<p>5) Екі диагональ параллелограмды төрт тең ауданға бөледі.</p>

<img src="images/parallelogram-area5.png" class="theory-img">

</div>

`,

example:`

<h3>Мысал</h3>

<img src="images/parallelogram-example.png" class="example-img">

<div class="example-step">

Параллелограмма бір қабырғаға іргелес екі бұрыштың қосындысы 180°-қа тең:

<div class="formula">
2α − 20° + 2α + 20° = 180°
</div>

<div class="formula">
4α = 180°
</div>

<div class="formula">
α = 45°
</div>

</div>

<div class="example-step">

Параллелограмның қарама-қарсы бұрыштары тең:

<div class="formula">
∠C = ∠A
</div>

<div class="formula">
∠C = 2α − 20°
</div>

<div class="formula">
∠C = 2·45° − 20°
</div>

<div class="formula">
∠C = 70°
</div>

</div>

<div class="formula">
Жауабы: 70°
</div>

`,

tests:[

{
q:"ADC бұрышының градустық өлшемін табыңыз.",
img:"images/par-test1.png",
options:["60°","90°","120°","150°"],
answer:"120°"
},

{
q:"x-тің мәнін табыңыз.",
img:"images/par-test2.png",
options:["12","14","16","18"],
answer:"16"
},

{
q:"Параллелограммның периметрін табыңыз.",
img:"images/par-test3.png",
options:["18","20","22","24"],
answer:"20"
},

{
q:"Параллелограммның ауданын табыңыз.",
img:"images/par-test4.png",
options:["36","48","60","72"],
answer:"72"
},

{
q:"Параллелограммның ауданын табыңыз.",
img:"images/par-test5.png",
options:["36√3","54√3","72√3","108√3"],
answer:"54√3"
},

{
q:"Параллелограммның ауданын табыңыз.",
img:"images/par-test6.png",
options:["24","36","48","72"],
answer:"36"
},

{
q:"x-тің мәнін табыңыз.",
img:"images/par-test7.png",
options:["25°","35°","45°","55°"],
answer:"35°"
},

{
q:"Параллелограммның ауданын табыңыз.",
options:["45√5","54√5","63√5","72√5"],
answer:"45√5"
},

{
q:"Параллелограммның ауданын табыңыз.",
options:["24","30","36","42"],
answer:"30"
},

{
q:"Параллелограммның ауданын табыңыз.",
img:"images/par-test10.png",
options:["40","50","60","70"],
answer:"60"
},

{
q:"Екінші қабырғаның ұзындығын табыңыз.",
options:["10","12","15","18"],
answer:"12"
},

{
q:"Параллелограммның ауданын табыңыз.",
options:["96","108","120","132"],
answer:"120"
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

${test.img ? `
<img src="${test.img}" class="test-img">
` : ""}

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
