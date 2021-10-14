import axios from 'axios'

export default async function handler(req, res) {
 
    const { id } = req.query 
     
    try{

        const response = await axios.get(`https://api.mercadolibre.com/items/${id}`,{ responseType:'json'})
        const responseDesc = await axios.get(`https://api.mercadolibre.com/items/${id}/description`,{ responseType:'json'})
        
       /* const categories = categoriesResponse.data.path_from_root.map(item => {
          return item.name
        })
        */
        

        if(response.status === 200 && responseDesc.status === 200){
            const data = response.data
            const data_description = responseDesc.data
            let categories = []
           
            const categoriesResponse = await axios.get(`https://api.mercadolibre.com/categories/${data.category_id}`,{ responseType:'json'})
            if(categoriesResponse.status === 200 ){
                const path = categoriesResponse.data.path_from_root;
                console.log(categoriesResponse.data.path_from_root)
                categories = path.map(function(item){ return item.name})
            }
            const item = {
                id: data.id,
                title: data.title,
                price: {
                    amount:data.price,
                    currency: data.currency_id,
                    decimals: data.price - Math.floor(data.price)
                },
                picture: data.pictures[0].url,
                condition:data.condition,
                free_shipping: data.shipping.free_shipping,
                sold_quantity: data.sold_quantity,
                description: data_description.plain_text,
                categories: categories
            }
            res.status(200).json(
                {
                    author: {
                        name: process.env.AUTHOR_NAME,
                        lastname: process.env.AUTHOR_LASTNAME
                    },
                    item: item
                }
            )
        }else{
            console.log(response, responseDesc)
            throw "Datos no disponibles"
        }
    }catch(error){
        console.log("=====================")
        console.log(error)
        console.log("=====================")
        res.status(500).json({
            error:"Fallo la comunicacion de datos"
        })
    }


    

    
          
    

}


 
  