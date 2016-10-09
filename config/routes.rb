Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  root to: 'apps_app#index'

  resources :users
  resources :companies
end
