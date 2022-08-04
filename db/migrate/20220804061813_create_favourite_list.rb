class CreateFavouriteList < ActiveRecord::Migration[6.1]
  def change
    create_table :favourite_lists do |t|
      t.string :favourite_id
      t.string :user_id
      t.string :artist
      t.string :lyrics
      t.string :title
      t.timestamps
    end
  end
end
