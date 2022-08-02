class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  before_action :authorize, except: [:create]

  def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
  end

  def update
      user = User.find(session[:user_id])
      user.update!(user_params)
      render json: user, status: :accepted
  end

  def show
      current_user = User.find(session[:user_id])
      render json: current_user, status: :created
  end
  
      if user
        render json: user
      else
        render json: { error: 'Not authorized' }, status: :unauthorized
      end
    end
  
    private
  
    def user_params
      params.permit(:useremail, :password, :password_confirmation)
    end
  
    def authorize 
      return render json: { error: 'Not authorized' }, status: :unauthorized unless session.include? :user_id
    end
  end