function showTopic(index){

const topic = topics[index];

content.innerHTML = `

<div class="card">

<h2>${topic.title}</h2>

</div>

<div class="card">

<h3>Теориялық блок</h3>

${topic.theory}

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
