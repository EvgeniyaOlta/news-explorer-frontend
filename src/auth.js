export const BASE_URL = 'https://news-olta.students.nomoreparties.co';

export const register = (userEmail, userPassword, UserName) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: userEmail, password: userPassword, name: UserName})
  })
  .then(res => res.ok ? res : Promise.reject(res)) 
  .then((res) => { 
    if(res.ok) { 
      return res.json(); 
    }  
  }) 
  .then((data) => { 
    return data; 
  }) 
  .catch((err) => { 
    if (err.status === 400) { 
      console.log('Некорректно заполнено одно из полей', err); 
      return; 
    } 
  }); 
};


export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    .then(res => res.ok ? res : Promise.reject(res))
    .then((res) => {
      if(res.ok) {
        return res.json();
      } 
    })
    .then((data) => {
      if (data.token){
        localStorage.setItem('jwt', data.token);
        return data;
      } 
    })
    .catch((err) => { 
      if (err.status === 400) { 
        console.log('Не передано одно из полей'); 
        return; 
      }
      if (err.status === 401) { 
        console.log('Пользователь с email не найден'); 
        return; 
      } 
    }); 
  };

  export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(res => res.ok ? res : Promise.reject(res))
    .then((res) => {
      if(res.ok) {
        return res.json();
      } 
    })
    .then(data => data)
    .catch((err) => { 
      if (err.status === 401 && err.message ==='JWT Token not found') { 
        console.log(err, 'Переданный токен некорректен'); 
        return; 
      }
      if (err.status === 401 && err.message === 'Full authentication is required to access this resource') { 
        console.log('Токен не передан или передан не в том формате'); 
        return; 
      } 
    }); 
  }
