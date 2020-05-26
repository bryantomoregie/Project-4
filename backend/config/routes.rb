Rails.application.routes.draw do
  
  resources :users, :shoes, :transactions

  post('/login', to: 'authentication#login')
  
  get('/login', to: 'authentication#get_session_user')
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
