class FavSerializer < ActiveModel::Serializer
  attributes :id, :artist, :title, :lyrics, :member_id
end
