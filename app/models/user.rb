class User < ApplicationRecord
    validates :user_email, uniqueness: true, presence: true
    validates :password, presence: true

    has_secure_password
    has_many :favourites
end
