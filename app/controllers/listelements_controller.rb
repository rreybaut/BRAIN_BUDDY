class ListelementsController < ApplicationController
  def index
    @list = List.find(params[:list_id])
    @listelements = Listelement.all
    @listelement = Listelement.new
  end

  def new
    @listelement = Listelement.new
  end

  def create
    @list = List.find(params[:list_id])
    @listelement = Listelement.new(listelement_params[:list_id])
    @listelement.list = @list
    if @listelement.save
      redirect_to lists_path(@list)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @listelement = listelement.find(params[:id])
    @listelement.destroy
    redirect_to list_path(@listelement.list)
  end

  private

  def listelement_params
    params.require(:listelement).permit(:content)
  end
end
