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

,
{
title:"Ромб",

theory:`

<div class="card">

<h2>Ромб</h2>

<div class="formula">
Барлық қабырғалары тең болатын параллелограмм ромб деп аталады.
</div>

</div>

<div class="card">

<h2>Ромбтың қасиеттері мен белгілері</h2>

<p>1) Барлық қабырғалары тең:</p>

<div class="formula">
P = 4a
</div>

<img src="images/rhomb-property1.png" class="theory-img">

<br><br>

<p>
2) Диагональдар ішкі бұрыштардың биссектрисалары
болып табылады және қиылысу нүктесінде қақ бөлінеді:
</p>

<img src="images/rhomb-property2.png" class="theory-img">

<br><br>

<p>
3) Іштей сызылған шеңбердің радиусы
биіктіктің жартысына тең:
</p>

<div class="formula">
r = h / 2
</div>

<img src="images/rhomb-property3.png" class="theory-img">

</div>

<div class="card">

<h2>Ромбтың ауданы</h2>

<p>1) Қабырға және биіктік арқылы:</p>

<div class="formula">
S = a · h
</div>

<img src="images/rhomb-area1.png" class="theory-img">

<br><br>

<p>2) Қабырға және бұрыш арқылы:</p>

<div class="formula">
S = a² · sinα
</div>

<img src="images/rhomb-area2.png" class="theory-img">

<br><br>

<p>3) Диагональдары арқылы:</p>

<div class="formula">
S = d₁ · d₂ / 2
</div>

<img src="images/rhomb-area3.png" class="theory-img">

</div>

`,

example:`

<h3>Мысал</h3>

<img src="images/rhomb-example.png" class="example-img">

<div class="example-step">

Ромбтың диагональдары өзара перпендикуляр
және қиылысу нүктесінде қақ бөлінеді.

</div>

<div class="example-step">

Пифагор теоремасы бойынша:

<div class="formula">
a² = 3² + 4²
</div>

<div class="formula">
a² = 25
</div>

<div class="formula">
a = 5
</div>

</div>

<div class="example-step">

Ромбтың периметрі:

<div class="formula">
P = 4a
</div>

<div class="formula">
P = 4 · 5 = 20
</div>

</div>

<div class="formula">
Жауабы: 20 см
</div>

`,

tests:[

{
q:"Диагональдары 10 см және 24 см болатын ромбтың периметрін табыңыз.",
options:["40","48","52","60"],
answer:"52"
},

{
q:"Ромбтың ауданы 64 см². Бір диагоналі екіншісінен 2 есе үлкен. Диагональдарын табыңыз.",
options:[
"4 және 8",
"8 және 16",
"6 және 12",
"10 және 20"
],
answer:"8 және 16"
},

{
q:"Биіктігі 18 см, ал сүйір бұрышы 30° болатын ромбтың ауданын табыңыз.",
options:["216","324","432","648"],
answer:"648"
},

{
q:"Ромбтың ауданын табыңыз.",
options:["40","48","56","64"],
answer:"40"
},

{
q:"Қабырғасы 29 см, диагоналі 42 см болатын ромбтың ауданын табыңыз.",
options:["420","462","504","588"],
answer:"420"
},

{
q:"Периметрі 112 см, сүйір бұрышы 45° болатын ромбтың ауданын табыңыз.",
options:["392","784","392√2","784√2"],
answer:"392√2"
},

{
q:"Периметрі 128 см, tgα = √7/21 болатын ромбтың ауданын табыңыз.",
options:["256","384","512","768"],
answer:"512"
},

{
q:"x-тің мәнін табыңыз.",
img:"images/rhomb-test8.png",
options:["30°","45°","60°","75°"],
answer:"45°"
},

{
q:"ABCD ромбының ауданын табыңыз.",
img:"images/rhomb-test9.png",
options:["20","24","30","40"],
answer:"24"
},

{
q:"Ромбтың ауданын табыңыз.",
options:["24√3","36√3","48√3","72√3"],
answer:"36√3"
},

{
q:"x-тің мәнін табыңыз.",
img:"images/rhomb-test11.png",
options:["20°","35°","55°","70°"],
answer:"55°"
},

{
q:"Ромбтың периметрін табыңыз.",
options:["12","18","24","36"],
answer:"24"
}

]

}

