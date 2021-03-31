// assign url path to a variable
const baseUrl = 'https://www.balldontlie.io/api/v1/players'
const contentDiv = document.querySelector('.content')

// call fetch ; and response
const getData = async () => {
  const response = await fetch(`${baseUrl}`)
  const data = await response.json()
  return data
}

window.addEventListener('load', async () => {
  const basketballPlayersData = await getData()
  console.log(basketballPlayersData);
  const secondBasketballPlayerData = basketballPlayersData[0]
  
  basketballPlayersData.forEach(basketball => 
    contentDiv.innerHTML += `
    <h2>${basketball.first_name}</h2>
    <p>${basketball.last_name}</P>
    `
)
})