

class ShoesController < ApplicationController

 def index 
    shoes = Shoe.all

    render(json: shoes)

 end 

 def create 
   # if(self.current_user != nil)
      shoes = Shoe.create({
        model: params[:model],
        size: params[:size],
        brand: params[:brand],
        price: params[:price],
        image: params[:image],
        user_id: 1
      #   user_id: self.current_user.id
      })
      render(json: shoes) 
   # else
   #    render json: {error: true, message:'Invalid Login'} 
   # end   
 end

 def show
    shoes = Shoe.find(params[:id])

    render(json: shoes)

 end 

 def update 
    shoes = Shoes.find(params[:id])
    shoes = Shoes.update({
        model: params[:model],
        size: params[:size],
        brand: params[:brand],
        user_id: params[:user_id]
    })
    render(json: shoes)     

 end 

 def destroy 
    shoe = Shoe.find(params[:id])
    shoe.destroy()
 end

end