,
{
title:"Тік төртбұрыш",

theory:`

<div class="card">

<h2>Тік төртбұрыш</h2>

<div class="formula">
Барлық бұрыштары тік болатын параллелограмм тік төртбұрыш деп аталады.
</div>

</div>

<div class="card">

<h2>Тік төртбұрыштың қасиеттері мен белгілері</h2>

<p>
1) Қарама-қарсы жатқан қабырғалары тең және барлық бұрыштары тік:
</p>

<div class="formula">
P = 2(a+b)
</div>

<img src="images/rect-property1.png" class="theory-img">

<br><br>

<p>
2) Диагональдары тең және қиылысу нүктесімен қақ бөлінеді:
</p>

<div class="formula">
d = √(a²+b²)
</div>

<img src="images/rect-property2.png" class="theory-img">

<br><br>

<p>
3) Тік төртбұрышқа сырттай сызылған шеңбердің радиусы
диагональдың жартысына тең:
</p>

<div class="formula">
R = d/2
</div>

<img src="images/rect-property3.png" class="theory-img">

</div>

<div class="card">

<h2>Тік төртбұрыштың ауданы</h2>

<p>1) Қабырғалары арқылы:</p>

<div class="formula">
S = a · b
</div>

<img src="images/rect-area1.png" class="theory-img">

<br><br>

<p>2) Диагональдар мен олардың арасындағы бұрыш арқылы:</p>

<div class="formula">
S = d² · sinφ / 2
</div>

<img src="images/rect-area2.png" class="theory-img">

</div>

`,

example:`

<h3>1-мысал</h3>

<img src="images/rect-example1.png" class="example-img">

<div class="example-step">

Тік төртбұрыштың барлық бұрыштары 90°-қа тең:

<div class="formula">
x + 2x = 90°
</div>

<div class="formula">
3x = 90°
</div>

<div class="formula">
x = 30°
</div>

</div>

<div class="example-step">

<div class="formula">
sin30° = 12/d
</div>

<div class="formula">
1/2 = 12/d
</div>

<div class="formula">
d = 24
</div>

</div>

<div class="formula">
Жауабы: 24 см
</div>

<br><br>

<h3>2-мысал</h3>

<img src="images/rect-example2.png" class="example-img">

<div class="example-step">

Пифагор теоремасы бойынша:

<div class="formula">
9x² + 16x² = 1600
</div>

<div class="formula">
25x² = 1600
</div>

<div class="formula">
x = 8
</div>

</div>

<div class="example-step">

<div class="formula">
P = 2(a+b)
</div>

<div class="formula">
P = 2(32+24)
</div>

<div class="formula">
P = 112
</div>

</div>

<div class="formula">
Жауабы: 112 см
</div>

`,

tests:[

{
q:"Тік төртбұрыш қабырғаларының қатынасы 5:3. Периметрі 48 см. Қабырғаларын табыңыз.",
options:[
"10 және 14",
"12 және 18",
"15 және 9",
"20 және 12"
],
answer:"15 және 9"
},

{
q:"Диагоналі 12 см, диагональдар арасындағы бұрыш 60°. Ауданын табыңыз.",
options:["18√3","24√3","36√3","48√3"],
answer:"36√3"
},

{
q:"Периметрі 26 см, ауданы 40 см² болатын тік төртбұрыштың қабырғаларын табыңыз.",
options:[
"4 және 10",
"5 және 8",
"6 және 7",
"2 және 20"
],
answer:"5 және 8"
},

{
q:"Қабырғалары 5 см және 5√3 см. Диагональдар арасындағы бұрыштың кішісін табыңыз.",
options:["30°","45°","60°","90°"],
answer:"60°"
},

{
q:"KLMN төртбұрышының ауданын табыңыз.",
options:["48","96","192","384"],
answer:"96"
},

{
q:"Тік төртбұрыштың ауданын табыңыз.",
options:["180","216","324","360"],
answer:"216"
},

{
q:"ABCD тік төртбұрышының периметрін табыңыз.",
img:"images/rect-test7.png",
options:["40","48","52","60"],
answer:"52"
},

{
q:"ABCD тік төртбұрышының ауданын табыңыз.",
img:"images/rect-test8.png",
options:["24","32","40","48"],
answer:"32"
},

{
q:"x-тің мәнін табыңыз.",
img:"images/rect-test9.png",
options:["13","15","17","20"],
answer:"15"
},

{
q:"ABCD тік төртбұрышының ауданын табыңыз.",
img:"images/rect-test10.png",
options:["24","48","72","96"],
answer:"48"
},

{
q:"x-тің мәнін табыңыз.",
img:"images/rect-test11.png",
options:["6","7","8","9"],
answer:"7"
},

{
q:"x-тің мәнін табыңыз.",
img:"images/rect-test12.png",
options:["4","5","6","8"],
answer:"6"
}

]
}

