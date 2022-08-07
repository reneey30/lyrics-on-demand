Rails.application.routes.draw do

  resources :favs, except: [:index, :update]
  resources :members, except: [:index, :destroy]

  # get "/mtihani/:member_id", to: "favs#mtihani"

  get "/favs/member/:member_id", to: "favs#member_favs"
  post "/members/login", to: "members#login"
  
  # get "/recipes", to: "recipes#indexx" 
  # delete "/logout", to: "sessions#destroy"
  # post "/login", to: "sessions#create"
  # post "/signup", to: "users#create"
  # get "/me", to: "users#show"

get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }

end