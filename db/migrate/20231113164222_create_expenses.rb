class CreateExpenses < ActiveRecord::Migration[7.0]
  def change
    create_table :expenses do |t|
      t.references :house, index: true, foreign_key: true, optional: true
      t.string :title
      t.text :description
      t.decimal :amount, precision: 10, scale: 2, null: false, default: 0.0
      t.string :category
      t.datetime :expense_date
      t.string :document
      t.timestamps
    end
  end
end
