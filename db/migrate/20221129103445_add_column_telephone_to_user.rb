class AddColumnTelephoneToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :emergency_number, :string
  end
end
