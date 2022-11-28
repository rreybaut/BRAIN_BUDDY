class CreateVocals < ActiveRecord::Migration[7.0]
  def change
    create_table :vocals do |t|
      t.string :audio
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
