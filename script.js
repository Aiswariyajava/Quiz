function saveUser(){
localStorage.setItem('name', name.value);
localStorage.setItem('email', email.value);
location.href='quiz.html';
}


function predictCareer(){
let scores={eng:0,doc:0,art:0,tea:0,bus:0,med:0};
[q1,q2,q3,q4,q5,q6].forEach(q=>scores[q.value]+=1);


fetch('http://127.0.0.1:5000/predict',{
method:'POST',headers:{'Content-Type':'application/json'},
body:JSON.stringify(scores)
})
.then(res=>res.json())
.then(data=>{
localStorage.setItem('career',data.career);
location.href='result.html';
});
}