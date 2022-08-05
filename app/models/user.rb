class User < ApplicationRecord
    validates :user_email, presence: true
    validates :user_email, uniqueness: true
    has_secure_password
end