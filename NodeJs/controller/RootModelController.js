let express = require('express');
const secret='sdfsdfsd31321SDFSD132F032032023dfgdfgsdfgdfgzeazqef321313211';
const jwt=require('jsonwebtoken');
class RootModelController {
    constructor(model) {
        this.router = express.Router();
        this.model = model;
        // this.service=service;
        this.router.get('/', (Request, Response) => {
            console.log("Router Get");
            this.model.findAll().then((occurence) => {
                console.log(occurence);
            })
        });
        /*  this.router.get('/:id',(Request,Response)=>{
            console.log("Router Get");
        }) */
        this.router.post('/', (Request, Response) => {
            // console.log("Router Post");
            // console.log("Request Body", Request.body);
            //Search user on Login
            if (Request.body.email && Request.body.password) {
                this.model.count({
                    where: {
                        "email": Request.body.email.toLocaleLowerCase(),
                        "password": Request.body.password.toLocaleLowerCase()
                    }
                }).then((occurence) => {
                    console.log("login occurence:", occurence);
                    if (occurence > 0) {
                        delete Request.body.password;
                        //create token
                        const token=jwt.sign({iss:'http://localhost:8080',role:'admin',email:Request.body.email},secret)
                        // return token to client
                        Response.json({ success: true, token:token });
                        // Response.json({ success: true, data: Request.body });
                    } else {
                        Response.json({ success: false, message: 'Données incorrects' });
                    }
                }
                    )
            } else {
                Response.json({ success: false, message: 'Données manquantes' })
            }

        });
        this.router.put('/', (Request, Response) => {
            console.log("Router Put");
            //Register create if email not already exist
            if (Request.body.email && Request.body.password) {
                this.model.count({
                    where: {
                        "email": Request.body.email.toLocaleLowerCase()
                    }
                }).then((occurence) => {
                    console.log("register occurence:", occurence)
                     
                    if (occurence > 0) {
                        Response.json({ created: false, message: "Un compte avec cet email existe déjà" })
                    } else {
                        this.model.create({
                            email: Request.body.email.toLocaleLowerCase(),
                            password: Request.body.password.toLocaleLowerCase()
                        })
                        Response.json({ created: true, message: "Le compte a correctement été créé"})
                    }
                })
                /*          this.model.findOrCreate(
                             {
                                 where:
                                 {
                                     email: Request.body.email_register.toLocaleLowerCase(),
                                     password: Request.body.password_register.toLocaleLowerCase()
                                 }
                             })
                             .spread((user, created) => {
                                 console.log("user.get({plain:true}):", user.get({ plain: true }))
                                 // console.log("created:", created)
                                 //send false if user already exits else true
                                 if(created==false){
                                     Response.json({created:false,message:'Compte avec cet email et mdp déjà existant'})
                                 }else{
                                     Response.json({created:true,message:'Compte créé avec success'})
                                 }
                             }) */
            } else {
                Response.json({ success: false, message: 'Données manquantes' })
            }
        });
        this.router.delete('/:id', (Request, Response) => {
            console.log("Router delete");
        });
    }
    getRoot() {
        return this.router;
    }
    getModel() {
        return this.model;
    }

}
module.exports.Controller = RootModelController;