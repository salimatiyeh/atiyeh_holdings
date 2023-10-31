class RemoveNotNullConstraintFromUserId < ActiveRecord::Migration[7.0]
  def change
    change_column :maintenances, :user_id, :bigint, null: true
  end
end

