document.querySelector('#saveData').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)

    const procategory = document.querySelector('#procategory').value
    // const img = document.querySelector('#img').value
    const prodesc = document.querySelector('#prodesc').value
    const allinput = document.querySelectorAll('.createData input ')
    console.log(allinput[0])
    console.log(allinput[1])
    console.log(allinput[2])
    console.log(allinput[3])
    // console.log(allinput[4])


    const pname = allinput[0].value
    const proprice = allinput[1].value
    const  proqunatity= allinput[2].value
    const img = allinput[3].value



    // localStorage.setItem('procategory', 'procategory')
    // localStorage.setItem('pname', 'pname')
    // localStorage.setItem('proprice', 'proprice')
    // localStorage.setItem('prodesc', 'prodesc')
    // localStorage.setItem('proqunatity', 'proqunatity')
    // localStorage.setItem('img', 'img')

    const arr = JSON.parse(localStorage.getItem('userList')) || [];
    const id = arr.length+1
    const product = {
        id,procategory, pname, proprice, prodesc, proqunatity,img
    }
    arr.push(product)
    console.log(arr)

    localStorage.setItem('userList', JSON.stringify(arr))
    show()
})

function show() {
    const userList = JSON.parse(localStorage.getItem('userList'))
    let result = " "
    userList.forEach((element) => {
        result += `
        <div class="col-lg-4">
        <div class="card my-3">
        <img src="${element.img}" class="border p-2 bg-light" height="350">
        <div class="card-body">
           <h3>${element.procategory}</h3>
            <ul>
                <li>Product Name: ${element.pname}</li>
                <li>Product Price: ${element.proprice}</li>
                <li>Product Description: ${element.prodesc}</li>
                <li>Product Quantity: ${element.proqunatity}</li>
            </ul>
        </div>
       <button class="btn btn-warning w-100" onclick="addtocart(${element.id})">Add To Cart</button>
        </div>
        </div>
        `
    });
    document.querySelector('#carddData').innerHTML = result
}
show()

function addtocart(id){
    const product = JSON.parse(localStorage.getItem('userList'))
    const cart = JSON.parse(localStorage.getItem('cartList')) || [];

    // product exist or not
    const existdata = product.find((item) => {
        return item.id === id
    })
    console.log(existdata)

    // cart is exist or not
    const existcart = cart.find((item)=> {
        return item.id === id
    })
    console.log(existcart)
    
    if(existcart){
        existcart.count += 1
    }else{
        cart.push({...existdata,count:1})
    }
    localStorage.setItem('cartList',JSON.stringify(cart))
}
