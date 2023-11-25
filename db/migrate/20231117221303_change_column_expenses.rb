class ChangeColumnExpenses < ActiveRecord::Migration[7.0]
  def change
    rename_column :expenses, :business, :expense_type
  end
end