,
{
title:"Шаршы",

theory:`

<div class="card">

<h2>Шаршы</h2>

<div class="formula">
Барлық қабырғалары тең болатын тік төртбұрыш шаршы деп аталады.
</div>

</div>

<div class="card">

<h2>Шаршының қасиеттері мен белгілері</h2>

<p>
1) Барлық қабырғалары тең және барлық бұрыштары тік:
</p>

<div class="formula">
P = 4a
</div>

<img src="images/square-property1.png" class="theory-img">

<br><br>

<p>
2) Диагональдар ішкі бұрыштардың биссектрисалары болады,
өзара перпендикуляр және қиылысу нүктесінде қақ бөлінеді:
</p>

<div class="formula">
d = a√2
</div>

<img src="images/square-property2.png" class="theory-img">

<br><br>

<p>
3) Шаршыға іштей сызылған шеңбердің радиусы
қабырғаның жартысына тең:
</p>

<div class="formula">
r = a/2
</div>

<img src="images/square-property3.png" class="theory-img">

<br><br>

<p>
4) Шаршыға сырттай сызылған шеңбердің радиусы
диагональдың жартысына тең:
</p>

<div class="formula">
R = a/√2 = d/2
</div>

<img src="images/square-property4.png" class="theory-img">

</div>

<div class="card">

<h2>Шаршының ауданы</h2>

<div class="formula">
S = a²
</div>

<img src="images/square-area.png" class="theory-img">

</div>

`,

example:`

<h3>Мысал</h3>

<img src="images/square-example.png" class="example-img">

<div class="example-step">

<div class="formula">
a√2 = 8
</div>

<div class="formula">
a = 8/√2
</div>

<div class="formula">
a = 4√2
</div>

</div>

<div class="example-step">

Периметр:

<div class="formula">
P = 4a
</div>

<div class="formula">
P = 4 · 4√2
</div>

<div class="formula">
P = 16√2
</div>

</div>

<div class="formula">
Жауабы: 16√2 см
</div>

`,

tests:[

{
q:"Диагоналі 6√2 см болатын шаршының ауданын табыңыз.",
options:["18","24","36","72"],
answer:"36"
},

{
q:"Шаршы диагональдарының қиылысу нүктесінен қабырғаға дейінгі қашықтық 12 см. Периметрін табыңыз.",
options:["48","72","96","144"],
answer:"96"
},

{
q:"Іштей сызылған шеңбердің радиусы 4 см. Шаршының ауданын табыңыз.",
options:["16","32","64","128"],
answer:"64"
},

{
q:"Сырттай сызылған шеңбер радиусы 3 см. Шаршының ауданын табыңыз.",
options:["9","18","36","72"],
answer:"18"
},

{
q:"AB қабырғасынан E нүктесі алынған. AE=7 см, CE=13 см. Шаршы ауданын табыңыз.",
options:["100","120","144","169"],
answer:"144"
},

{
q:"Ауданы 25 см² болатын шаршының диагоналін табыңыз.",
options:["5√2","10","25√2","50"],
answer:"5√2"
},

{
q:"Ауданы 36 см² болатын шаршы берілген. Қабырғасы 3 см-ге үлкен шаршы ауданын табыңыз.",
options:["64","72","81","100"],
answer:"81"
},

{
q:"Шеңбер радиусы 5 см. Шаршы қабырғасын табыңыз.",
options:["5","5√2","10","10√2"],
answer:"5√2"
},

{
q:"x-тің мәнін табыңыз.",
img:"images/square-test9.png",
options:["8","10","12","15"],
answer:"15"
},

{
q:"x-тің мәнін табыңыз.",
img:"images/square-test10.png",
options:["4","6","8","10"],
answer:"8"
},

{
q:"x-тің мәнін табыңыз.",
img:"images/square-test11.png",
options:["3","4","5","6"],
answer:"4"
},

{
q:"x-тің мәнін табыңыз.",
img:"images/square-test12.png",
options:["4","5","6","8"],
answer:"5"
},

{
q:"x-тің мәнін табыңыз.",
img:"images/square-test13.png",
options:["2","3","4","5"],
answer:"4"
},

{
q:"Боялған фигураның ауданы 32 см². x-тің мәнін табыңыз.",
img:"images/square-test14.png",
options:["6","8","10","12"],
answer:"8"
},

{
q:"Боялған фигураның ауданын табыңыз.",
img:"images/square-test15.png",
options:["54","72","81","90"],
answer:"72"
},

{
q:"x-тің мәнін табыңыз.",
img:"images/square-test16.png",
options:["1","2","3","4"],
answer:"2"
}

]
}

