class AddCoordinatesToLocalisations < ActiveRecord::Migration[7.0]
  def change
    add_column :localisations, :latitude, :float
    add_column :localisations, :longitude, :float
  end
end
