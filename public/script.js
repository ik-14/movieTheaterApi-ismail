const post = document.getElementById('put')
const get = document.getElementById('get')
const deleteBtn = document.getElementById('delete')
const section = document.querySelector('#getting')
const nameInput = document.getElementById('name-in')
const ratingInput = document.getElementById('rating-in')
const genreInput = document.getElementById('genre-in')
const deleteInput = document.getElementById('delete-in')

get.addEventListener('click', async(req,res) => {
  const response = await fetch('http://localhost:3000/shows')
  const data = await response.json()
  data.forEach(currentItem => {
   console.log(currentItem)
    const title = currentItem.title
    const rating = currentItem.rating
    const div = document.createElement('div')
    div.classList.add('newDivs')
    const h4 = document.createElement('h4')
    h4.innerHTML = title
    const p = document.createElement('p')
    p.innerHTML = rating
    div.append(h4,p)
    section.append(div)
  });
})

post.addEventListener('click', async(req,res) => {
  if (nameInput.value == '' || ratingInput.value == '' || genreInput.value == '') {
    alert('enter all details')
    return
  }
  const response = await fetch('http://localhost:3000/shows', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userTitle: nameInput.value,
      userRating: ratingInput.value,
      userGenre: genreInput.value
    })
  })
})

deleteBtn.addEventListener('click', async(req,res) => {

  if (deleteInput.value == '') {
    alert('please enter the id')
    return 
  }
  const response = await fetch('http://localhost:3000/shows', {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userInputId: deleteInput.value
    })
  })
})