,
{
title:"Трапеция",

theory:`

<div class="card">

<h2>Трапеция</h2>

<div class="formula">
Екі қабырғасы ғана параллель болатын төртбұрыш трапеция деп аталады.
</div>

</div>

<div class="card">

<h2>Трапецияның қасиеттері</h2>

<p>
1) Бүйір қабырғаларына іргелес екі бұрыштың қосындысы 180°-қа тең:
</p>

<div class="formula">
α + β = 180°
<br>
γ + θ = 180°
</div>

<img src="images/trapezoid-property1.png" class="theory-img">

<br><br>

<p>
2) Трапецияның орта сызығы табандарының қосындысының жартысына тең:
</p>

<div class="formula">
MN = (a+b)/2
</div>

<div class="formula">
MN — орта сызық
</div>

<img src="images/trapezoid-property2.png" class="theory-img">

<br><br>

<p>
3) Диагональдардың қиылысу нүктесі арқылы пайда болған
үшбұрыштар ұқсас:
</p>

<div class="formula">
k = a/b
</div>

<div class="formula">
k — ұқсастық коэффициенті
</div>

<img src="images/trapezoid-property3.png" class="theory-img">

<br><br>

<p>
4) Шеңберге тек қана теңбүйірлі трапецияны іштей сызуға болады:
</p>

<img src="images/trapezoid-property4.png" class="theory-img">

<br><br>

<p>
5) Табандарына параллель және оны екі тең бөлікке бөлетін кесінді:
</p>

<div class="formula">
KL² = (a²+b²)/2
</div>

<img src="images/trapezoid-property5.png" class="theory-img">

<br><br>

<p>
6) Диагональдардың қиылысу нүктесі арқылы өтетін кесінді:
</p>

<div class="formula">
EF = 2ab/(a+b)
</div>

<img src="images/trapezoid-property6.png" class="theory-img">

<br><br>

<p>
7) Егер теңбүйірлі трапеция диагональдары перпендикуляр болса:
</p>

<div class="formula">
h = (a+b)/2
</div>

<img src="images/trapezoid-property7.png" class="theory-img">

<br><br>

<p>
8) Шеңберге сырттай сызылған трапеция:
</p>

<div class="formula">
h = 2r
</div>

<img src="images/trapezoid-property8.png" class="theory-img">

</div>

<div class="card">

<h2>Трапецияның ауданы</h2>

<p>
1) Табандары мен биіктігі арқылы:
</p>

<div class="formula">
S = ((a+b)/2) · h
</div>

<img src="images/trapezoid-area1.png" class="theory-img">

<br><br>

<p>
2) Орта сызық пен биіктік арқылы:
</p>

<div class="formula">
S = MN · h
</div>

<img src="images/trapezoid-area2.png" class="theory-img">

<br><br>

<p>
3) Диагональдар мен олардың арасындағы бұрыш арқылы:
</p>

<div class="formula">
S = (d₁·d₂·sinφ)/2
</div>

<img src="images/trapezoid-area3.png" class="theory-img">

<br><br>

<p>
4) Диагональдары арқылы пайда болған үшбұрыштар тең шамалы:
</p>

<img src="images/trapezoid-area4.png" class="theory-img">

</div>

`,

example:`

<h3>Мысал</h3>

<img src="images/trapezoid-example.png" class="example-img">

<div class="example-step">

Пифагор теоремасы бойынша:

<div class="formula">
h² + 5² = 13²
</div>

<div class="formula">
h² = 144
</div>

<div class="formula">
h = 12
</div>

</div>

<div class="example-step">

Трапеция ауданы:

<div class="formula">
S = ((a+b)/2) · h
</div>

<div class="formula">
S = ((7+17)/2) · 12
</div>

<div class="formula">
S = 144
</div>

</div>

<div class="formula">
Жауабы: 144 см²
</div>

`,

tests:[

{
q:"Диагоналі орта сызығын 4 см және 3 см бөліктерге бөледі. Кіші табанын табыңыз.",
options:["6","7","8","9"],
answer:"6"
},

{
q:"Орта сызығы 20 см болатын трапецияның периметрін табыңыз.",
options:["40","60","80","100"],
answer:"80"
},

{
q:"Іштей сызылған шеңбер радиусы 2 см. Бүйір қабырғалары 5 см және 6 см. Ауданын табыңыз.",
options:["18","20","22","24"],
answer:"22"
},

{
q:"Теңбүйірлі трапецияның бүйір қабырғасы 10 см, табандары 12 см және 24 см. Ауданын табыңыз.",
options:["120","144","160","180"],
answer:"144"
},

{
q:"Теңбүйірлі трапецияның бүйір қабырғасы 13 см, табандары 6 см және 16 см. Ауданын табыңыз.",
options:["88","96","104","110"],
answer:"104"
},

{
q:"Теңбүйірлі трапецияның диагоналін табыңыз.",
options:["13","15","17","20"],
answer:"15"
},

{
q:"Тікбұрышты трапецияның ауданын табыңыз.",
options:["72","84","96","108"],
answer:"96"
},

{
q:"Табандары 10 см және 15 см. Орта сызық ұзындығын табыңыз.",
options:["10","11","12.5","15"],
answer:"12.5"
},

{
q:"ABCD трапециясының ауданын табыңыз.",
img:"images/trapezoid-test9.png",
options:["36","48","72","96"],
answer:"48"
},

{
q:"x-тің мәнін табыңыз.",
img:"images/trapezoid-test10.png",
options:["12","15","17","20"],
answer:"15"
},

{
q:"ABCD трапециясының ауданын табыңыз.",
img:"images/trapezoid-test11.png",
options:["48","72","96","108"],
answer:"72"
},

{
q:"x-тің мәнін табыңыз.",
img:"images/trapezoid-test12.png",
options:["6","7","8","9"],
answer:"7"
},

{
q:"ABCD трапециясының ауданын табыңыз.",
img:"images/trapezoid-test13.png",
options:["24","28","32","36"],
answer:"28"
},

{
q:"x-тің мәнін табыңыз.",
img:"images/trapezoid-test14.png",
options:["2","2√2","2√3","4"],
answer:"2√3"
}

]
}

