
// დავალება 1 
const divbtn = document.getElementById ('mydiv')

const btn = document.getElementById('mybtn')

btn.addEventListener("click", (e) => {

  divbtn.style.display = 'none'

})

//დავალება 2

//შექმენი შემდეგი სტრუქტურა JS -ის
//გამოყენებით და დაამატე DOM-ში:
//<div id=”card”>
//<h2>Gandalf</h2>
//<a href=”#”>Go to profile</a>
//</div>

const cardDiv = document.createElement('div');
cardDiv.id = 'card';

const h2el = document.createElement ('h2')
const h2text = document.createTextNode  ('Gandalf')

const link = document.createElement('a');
link.href = '#';
link.textContent = 'Go to profile';

cardDiv.appendChild(h2text);
cardDiv.appendChild(link);

document.body.appendChild(cardDiv);




//დავალება 3 

//დაწერე რამდენიმე მოკლე შეკითხვა
//თავისი სავარაუდო პასუხებით
//სწორ პასუხზე დაჭერის შემთხვევაში
//გაამწვანე პასუხი
//● არასწორი პასუხის შემთხვევაში გააწითლე



const scoreBoard = document.getElementById('score');
let score = 0;

const allAnswers = document.querySelectorAll('#answ1, #answ2, #answ3, #answ4');

allAnswers.forEach((question) => {
    question.addEventListener("click", () => {
        
        if (question.id === 'answ3') {
            question.style.backgroundColor = 'green';
            

            score++; 
            scoreBoard.textContent = "ქულა: " + score;
        } else {
            question.style.backgroundColor = 'red';
           
        }

        setTimeout(() => {
            question.style.backgroundColor = '';
            question.style.color = '';
        }, 2000);
    });
});

const allAnswers2 = document.querySelectorAll('#answ5, #answ6, #answ7, #answ8');

allAnswers2.forEach((question2) => {
    question2.addEventListener("click", () => {
        
        if (question2.id === 'answ5') {
            question2.style.backgroundColor = 'green';
            

            score++; 
            scoreBoard.textContent = "ქულა: " + score;
        } else {
            question2.style.backgroundColor = 'red';
            
        }

        setTimeout(() => {
            question2.style.backgroundColor = '';
           
        }, 2000);
    });
});