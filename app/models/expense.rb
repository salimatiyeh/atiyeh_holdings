class Expense < ApplicationRecord
  belongs_to :house, optional: true
  has_one_attached :document

  validates :title, presence: true
  validates :description, presence: true
  validates :category, presence: true
  validates :amount, presence: true
  validates :document, presence: false
end
