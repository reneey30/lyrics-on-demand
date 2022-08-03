class UserSerializer < ActiveModel::Serializer
    attributes :id, :useremail, :last_login
  end