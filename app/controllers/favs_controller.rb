class FavsController < ApplicationController
  before_action :set_fav, only: [:show, :update, :destroy]

  # GET /favs
  def index
    @favs = Fav.all

    render json: @favs
  end

  # GET /favs/1
  def show
    render json: @fav
  end

  # GET /favs/members/[member_id]
  def member_favs # GET /favs/members/[member_id]
    @res = Fav.where(:member_id => params[:member_id])
    render json: @res
  end

  # POST /favs
  def create
    @fav = Fav.new(fav_params)

    if @fav.save
      render json: @fav, status: :created, location: @fav
    else
      render json: @fav.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /favs/1
  def update
    if @fav.update(fav_params)
      render json: @fav
    else
      render json: @fav.errors, status: :unprocessable_entity
    end
  end

  # DELETE /favs/1
  def destroy
    @fav.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_fav
      @fav = Fav.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def fav_params
      params.require(:fav).permit(:artist, :title, :lyrics, :member_id)
    end
end
