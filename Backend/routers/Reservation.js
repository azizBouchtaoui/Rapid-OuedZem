const express = require('express');
const router = express.Router();
//const uri = "mongodb+srv://aziz123:aziz123@cluster0.hguh3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//*const client =  new MongoClient(uri);
/*try {
    await client.connect();
    await listDatabases(client);


async function findOneListingByName(client, nameOfListing){
    const result = await client.db.("RapidOZ").collection("Villes").find();
}
}
catch (e){
    console.error(e);
}
finally {
    await client.close();
}*/


router.use('/api/stuff', (req, res, next) => {
    const stuff = [
      {
        _id: 'oeihfzeoi',
        title: 'Mon premier objet',
        description: 'Les infos de mon premier objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 4900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'Mon deuxième objet',
        description: 'Les infos de mon deuxième objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 2900,
        userId: 'qsomihvqios',
      },
    ];
    res.status(200).json(stuff);
  });

module.exports = router ;