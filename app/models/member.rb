class Member < ApplicationRecord
    validates :member_email, uniqueness: true, presence: true
    validates :password, presence: true

    has_many :favs
    has_secure_password
end
