//-----------------------Module Importation ------------//
// import express module
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
// import bcrypt module
const bcrypt = require("bcrypt");
// import multer module
const multer = require("multer");
// import path module
const path = require("path");
// import axios module
const axios = require("axios");


// import mongoose module
const mongoose = require("mongoose");
// import ObjectID
const { ObjectId } = require("mongodb");
// Connect APP to DB (sportVenusDB)
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/projetRelationDB');

// ---------------Express Application ---------//
// creates express application
const app = express();
//---------Model Importation-------------///
const Accompagnant = require("./models/accompagnant");
const Publication = require("./models/publication");
const Request = require("./models/request");
const User = require("./models/vusers");


// send JSON responses
app.use(bodyParser.json());
// Get Objects from Request
app.use(bodyParser.urlencoded({ extended: true }));
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
// Folder confiquration
app.use('/images', express.static(path.join('backend/images')));

const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'application/pdf': 'pdf',



};
const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});

//-----Business Logic------------//


//-----Signup Accompagnant-----/////


app.post("/accompagnants/signup", multer({ storage: storageConfig }).fields([{ name: 'img', maxCount: 1 }, { name: 'cv', maxCount: 1 }]), (req, res) => {
    console.log("Here into BL: Signup");
    const url = req.protocol + "://" + req.get("host");
    console.log("URL", url);
    let avatar = "";
    if (req.files.img) {
        avatar = url + '/images/' + req.files.img[0].filename;
    } else {
        avatar = url + '/images/' + "Anonymous-Avatar.jpg"
    }
    // http://localhost:3002
    bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
        console.log("Here crypted Pwd", cryptedPwd);

        let accp = new Accompagnant({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            telephone: req.body.telephone,
            status: req.body.status,
            email: req.body.email,
            password: cryptedPwd,
            adresse: req.body.adresse,
            experience: req.body.experience,
            role: req.body.role,
            gender: req.body.gender,
            img: avatar,
            cv: url + "/images/" + req.files.cv[0].filename,

        });
        accp.save((error, doc) => {
            console.log("Here error", error);
            console.log("Here doc", doc);
            if (error) {
                if (error.errors.email && !error.errors.telephone) {
                    res.json({ message: "Email exist", emailExist: true, telephoneExist: false });


                } else if (!error.errors.email && error.errors.telephone) {
                    res.json({ message: "Telephone exist", emailExist: false, telephoneExist: true });

                } else {
                    res.json({ message: "Email & Tel exist", emailExist: true, telephoneExist: true });
                }
            } else {
                res.json({ message: "Accompagnant added with success" });
            }

        });

    });

});

//-----Signup Clients-----/////
app.post("/clients/signup", multer({ storage: storageConfig }).single('img'), (req, res) => {
    console.log("Here into BL: Signup");
    const url = req.protocol + "://" + req.get("host");
    let path = req.file
    ?url + "/images/" + req.file.filename
    :url+ "/images/" + "anthony.jpg";
    console.log("URL", url);
    // http://localhost:3002
    bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
        console.log("Here crypted Pwd", cryptedPwd);

        let client = new Accompagnant({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            telephone: req.body.telephone,
            status: req.body.status,
            email: req.body.email,
            password: cryptedPwd,
            adresse: req.body.adresse,
            role: req.body.role,
            gender: req.body.gender,
            avatar: path,
        });
        client.save((error, doc) => {
            console.log("Here error", error);
            console.log("Here doc", doc);
            if (error) {
                if (error.errors.email) {
                    res.json({ message: "Email exist" });
                }

            } else {
                res.json({ message: "Added with success" });

            }
        });
    });

});
//-----Signup Admin-----/////
app.post("/admin/signup", multer({ storage: storageConfig }).single('img'), (req, res) => {
    console.log("Here into BL: Signup");
    const url = req.protocol + "://" + req.get("host");
    let path = req.file
    ?url + "/images/" + req.file.filename
    :url+ "/images/" + "anthony.jpg";
    console.log("URL", url);
    // http://localhost:3002
    bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
        console.log("Here crypted Pwd", cryptedPwd);

        let admin = new Accompagnant({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            telephone: req.body.telephone,
            email: req.body.email,
            password: cryptedPwd,
            adresse: req.body.adresse,
            role: req.body.role,
            gender: req.body.gender,
            avatar: path,
        });
        admin.save((error, doc) => {
            console.log("Here error", error);
            console.log("Here doc", doc);
            if (error) {
                if (error.errors.email) {
                    res.json({ message: "Email exist" });
                }

            } else {
                res.json({ message: "Added with success" });

            }
        });
    });

});

