# find all match
db.restaurants.find();

# find one 
db.restaurants.findOne({_id: ObjectId("xxxx)});

# update one
db.restaurants.updateOne({_id: ObjectId("xxx")}, {$set: { name: "This is a new name", "address.street": "this is a new street name"}});

# delete many that's matched condition
db.restaurants.deleteMany({_id: ObjectId("xxx")})

# delete all 
db.restaurants.deleteMany({});


# Planning our database structure

Collections: 
    1. Posts --> id, title, summary, body, date
    2. Authors --> id, name, email



