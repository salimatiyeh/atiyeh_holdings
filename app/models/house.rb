class House < ApplicationRecord
  has_many :maintenances, dependent: :destroy
  geocoded_by :address
  has_one_attached :photo

  after_validation :geocode, if: :will_save_change_to_address?
end
