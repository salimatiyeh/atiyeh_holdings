class CreateHouses < ActiveRecord::Migration[7.0]
  def change
    create_table :houses do |t|
      t.string :name
      t.string :adddress
      t.integer :square_feet
      t.integer :number_of_rooms
      t.float :number_of_bathrooms
      t.boolean :has_storm_shelter
      t.boolean :has_garage
      t.float :rental_amount
      t.boolean :has_gas
      t.boolean :is_occupied
      t.string :img_url

      t.timestamps
    end
  end
end
