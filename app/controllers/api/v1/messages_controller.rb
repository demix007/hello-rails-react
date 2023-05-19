module Api
  module V1
    class MessagesController < ApplicationController
      def index
        greeting = Message.find(rand(1..Message.count))
        render json: { message: greeting.text }
      end
    end
  end
end
