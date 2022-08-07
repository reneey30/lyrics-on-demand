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

  # POST /members
  def create
    # @member = Member.new(member_params)
    @member = Member.new(member_email: params[:member_email], password: params[:password])

    if @member.save
      render json: @member, status: :created, location: @member
    else
      render json: @member.errors, status: :unprocessable_entity
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
