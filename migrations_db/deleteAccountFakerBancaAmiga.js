// Script que pretende eliminar todas las Cuentas de banca Amiga que no cumpla con los parametros y tambien sus Tx relacionadas
 

 // Parametros:  cuenta de 20 numero, comienza por 0172,

 db.tx.find({type: "deposit",  amount: 1, status: 0, createdAt: {$gte:ISODate('2021-01-03T01:02:27.409+00:00')}, createdAt:{$lte:ISODate('2021-01-03T13:09:20.696+00:00') }}).toArray().forEach(txFaker => {
     
    
     print( db.tx.remove({_id:txFaker._id}))
     
})
 
