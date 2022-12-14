class ListsController < ApplicationController
  before_action :authenticate_user!, only: [:index]
  def index
    @lists = List.all
    @list = List.new
  end

  def new
    @list = List.new
  end

  def create
    @list = List.new(list_params)
    @list.user = current_user

    if @list.save
      redirect_to list_path(@list)
    else
      render :index, status: :unprocessable_entity
    end
  end

  def show
    @list = List.find(params[:id])
    @listelement = Listelement.new
  end

  def edit
  end

  def update
    @list = List.find(params[:id])
    @list.update(list_params)

    redirect_to list_path(@list)
  end

  def destroy
    @lists = List.find(params[:id])
    @lists.destroy
    redirect_to lists_path, status: :see_other
  end

  private

  def list_params
    params.require(:list).permit(:title, :date, :user_id)
  end
end
