class CreateFavourites < ActiveRecord::Migration[6.1]
  def change
    create_table :favourites do |t|
      t.string :artist
      t.string :title
      t.text :lyrics
      t.integer :user_id

      t.timestamps
    end
  end
end
