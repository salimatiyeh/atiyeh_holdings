Rails.application.routes.draw do
  devise_for :users
  resources :houses

  root to: "houses#index"
  get "houses/new", to: "houses#new"
  post "houses", to: "houses#create"
  get "houses/:id", to: "houses#show"
  get "houses/:id/edit", to: "houses#edit"
  patch "houses/:id", to: "houses#update"
  delete "houses/:id", to: "houses#destroy"

  get "users/new", to: "users#new"
end