///------- login----/////
// Business logic : login
app.post("/accompagnants/login", (req, res) => {
    console.log("Here into login", req.body);
    let user;
    Accompagnant.findOne({ $or: [{ email: req.body.email }, { telephone: req.body.telephone }] }).then((doc) => {
        if (!doc) {
            res.json({ msg: "0" });

        }
        user = doc;
        return bcrypt.compare(req.body.pwd, doc.password);
    }).then(
        (pwdResponse) => {
            console.log("here pwdResponse ", pwdResponse);
            if (!pwdResponse) {
                res.json({ msg: "1" });

            } else {
                // send user information {id , fName, lName, role}
                let accpTosend = {
                    id: user._id,
                    fName: user.firstName,
                    lName: user.lastName,
                    role: user.role,
                };
                res.json({ user: accpTosend, msg: "2" });

            }
        });


});


// Business Logic Get All CLIENTS
app.get("/clients", (req, res) => {
    console.log("Here into BL: Get All clients");
    Accompagnant.find({ "role": { "$in": "clients" } }).then((docs) => {
        // console.log("Here data after search all clients", docs);
        res.json({ clients: docs });
    });
});

// Business Logic:Get clients By ID
app.get("/clients/:x", (req, res) => {
    let id = req.params.x;
    console.log("Here into BL: Get Client By ID", id);
    Accompagnant.findOne({ _id: id }).then((doc) => {
        console.log("Here doc", doc);
        doc
            ? res.json({ client: doc })
            : res.json({ message: "Client does not exist" });
    });

}
);


