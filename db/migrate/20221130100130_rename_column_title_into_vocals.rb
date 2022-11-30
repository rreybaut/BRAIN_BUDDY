class RenameColumnTitleIntoVocals < ActiveRecord::Migration[7.0]
  def change
    rename_column :vocals, :title, :name
  end
end
