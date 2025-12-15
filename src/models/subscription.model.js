import mongoose, { Types } from "mongoose"

const subscriptionSchema = mongoose.Schema({
    subscriber : {
        type : Types.ObjectId,
        ref : "User"
    },
    channel : {
        type : Types.ObjectId,
        ref : "User"
    }
},{timestamps : true})

export const Subscription = mongoose.model("Subscription",subscriptionSchema)