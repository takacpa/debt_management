class CreateDebts < ActiveRecord::Migration[5.2]
  def change
    create_table :debts do |t|

      t.timestamps
    end
  end
end
