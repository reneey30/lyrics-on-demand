class User < ApplicationRecord
    validates :user_email, presence: true, uniqueness: true
    validates :password, presence: true

    has_secure_password
    has_many :lyrics
end
