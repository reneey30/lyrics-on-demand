class MembersController < ApplicationController
  before_action :set_member, only: [:show, :update, :destroy]

  # GET /members
  def index
    @members = Member.all

    render json: @members
  end

  # GET /members/1
  def show
    render json: @member
  end

  def login
    if Member.exists?(member_email: params[:member_email])

      check_member = Member.find_by_member_email(params[:member_email])

      if check_member.authenticate(params[:password])
        msg = {:success => "Signed in #{params[:member_email] } successfully", :member_id => check_member[:id], :member_email => check_member[:member_email]} 
        render json: msg
      else
        msg = {:error => "Incorrect password!"}
        render json: msg
      end

    else
      msg = {:error => "The email: #{params[:member_email]} does not exists. Sign up instead"}
     
      render json: msg
    end
  end

  # POST /members
  def create
    # @member = Member.new(member_params)
    @member = Member.new(member_email: params[:member_email], password: params[:password])

    if @member.save
      render json: @member, status: :created, location: @member
    else
      # render json: @member.errors, status: :unprocessable_entity
      msg = {:error => "error signing up"}
      # msg = {:error => @member.errors[:member_email]}
      render json: msg
    end
    # render json: @member
  end

  # PATCH/PUT /members/1
  def update
    # if @member.update(member_params)
    if @member.update(member_email: params[:member_email], password: params[:password])
      render json: @member
    else
      render json: @member.errors, status: :unprocessable_entity
    end
    # @message = ""
    # @entry = Member.find(params[:id])
    # params.each {|key,value|
    #   if key=="member_email"
    #     @entry.update("#{key}": "#{value}")
    #     @message = @message + @entry.to_s
    #   end
    #   if key=="password"
    #     @entry.update("#{key}": "#{value}")
    #     @message = @message + @entry.to_s
    #   end
    # }
    
    # # @member = params
    # # render json: @entry
    #  render json: @message
    
  end

  # DELETE /members/1
  def destroy
    @member.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_member
      @member = Member.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def member_params
      params.require(:member).permit(:member_email, :password_digest)
    end
end
