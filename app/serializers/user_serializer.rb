class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_email, :password_digest
end
