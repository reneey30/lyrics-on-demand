class CreateFavs < ActiveRecord::Migration[6.1]
  def change
    create_table :favs do |t|
      t.string :artist
      t.string :title
      t.text :lyrics
      t.integer :member_id

      t.timestamps
    end
  end
end
