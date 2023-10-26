class Maintenance < ApplicationRecord
  belongs_to :house
  belongs_to :user
end
