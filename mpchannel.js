// Clock above chat
let clockInterval = 0;
const chatHeader = document.getElementById('chatheader');
const chatClock = document.createElement('div');
chatClock.id = 'chatClock';

chatClock.style.flexGrow = '2';
chatClock.style.fontFamily = 'system-ui';
chatClock.style.textAlign = 'center';



document.getElementById("chatheader").insertAdjacentElement('beforebegin', chatClock);
const setChatClock = () => {
	const clockDate = new Date();
	const localTime = clockDate.toLocaleTimeString("JPN");
	const UTCTime = clockDate.toLocaleTimeString("JPN", {timeZone: 'UTC'});

	chatClock.innerText = `Local ${localTime} | UTC ${UTCTime}`;
}

setChatClock();
clockInterval = setInterval(setChatClock, 1000);
