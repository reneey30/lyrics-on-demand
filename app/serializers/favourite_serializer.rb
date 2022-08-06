class FavouriteSerializer < ActiveModel::Serializer
  attributes :id, :artist, :title, :lyrics, :user_id
end
