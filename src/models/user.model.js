// importar mongoose
import mongoose from 'mongoose'

// definir el esquema de usuario
const userSchema = new mongoose.Schema({
    username:  {
        type: String,
        required: true,
        trim: true
    },
    email:  {
        type: String,
        required: true,
        trim: true,
    },
    password:  {
        type: String,
        required: true,
        trim: true,
    }
}, {
    timestamps: true
})


export default mongoose.model('User', userSchema)
