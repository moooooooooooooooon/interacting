// Crayon Shinchan

// Shinchan
var toggle = document.querySelector('.toggle')
var content = document.querySelector('.content')

toggle.addEventListener('click', showHide)

function showHide() {
	if (content.id == 'show') {
	 content.id = 'hide' 
	 toggle.style.opacity = '1';
	} else {
		content.id = 'show'
		toggle.style.opacity = '0'
	}
}

// Zoom interaction
var body = document.querySelector('body')
var trigger1 = document.querySelector('.trigger-1')
var trigger2 = document.querySelector('.trigger-2')
var trigger3 = document.querySelector('.trigger-3')

trigger1.addEventListener('click', () => zoom('one'))
trigger2.addEventListener('click', () => zoom('two'))
trigger3.addEventListener('click', () => zoom('three'))

function zoom(num) {
	if (body.id != 'zoom') {
		body.id = 'zoom'
		body.className = num
	} else {
		body.id = ''
		body.className = ''
	}
}


