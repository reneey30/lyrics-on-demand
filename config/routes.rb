Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
