class Maintenance < ApplicationRecord
  belongs_to :house
  has_many_attached :photos

  validates :title, presence: true
  validates :description, presence: true
  validates :photos, presence: true
end
