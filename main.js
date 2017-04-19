
const query = document.querySelector('.query').textContent
const btn = document.querySelector('.baby')
const trivia = document.querySelector('.trivia')
const um = document.querySelector('.number')
function cmon() {
	const http = new XMLHttpRequest()
	const url = 'https://numbersapi.p.mashape.com/random/trivia?fragment=false&json=true&max=20&min=10'
	const method = 'GET'
	um.classList.add('from-left')
	trivia.classList.add('from-right')

	http.open(method, url)
	http.onreadystatechange = function() {
	    if (http.readyState === 4 && http.status === 200) {
	        const response = JSON.parse(http.responseText)
	       	const text = response.text
	       	const number = response.number
	       	let newText = response.text.split('')
	       	const newNewText = newText[0].toUpperCase()
	       	newText[0] = newNewText
	       	newText = newText.join('')
	       	

	       	trivia.textContent = newText
	       	um.textContent = number
	       	um.classList.remove('from-left')
	       	trivia.classList.remove('from-right')

	       	console.log(text,number)

	    } else if (http.readyState === 4 && http.status !== 200) {
	        trivia.textContent = 'Try Again'
	        um.textContent = 69
	        um.classList.remove('from-left')
	        trivia.classList.remove('from-right')

	    }
	}
	http.setRequestHeader("X-Mashape-Authorization", "PEx110iLx4mshmIPl9i434TzhtRTp1rRoJsjsnpTywUy7ytoG6")
	http.send()

}

btn.addEventListener('click', cmon)