,
{
title:"Көпбұрыштар",

theory:`

<div class="card">

<h2>Кездейсоқ көпбұрыш</h2>

<p>
1) Көпбұрыштың ішкі бұрыштарының қосындысы:
</p>

<div class="formula">
Sₙ = 180° · (n−2)
</div>

<img src="images/polygon-property1.png" class="theory-img">

<br><br>

<p>
Дұрыс көпбұрыштың ішкі бұрышы:
</p>

<div class="formula">
α = (180°·(n−2))/n
</div>

<br><br>

<p>
2) Көпбұрыштың сыртқы бұрыштарының қосындысы:
</p>

<div class="formula">
Sβ = 360°
</div>

<img src="images/polygon-property2.png" class="theory-img">

<br><br>

<p>
Дұрыс көпбұрыштың сыртқы бұрышы:
</p>

<div class="formula">
β = 360°/n
</div>

<br><br>

<p>
3) Көпбұрыштың диагональдар саны:
</p>

<div class="formula">
Dₙ = n(n−3)/2
</div>

<div class="formula">
dₙ = n−3
</div>

<img src="images/polygon-property3.png" class="theory-img">

<br><br>

<p>
4) Бір төбеден шығатын диагональдар арқылы пайда болатын үшбұрыштар саны:
</p>

<div class="formula">
NΔ = n−2
</div>

<img src="images/polygon-property4.png" class="theory-img">

</div>

`,

example:`

<h3>Мысал</h3>

<img src="images/polygon-example.png" class="example-img">

<div class="example-step">

Көпбұрыштың ішкі бұрыштарының қосындысы:

<div class="formula">
Sₙ = 180° · (n−2)
</div>

</div>

<div class="example-step">

<div class="formula">
720° = 180° · (n−2)
</div>

<div class="formula">
4 = n−2
</div>

<div class="formula">
n = 6
</div>

</div>

<div class="formula">
Жауабы: 6
</div>

`,

tests:[

{
q:"Бұрыштарының қосындысы 900° болатын көпбұрыштың қабырғалар санын табыңыз.",
options:["5","6","7","8"],
answer:"7"
},

{
q:"Дұрыс алтыбұрыштың сыртқы бұрышын табыңыз.",
options:["45°","60°","72°","90°"],
answer:"60°"
},

{
q:"Сыртқы бұрышы 36° болатын дұрыс көпбұрыштың диагональдар санын табыңыз.",
options:["25","30","35","40"],
answer:"35"
},

{
q:"Ішкі бұрышы 144° болатын дұрыс көпбұрыштың қабырғалар санын табыңыз.",
options:["8","9","10","12"],
answer:"10"
},

{
q:"Ішкі бұрышы 150° және қабырғасы 4 см. Периметрін табыңыз.",
options:["40","48","60","72"],
answer:"48"
},

{
q:"Ішкі бұрышы сыртқы бұрышынан 3 есе артық. Қабырғасын табыңыз.",
options:["6","8","10","12"],
answer:"8"
},

{
q:"Ішкі бұрышы 4 есе кем. Қабырғасы 8 см. Периметрін табыңыз.",
options:["48","56","64","72"],
answer:"64"
},

{
q:"Сыртқы бұрышы 30°. Сырттай сызылған шеңбер диаметрі 10 см. Ауданын табыңыз.",
options:["25","50","75","100"],
answer:"75"
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
