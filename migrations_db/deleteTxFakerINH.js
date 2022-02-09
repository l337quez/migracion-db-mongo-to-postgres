// Script para eliminar tx Faker de deposito INH con monto:1 y status 0 
 
/* 
 type: "deposit"
 amount: 1
 status: 0
 
2021-01-03T01:02:27.409+00:00   -->91    pagina 80

2021-01-03T13:09:20.696+00:00    --> 7320*/


 db.tx.find({type: "deposit",  amount: 1, status: 0, createdAt: {$gte:ISODate('2021-01-03T01:02:27.409+00:00')}, createdAt:{$lte:ISODate('2021-01-03T13:09:20.696+00:00') }}).toArray().forEach(txFaker => {
     
    
     print( db.tx.remove({_id:txFaker._id}))
     
})
 

 
