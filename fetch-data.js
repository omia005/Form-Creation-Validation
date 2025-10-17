async function fetchUserData(){
  const apiUrlb = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = getElementById('api-data');
  
  try{
    
    const response = await fetch(apiUrl);
    const users = await response.json();

    dataContainer.innerHTML = ''

    const userList = document.createElement('ul');

    users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
  }
                  
  catch{
    dataContainer.appendChild(userList);
        
    } catch (error) {
        // Error Handling
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
    

  }
}
