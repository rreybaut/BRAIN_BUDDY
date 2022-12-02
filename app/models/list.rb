class List < ApplicationRecord
  belongs_to :user
  has_many :listelements, dependent: :destroy
end
