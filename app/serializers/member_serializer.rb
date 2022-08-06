class MemberSerializer < ActiveModel::Serializer
  attributes :id, :member_email, :password_digest
end
