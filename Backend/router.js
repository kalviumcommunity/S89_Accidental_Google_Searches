const express = require("express");
const router = express.Router();
const model = require("./schema");


router.get("/getUser", async(req, res)=>{
    try{
        const details = await model.find();
        return res.status(200).json(details);
    }catch(error){
        console.log("Something went wrong", error);
        return res.status(500).send({msg:"Something went wrong", error});
    }
})


router.post("/user", async(req, res)=>{
    try{
        const {userName, email, password, phone} = req.body;
        if(!userName || !email || !password || !phone){
            return res.status(400).send({msg: "Please provide all the details"});

        }

        const userDetails = new model({userName, email, password, phone});
        await userDetails.save();
        return res.status(201).send({msg: "User created successfully", userDetails}); 

    }catch(error){
        return res.status(500).send({msg:"Something went wrong", error});

    }
});

router.put("/put_user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        console.log("ID:", id);

        if (!id) {
            return res.status(401).send({ msg: "Please provide id" });
        }

        const { userName, email, password, phone } = req.body;
        
        const updatedUser = await model.findByIdAndUpdate(
            id,
            { userName, email, password , phone}, 
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).send({ msg: "User not found" });
        }

        return res.status(200).send({ msg: "User updated successfully", updatedUser });

    } catch (error) {
        console.error("PUT Error:", error); // Log the full error
        return res.status(500).send({ msg: "Something went wrong", error });
    }
});

router.delete("/del_user/:id", async(req, res)=>{
    try{
        const {id} = req.params;
        console.log(id);
        if(!id){
            return res.status(401).send({msg: "Please provide id"});
        }
        const delete_id = await model.deleteOne({_id:id});
        return res.status(200).send({msg:"User deleted successfully"});

    }catch(error){
        return res.status(500).send({msg: "Something went wrong"});

    }
});



module.exports = router;
