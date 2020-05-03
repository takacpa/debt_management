class Add < ActiveRecord::Migration[5.2]
  def change
    add_column :debts, :title, :string, null: false
    add_column :debts, :bank_id, :integer, null: false
    add_column :debts, :principal, :integer, null: false
    add_column :debts, :borrowing_day, :date
    add_column :debts, :repayment_deadline, :date
    add_column :debts, :debt_type_id, :integer, null: false
    add_column :debts, :repayment_start_day, :date, null: false
    add_column :debts, :number_of_repayment, :integer, null: false
    add_column :debts, :repayment_first, :integer, null: false
    add_column :debts, :repayment_second, :integer, null: false
    add_column :debts, :repayment_cycle_id, :integer, null: false
    add_column :debts, :interrest_rate, :decimal, null: false
    add_column :debts, :company_id, :integer, null: false
  end
end
