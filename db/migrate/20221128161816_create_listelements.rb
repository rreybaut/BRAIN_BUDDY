class CreateListelements < ActiveRecord::Migration[7.0]
  def change
    create_table :listelements do |t|
      t.text :content
      t.boolean :check
      t.references :list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
