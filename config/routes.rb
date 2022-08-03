Rails.application.routes.draw do

post '/signup', to: 'users#create'
get '/me', to: 'users#show'
resources 'users', only: [:update]

post '/login', to: 'sessions#create'
delete '/logout', to: 'sessions#destroy'

get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }

end