class ChangeBusinessColumnTypeToStringInExpenses < ActiveRecord::Migration[7.0]
  def change
    change_column :expenses, :business, :string
  end
end
