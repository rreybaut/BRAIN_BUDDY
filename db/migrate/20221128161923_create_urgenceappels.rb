class CreateUrgenceappels < ActiveRecord::Migration[7.0]
  def change
    create_table :urgenceappels do |t|
      t.integer :telephone
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