///---Accompagnant---------//////
// Business Logic Get All Accompagnants
app.get("/accompagnants", (req, res) => {
    console.log("Here into BL: Get All accompagnants");
    Accompagnant.find({ "role": { "$in": "accompagnent" } }).then((docs) => {
        // console.log("Here data after search all accompagnants", docs);
        res.json({ accompts: docs });
    });
});
// Business Logic:Get accompagnants By ID
app.get("/accompagnants/:x", (req, res) => {
    let id = req.params.x;
    console.log("Here into BL: Get Accompagnant By ID", id);
    Accompagnant.findOne({ _id: id }).then((doc) => {
        console.log("Here doc", doc);
        doc
            ? res.json({ accompagnant: doc })
            : res.json({ message: "Accompagnant does not exist" });
    });

    
}

);
// Business logic : Delete accompagnant width admin ----////
app.delete("/accompagnants/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Accompagnants By ID", id);
    Accompagnant.deleteOne({ _id: id }).then((response) => {
        console.log("Here response after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});

//Business Logic:Edit Accompagnant
app.put("/accompagnants", (req, res) => {
    console.log("here into BL:Edit accompagnant", req.body);

    Accompagnant.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "User is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
});

// //////----Display All ------////////
app.get("/allAcompagnants", (req, res) => {
    console.log("Here into BL: Get All display all accompagnants");
    Accompagnant.find({ "role": { "$in": "accompagnent" } }).then((docs) => {
        console.log("Here data after search all display all accompagnants", docs);
        res.json({ allaccomp: docs });
    });
});
//// -----Edit All Accompagnants------/////

//Business Logic:Edit Client
app.put("/allAcompagnants", (req, res) => {
    console.log("here into BL:Edit all accompagnants", req.body);

    Accompagnant.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "User is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
});

////---admin-----////
/////---business logic all admin ------/////
// Business Logic Get All Admin
app.get("/admin", (req, res) => {
    console.log("Here into BL: Get All admin");
    Accompagnant.find({ "role": { "$in": "admin" } }).then((docs) => {
        // console.log("Here data after search all admin", docs);
        res.json({ admin: docs });
    });
});
///---- buisness logic admin by id----/////
app.get("/admin/:x", (req, res) => {
    let id = req.params.x;
    console.log("Here into BL: Get Admin By ID", id);
    Accompagnant.findOne({ _id: id }).then((doc) => {
        console.log("Here doc", doc);
        doc
            ? res.json({ admin: doc })
            : res.json({ message: "Admin does not exist" });
    });

    // res.json({ match: matchObj })
}
);
////-- Buisness logic : Delete admin from page admin --- /////
app.delete("/admin/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Client By ID", id);
    Accompagnant.deleteOne({ _id: id }).then((response) => {
        console.log("Here response after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});


///---add publications--///
// Business Logic:Add Publication
app.post("/publications", (req, res) => {
    console.log("Here into BL: Add Publication", req.body);
    let publication = new Publication({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        reservation: req.body.reservation,
        clientId:req.body.clientId,     
    });
    console.log("here aded pub",publication);
   publication.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ message: "Added with success" });
        } else {
            res.json({ message: "Error" });
        }
    });
});
////---Delete from page all publication in admin---////
// Business Logic:Delete publication By ID
app.delete("/publications/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Publication By ID", id);
    Publication.deleteOne({ _id: id }).then((response) => {
        console.log("Here response after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});


///-----------confirmation------///////
// business logic: confirmed status
app.post("/accompagnants/status/:id", (req, res) => {
    console.log("here id ", req.params.id);
    let id = req.params.id;
    Accompagnant.updateOne({ _id: id }, { status: "confirmed" }).then((docs) => {
        (response) => {
            console.log("here response after update", response);
            if (response.modifiedCount == 1) {
                res.json({ message: `status N° : Edited with success` })
            } else {
                res.json({ message: `Not Edited` })
            }
        }
    })
})

// business logic : confirmed status client
app.post("/clients/status/:id", (req, res) => {
    console.log("here id ", req.params.id);
    let id = req.params.id;
    Accompagnant.updateOne({ _id: id }, { status: "confirmed" }).then((docs) => {
        (response) => {
            console.log("here response after update", response);
            if (response.modifiedCount == 1) {
                res.json({ message: `status N° : Edited with success` })
            } else {
                res.json({ message: `Not Edited` })
            }
        }
    })
})
// business logic : confirmed status publication
app.post("/publications/status/:id", (req, res) => {
    console.log("here id ", req.params.id);
    let id = req.params.id;
    Publication.updateOne({ _id: id }, { status: "confirmed" }).then((docs) => {
        (response) => {
            console.log("here response after update", response);
            if (response.modifiedCount == 1) {
                res.json({ message: `status N° : Edited with success` })
            } else {
                res.json({ message: `Not Edited` })
            }
        }
    })
})

//---Buisiness Logic to get all publications --- aggregat/////
app.get("/publications/all",(req, res)=>{
    console.log("here publications with comments");
    Publication.aggregate(
        [
        
        {
        $lookup: {
        from: "accompagnants", // collection to join
        localField: "clientId", //field from the input documents
        foreignField: "_id", //field from the documents of the "from" collection
        as: "publications", // output array field
        },
        },
    ],
        (error, docs) => {
            console.log("here all pubs",docs);
        res.status(200).json({
        publications: docs,
        });
        }
    );

})
//---Buisiness Logic to get all publications aggregat by id ---/////
app.get("/publications/:id",(req, res)=>{
    console.log("here publications with id",req.params.id);
    Publication.aggregate(
        [
            {
                $match: { clientId: ObjectId(req.params.id) }, ///$match:pour filtrer les documents d'une collection
              },
        {
        $lookup: {
        from: "accompagnants", // collection to join
        localField: "clientId", //field from the input documents
        foreignField: "_id", //field from the documents of the "from" collection
        as: "clients", // output array field
        },
        },
        {
            $lookup: {
              from: "accompagnants", // collection to join
              localField: "accompagnantId", //field from the input documents
              foreignField: "_id", //field from the documents of the "from" collection
              as: "accompagnants", // output array field
            },
          },
    ],
        (error, docs) => {
            console.log("here  pubs by client id",docs);
        res.status(200).json({
        pubs: docs,
        });
        }
    );

})
//---- Accompagnent: consulter les publications des clients----//////

app.get("/publications/",(req, res)=>{
    console.log("here publications with id",req.params.id);
    Publication.aggregate(
        [
            {
                $match: { status:"confirmed" },
              },
        {
        $lookup: {
        from: "accompagnants", // collection to join
        localField: "clientId", //field from the input documents
        foreignField: "_id", //field from the documents of the "from" collection
        as: "clients", // output array field
        },
        },
        
            
    ],
        (error, docs) => {
            console.log("here  pubs by client id",docs);
        res.status(200).json({
        pubs: docs,
        });
        }
    );

})

//-----Acceptation de travail------/////

app.put("/publications/post/notif/active", (req, res) => {
    console.log("here Notif");
    let accompagnantId = req.body.accompagnantId;
    let reservation = req.body.reservation;
    console.log("here new accompId", accompagnantId);
    console.log("here new reserved", reservation);
    console.log("here ID",req.body._id);
    Publication.updateOne({ _id: req.body._id }, req.body).then(
      (response) => {
        console.log("here response after update", response);
        if (response.modifiedCount == 1) {
          res.json({ message: `User : Edited with success` });
        } else {
          res.json({ message: `Not Edited` });
        }
      });
  })

///-----Liste des Accompagnants----------- a demain inchalah--- pas encore executer cette methode pas execution/////
app.get("/accompagnants/all/affichage",(req, res)=>{
    console.log("here affiche accompagnants with afficheliste");
   Accompagnant.aggregate(
        [
            {
                $match: { status:"confirmed" },
              },
        
        {
        $lookup: {
        from: "accompagnants", // collection to join
        localField: "accompagnantId", //field from the input documents
        foreignField: "_id", //field from the documents of the "from" collection
        as: "affichelistes", // output array field
        },
        },
    ],
        (error, docs) => {
            console.log("here all affichage",docs);
        res.status(200).json({
         affichelistes: docs,
        });
        }
    );

})




///search accompagnants--/////
app.post("/accompagnants/search", (req, res) => {
    let searchObj = req.body;
    console.log(searchObj);
    Accompagnant.find({
      role: "accompagnent",
      status: "confirmed",
      //search by adreese ou experience
      $or: [
        { adresse: searchObj.adresse },
        {
          experience: {
            $lte: searchObj.experiencemax,
            $gte: searchObj.experiencemin,
           
          },
        },
      ],
    }).then((docs) => {
      res.json({ searchTab: docs });
    });
  });




///----page add reservation---///////////

app.post("/requests", (req, res) => {
    console.log("Here into BL: Add Request", req.body);
    let request = new Request({
        telephone: req.body.telephone,
        adresse: req.body.adresse,
        description: req.body.description,
             
    });
    console.log("here aded reserv",request);
   request.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ accepter: "Added with success" });
        } else {
            res.json({ accepter: "Error" });
        }
    });
});
//// get all reservation---//////
app.get("/requests", (req, res) => {
    console.log("Here into BL: Get All reservations");
    Request.find().then((docs) => {
        res.json({ allreservation: docs });
    });
});
////-- Buisness logic : Delete response from page admin --- /////
app.delete("/requests/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Response By ID", id);
    Request.deleteOne({ _id: id }).then((response) => {
        console.log("Here response after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});


//---Buisiness Logic to get all publication on clients aggregat  ---/////
// app.get("/publications/client",(req, res)=>{
//     console.log("here publications with comments");
//     Publication.aggregate(
//         [
        
//         {
//         $lookup: {
//         from: "accompagnant", // collection to join
//         localField: "clientId", //field from the input documents
//         foreignField: "_id", //field from the documents of the "from" collection
//         as: "clients", // output array field
//         },
//         },
//     ],
//         (error, docs) => {
//         res.status(200).json({
//         espace: docs,
//         });
//         }
//     );

// })
 ///----Autre methodes -----//////

 







//*--- validation--////
// Business logic : Inscription
app.post("/users/signupV", (req, res) => {
    console.log("Here into BL: Inscrire",req.body);
    let user = new User({
        
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        telephone : req.body.telephone,
        pwd : req.body.pwd,
        
    })
    user.save((error,doc)=>{
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (error) {
            
                res.json({ message: "error" });
            
           
        } else {
            res.json({message: "Added with success" });
            
        }
    });
});

// Business logic : login
app.post("/users/login",(req,res) =>{
    let client;
    console.log("Here into login",req.body);
    User.findOne({telephone : req.body.telephone}).then((doc) =>{
        console.log(doc);
        if (!doc) {
            res.json({msg: "user not exist"});  
        } 
       else if (req.body.pwd == doc.pwd) {
        res.json({msg: "user conceted"});  
       }
       else{
        res.json({msg: "eror "});
       }
    })
});
// Business Logic Get All users
app.get("/users", (req, res) => {
    console.log("Here into BL: Get All clients");
    User.find({ "role": { "$in": "user" } }).then((docs) => {
       
        res.json({ users: docs });
    });
});
// Business Logic:Get accompagnants By ID
app.get("/users/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Get user By ID", id);
    User.findOne({ _id: id }).then((doc) => {
        console.log("Here doc", doc);
        doc
            ? res.json({ client: doc })
            : res.json({ message: "Accompagnant does not exist" });
    });

    
}

);
//Business Logic:Edit User validaite
app.put("/users", (req, res) => {
    console.log("here into BL:Edit client", req.body);

    User.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "User is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
});







//--------App Exportation ------------/////
// make app importable from another files
module.exports = app;