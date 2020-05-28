

class ShoesController < ApplicationController

 def index 
    shoes = Shoe.all
  
    render(json: shoes, :include => :user)

 end 

 def create 
   # if(self.current_user != nil)
  
      shoes = Shoe.create({
        model: params[:model],
        size: params[:size],
        brand: params[:brand],
        price: params[:price],
        image: params[:image],
        user_id: params[:user_id]
      })
      
      render(json: shoes) 
   # else
   #    render json: {error: true, message:'Please log in to create shoe'} 
   # end   
 end

 def show
    shoes = Shoe.find(params[:id])
    
    render(json: shoes, :include => :user)
 end 

 def update 
    shoes = Shoe.find(params[:id])
    shoes = Shoe.update({
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