Rails.application.routes.draw do
  devise_for :users
  resources :maintenances
  resources :houses do
    resources :maintenances, only: [:new, :create]
    resources :expenses
  end

  get "api/houses", to: "api/houses#index"
  get "api/houses/:id", to: "api/houses#show"
  post "api/houses", to: "api/houses#create"
  post "api/houses/:id", to: "api/houses#update"
  delete "api/houses/:id", to: "api/houses#destroy"

  get "maintenances/new", to: "maintenances#new"
  post "maintenances", to: "maintenances#create"
  get "houses/:id/maintenances", to: "maintenances#index"
  get "houses/:id/maintenances/:id", to: "maintenances#show"

  get "expenses/new", to: "expenses#new"
  post "expenses", to: "expenses#create"
  get "houses/:id/expenses/:id", to: "expenses#show"
  get "houses/:id/expenses", to: "expenses#index"
  # patch "houses/:id/expenses/:id/edit", to: "expenses#edit"

  get "users/show", to: "users#show"
end
