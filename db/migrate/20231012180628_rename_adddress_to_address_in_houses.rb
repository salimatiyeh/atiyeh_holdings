class RenameAdddressToAddressInHouses < ActiveRecord::Migration[7.0]
  def change
    rename_column :houses, :adddress, :address
  end
end
