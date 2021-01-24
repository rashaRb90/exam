var ourForm= document.getElementById('wishList-form')
var ourParentTable=document.getElementById('all-whishlist')
var headerContentArr=['Item Name','Quantity','Category','price']
var total= document.getElementById('total')
var whishlistArray=[]

function Whishlist(name,category,quantity){
    this.name=name;
    this.category=category;
    this.quantity=quantity;
    this.price=generateRandom(quantity);

    whishlistArray.push(this);
}

Whishlist.prototype.renderItem=function(){
    var wishlistRow= document.createElement('tr');


    var itemNameId= document.createElement('td');
    itemNameId.textContent=this.name;

    var itemCategoryId=document.createElement('td')
    itemCategoryId.textContent=this.category;

    var itemQuantityId= document.createElement('td')
    itemQuantityId.textContent=this.quantity;

    var itemPriceId=document.createElement('td')
    itemPriceId.textContent=this.price;

    wishlistRow.appendChild(itemNameId)
    wishlistRow.appendChild(itemCategoryId)
    wishlistRow.appendChild(itemQuantityId)
    wishlistRow.appendChild(itemPriceId)

    ourParentTable.appendChild(wishlistRow)

    

    


}

function renderHeader(){

    var headerRow= document.createElement('tr')
    var th;

    for (let index = 0; index < headerContentArr.length; index++) {
        th = document.createElement('th')
        th.textContent=headerContentArr[index]
        headerRow.appendChild(th)
        
    }
    ourParentTable.appendChild(headerRow)

}

function renderlist(){
    for (let index = 0; index < whishlistArray.length; index++) {
        var wishlistRow= document.createElement('tr');


        var itemNameId= document.createElement('td');
        itemNameId.textContent=whishlistArray[index].name;
    
        var itemCategoryId=document.createElement('td')
        itemCategoryId.textContent=whishlistArray[index].category;
    
        var itemQuantityId= document.createElement('td')
        itemQuantityId.textContent=whishlistArray[index].quantity;
    
        var itemPriceId=document.createElement('td')
        itemPriceId.textContent=whishlistArray[index].price;
    
        wishlistRow.appendChild(itemNameId)
        wishlistRow.appendChild(itemCategoryId)
        wishlistRow.appendChild(itemQuantityId)
        wishlistRow.appendChild(itemPriceId)
    
        ourParentTable.appendChild(wishlistRow)
        
    
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    wishlistRow.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', deleteTask);
    function deleteTask(){

        itemNameId.innerHTML = '';
        itemCategoryId.innerHTML = '';
        itemQuantityId.innerHTML = '';


        localStorage.removeItem('wishlistitems');




}
    }

    total.textContent= ' the total is =' , generateRandom();

    

   
}

function generateRandom(quantity){

    return (Math.floor(Math.random()*(1000-500))+500) * quantity

}

function calculateTotal(){
    var total=0;
    for (let index = 0; index < whishlistArray.length; index++) {
        total=total+whishlistArray[index].price;
        
    }
    return total;
}




function handelFormSubmissions (event){
    event.preventDefault();

    var itemName = event.target.itemName.value;
    var itemCategory = event.target.itemCategory.value;
    var itemQuantity = event.target.itemQuantity.value;

    var newItems = new Whishlist(itemName,itemCategory,itemQuantity)

    newItems.renderItem();

    localStorage.setItem('wishlistitems',JSON.stringify(whishlistArray));
    




}

function checkList(){
    if (localStorage.getItem('wishlistitems')){
        whishlistArray=JSON.parse(localStorage.getItem('wishlistitems'))
        renderlist();
    }
}

renderHeader()
ourForm.addEventListener('submit',handelFormSubmissions)
checkList();

