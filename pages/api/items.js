import axios from 'axios'

export default async function handler(req, res) {

    const query = req.query.query

    //llamar a la api de MELI con el query
     
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search`, {params:{q:query}, responseType:'json'})



    if(response.status === 200){
        const data = response.data

        console.log(data.available_filters)

        let categories = data.filters.find((item) => { return item.id === 'category'})

        //partiendo que lo que se necesita es para el breadcrum, dejo este mapeo

        categories = (categories)? categories.values[0].path_from_root.map( item => { return item.name }) : []

        let items = data.results.slice(0,4).map( item =>{
            return {
                id: item.id,
                title: item.title,
                price: {
                    amount:item.price,
                    currency: item.currency_id,
                    decimals: item.price - Math.floor(item.price)

                },
                picture: item.thumbnail,
                condition:item.condition,
                free_shipping: item.shipping.free_shipping
            }
        })
          
        res.status(200).json(
            { 
                author: {
                    name: process.env.AUTHOR_NAME,
                    lastname: process.env.AUTHOR_LASTNAME
                },
                categories:categories,
                items: items
            }
        )

    }


}
  