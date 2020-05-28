Rails.application.routes.draw do
  resources :users, :shoes, :transactions, :charges

  post('/login', to: 'authentication#login')
  
  get('/login', to: 'authentication#get_session_user')

  get('/logout', to: 'authentication#logout')
  
end
