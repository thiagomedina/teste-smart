import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
  {

    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
    },
    deadline: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model(' ProductSchema', ProductSchema)
