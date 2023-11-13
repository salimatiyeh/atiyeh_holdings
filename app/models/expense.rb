class Expense < ApplicationRecord
  belongs_to :type, polymorphic: true
  has_one_attached :document
end
