// assign url path to a variable
 const baseUrl = 'https://www.balldontlie.io/api/v1/players'
 const contentDiv = document.querySelector('.content')
 const rightArrowDiv = document.querySelector('.imagecontentrightarrow')
 const leftArrowDiv = document.querySelector('.imagecontentleftarrow')

// call fetch ; and assign response data
  const getData = async () => {
  const response = await fetch(`${baseUrl}`)
  const data = await response.json()
  return data
  }

  rightArrowDiv.addEventListener('click', async () => {
   const basketballPlayersData = await getData()
   const basketballPlayer = basketballPlayersData.data
 
   const firstName = basketballPlayer[0].first_name
   const lastName = basketballPlayer[0].last_name
   const teamFullName = basketballPlayer[0].team.full_name
   const teamNickName = basketballPlayer[0].team.name
   const teamCity = basketballPlayer[0].team.city
 
   let playerHeight = basketballPlayer[0].height_feet
      if(playerHeight){
      playerHeight = playerHeight
      }else{
     playerHeight = "Player height not registered"
     }
   contentDiv.innerHTML = `
    <h3>Player First Name: ${firstName}</h3>
    <h3>Player Last Name: ${lastName}</h3>
    <div class="team">
     <h3>Team full name: ${teamFullName} </h3>
     <h3>Team nick name: ${teamNickName}</h3>
    </div>
    <h3>city: ${teamCity}</h3>
    <h3>height in feet: ${playerHeight}</h3>
    `
  }) 