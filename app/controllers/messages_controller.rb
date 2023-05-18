class MessagesController < ApplicationController
  def index
    @msg = Message.find(Message.pluck(:id).sample)
    render json: @msg
  end
end
