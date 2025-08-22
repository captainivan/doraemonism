import mongoose, { model } from "mongoose"

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
})

const Message = mongoose.models.Message || mongoose.model("Message",messageSchema);

export default Message;