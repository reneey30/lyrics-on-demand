class UserSerializer < ActiveModel::Serializer
    attributes :id, :user_email, :last_login
  end