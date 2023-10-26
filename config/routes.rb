Rails.application.routes.draw do
  devise_for :users
  resources :houses
  resources :maintenances

  root to: "houses#index"
  get "houses/new", to: "houses#new"
  post "houses", to: "houses#create"
  get "houses/:id", to: "houses#show"
  get "houses/:id/edit", to: "houses#edit"
  patch "houses/:id", to: "houses#update"
  delete "houses/:id", to: "houses#destroy"

  # get "houses/:id/index_maintenance", to: "houses#index_maintenance"
  get "maintenances/new", to: "maintenances#new"
  post "maintenances", to: "maintenances#create"

  get "users/show", to: "users#show"
end
