class Maintenance < ApplicationRecord
  belongs_to :house

  validates :title, presence: true
  validates :description, presence: true

end
