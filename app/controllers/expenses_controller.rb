class ExpensesController < ApplicationController
  def new
    @expense = Expense.new
  end

  # def create
  #   @expense = Expense.new(expense_params)
  #   @expense.save
  #   redirect_to root_path
  # end

  def create
    @expense = Expense.new(expense_params)
    # raise
    if @expense.save
      redirect_to root_path, notice: "successfully created"
    else
      puts @expense.errors.full_messages
      render :new, status: :unprocessable_entity
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
      :document
    )
  end

end
