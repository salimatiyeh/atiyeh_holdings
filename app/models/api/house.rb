module Api
  class House < ApplicationRecord
    has_many :maintenances, dependent: :destroy
    has_many :expenses
  
    geocoded_by :address
    has_many_attached :photos
  
    after_validation :geocode, if: :will_save_change_to_address?
  end
end
