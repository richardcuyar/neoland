function handleLoginSuccess(username) {
    // Guardamos el estado de login en localStorage
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('username', username);
  }
  