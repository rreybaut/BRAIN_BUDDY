class NftsController < ApplicationController
  before_action :authenticate_user!, only: [:new]
  # before_action :set_nft, only: [:show, :edit, :create, :update, :destroy]
    # Refactor: Mise en commun d'une partie du code

  def index
    @nfts = Nft.all
    @nft = Nft.new
  end

  def show
    @nft = Nft.find(params[:id])
  end

  def new
    @nft = Nft.new
  end

  def create
    @nft = Nft.new(nft_params)
    @nft.user = current_user
    if @nft.save

      redirect_to nfts_path
    else
      render :index, status: :unprocessable_entity
    end
  end

  def edit
    @nft = Nft.find(params[:id])
  end

  def update
    @nft = Nft.find(params[:id])
    @nft.update(nft_params)

    redirect_to nfts_path(@nft)
  end

  def destroy
    @nfts= Nft.find(params[:id])
    @nft.destroy
    redirect_to nfts_path, status: :see_other
  end

  private

  def set_nft
    # @nft = Nft.find(params[:nft_id])
  end

  def nft_params
    params.require(:nft).permit(:photo, :user_id, :name)
  end
end
