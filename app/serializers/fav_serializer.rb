class FavSerializer < ActiveModel::Serializer
  # attributes :id, :artist, :title, :lyrics, :member_id
  attributes :id, :lyrics, :subject
  def subject
    self.object.artist + " - " + self.object.title
  end


end
