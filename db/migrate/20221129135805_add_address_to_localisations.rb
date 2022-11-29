class AddAddressToLocalisations < ActiveRecord::Migration[7.0]
  def change
    add_column :localisations, :address, :string
  end
end
