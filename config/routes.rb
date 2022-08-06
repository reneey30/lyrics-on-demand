Rails.application.routes.draw do

  resources :favs
  resources :members
  resources :favourites
  resources :users
  # resources :recipes, only: [:index, :create]
  
  # get "/recipes", to: "recipes#indexx" 
  delete "/logout", to: "sessions#destroy"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

# get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }

end