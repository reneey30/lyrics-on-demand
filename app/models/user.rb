class User < ApplicationRecord
    has_secure_password
    validates :user_email, presence: true
    validates :user_email, uniqueness: { case_sensitive: false }
end