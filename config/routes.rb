Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :vocals, only: [:create, :index, :destroy]
  resources :localisations, only: [:new, :index, :create, :destroy]
  resources :lists, only: %i[index new create show update destroy] do
    resources :listelements, only: %i[create update]
  end
  resources :nfts, only: [:show, :new, :create, :index, :destroy]
end
