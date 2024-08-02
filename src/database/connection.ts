import mongoose from 'mongoose'

export const connectToDatabase = async (): Promise<void> => {
  try {
    console.log('Connecting to database')
    const mongoURI = process.env.MONGO_URI ?? 'mongodb://root:changeme@localhost:27017/'
    await mongoose.connect(mongoURI)
    console.log('Database connection established')

  } catch (e) {
    console.log(e)
    console.log('Database connection failed')
    process.exit(1)
  }
}
