class SessionController < ApplicationController

      def create
  
      user = User.find_by(useremail: params[:useremail])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { error: "Invalid useremail or password"}, status: :unauthorized
      end
  
      def destroy
        session.delete :user_id
        head :no_content
      end
    end
  
    private
  
  end