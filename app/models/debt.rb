class Debt < ApplicationRecord
  belongs_to_active_hash :bank
  belongs_to_active_hash :debt
  belongs_to_active_hash :repayment_cycle
end
