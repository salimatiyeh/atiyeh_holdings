class AddBusinessToExpenses < ActiveRecord::Migration[7.0]
  def change
    add_column :expenses, :business, :boolean, null: false
  end
end
