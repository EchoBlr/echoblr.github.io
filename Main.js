const button = document.getElementById('button');
const selectWho = document.getElementById('whom-select');
const selectWhat = document.getElementById('what-select');
const textBox = document.getElementsByClassName('text-box')[0];
const output = document.getElementsByClassName('output')[0]
const img = document.querySelector('img')
const textBoxInner = textBox.innerHTML;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const start = ['С днем рождения! ','Поздравляю с днем рождения!','В этот день хочу поздравить прекрасную женщину с днем рождения!','Поздравляем с этим замечательным днём.','Сегодня твой день рождения!',"От всего сердца хочу поздравить с чудесным праздником — днем рождения!"];
const middle = ['Пусть светятся глаза от счастья, и энергия бьет ключом! Пусть каждый день твоей жизни будет наполнен приятными сюрпризами и подарками, улыбками и смехом. Желаю яркого и позитивного будущего с большими и малыми победами, реализованными планами и исполненными мечтаниями.', 'Пусть на дороге жизни тебе встречаются только те события, которые дарят счастье, положительные эмоции и благополучие! Крепкого здоровья, везения и всего наилучшего! Оставайся всегда молодой, как сейчас, жизнерадостной, сильной духом и телом! Пусть в жизни не будет несчастий, а на мелкие неприятности пусть всегда будет повод взглянуть с юмором!','Пусть самые смелые мечты сбываются, пусть все лучшее, что может подарить нам этот мир, будет в твоей жизни: любимый человек рядом, счастливые дети, верные друзья, интересное дело. Желаю веры в свои силы и удачи на любых дорогах.','Желаю расцветать с каждым годом все больше, всегда быть красивой и молодой. Пусть тебя окружает доброта, ласка, уважение и любовь. Желаю каждый день чувствовать себя счастливой и наполненной. Пускай весь мир будет у твоих ног!'];
const end = ['С праздником!', "Удачи!","Доброго и веселого дня рождения", "Будь счастлива"]
const getText = () => {
    textBox.style.display = 'flex';
    output.innerHTML = start[getRandomInt(start.length)]+ ' ' + middle[getRandomInt(middle.length)] + ' ' + end[getRandomInt(end.length)];
    img.src = './img/pngegg.png'
}

button.onclick = getText;
img.onclick = ()=>{
    navigator.clipboard.writeText(output.innerHTML)
    img.src = './img/pngegg2.png'
}
selectWho.oninput = () =>{
    selectWhat.disabled = false;
    selectWho.style.backgroundColor = '#ff797938';
}

selectWhat.oninput = () =>{
    button.disabled = false;
    button.parentElement.style.backgroundColor = '#c80505ab';
    selectWhat.style.backgroundColor = '#ff797959';
}