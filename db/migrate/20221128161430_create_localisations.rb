class CreateLocalisations < ActiveRecord::Migration[7.0]
  def change
    create_table :localisations do |t|
      t.float :coordinates
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
