class ExpensesController < ApplicationController
  def new
    @expense = Expense.new
  end

  def create
    @expense = Expense.new(expense_params)
    @expense.user_id = current_user.id
    if @expense.save
      redirect_to root_path, notice: "successfully created"
    else
      render :new, status: :unprocessable_entity
    end
  end

  def show
    @expense = Expense.find(params[:id])
    @house = @expense.house
  end

  def index
    @house = House.find(params[:house_id])
    @expenses = @house.expenses
  end

  def edit
    @house = House.find(params[:house_id])
    @expense = @house.expenses.find(params[:id])
  end

  def update
    @house = House.find(params[:house_id])
    @expense = @house.expenses.find(params[:id])
    if @expense.update(expense_params)
      redirect_to house_expense_path(@house, @expense), notice: "Expense updated successfully."
    else
      render :edit
    end
  end

  private

  def expense_params
    params.require(:expense).permit(
      :title,
      :description,
      :amount,
      :category,
      :expense_date,
      :document,
      :house_id
    )
  end
end
