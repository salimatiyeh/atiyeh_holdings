Rails.application.routes.draw do
  devise_for :users
  resources :houses
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root to: "houses#index"
  get "houses/new", to: "houses#new"
  post "houses", to: "houses#create"
  # get "houses", to: "houses#index"
  get "houses/:id", to: "houses#show"
  get "houses/:id/edit", to: "houses#edit"
  patch "houses/:id", to: "houses#update"
  delete "houses/:id", to: "houses#destroy"
end
