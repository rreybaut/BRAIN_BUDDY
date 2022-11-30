class AddColumnTitleToVocals < ActiveRecord::Migration[7.0]
  def change
    add_column :vocals, :title, :string
  end
end
