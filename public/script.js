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
    const id = currentItem.id
    const title = currentItem.title
    const rating = currentItem.rating
    const div = document.createElement('div')
    div.classList.add('newDivs')
    const h5 = document.createElement('h5')
    h5.innerHTML = `Id: ${id}`
    const h4 = document.createElement('h4')
    h4.innerHTML = `Title: ${title}`
    const p = document.createElement('p')
    p.innerHTML = `Rating: ${rating}`
    const delBtn = document.createElement('button')
    delBtn.innerHTML = 'hello'
    delBtn.addEventListener('click', async(req,res) => {
      const response = await fetch('http://localhost:3000/shows', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userInputDelete: id
        })
      })
    })
    div.append(h5,h4,p,delBtn)
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