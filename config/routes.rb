Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "debts#index"
  resources :debts, only: [:index, :new, :create]

  get 'debts/transition_balance', to: 'debts#transition_balance'
  get 'debts/transition_IncDec', to: 'debts#transition_IncDec'
  get 'debts/transition_InOut', to: 'debts#transition_InOut'
end
