class Localisation < ApplicationRecord
  belongs_to :user
  validates :address, length: {minimum: 1}

  # Source of geocoding
  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?
end
