const courseSchema = require('../models/course')
const dbServices = require('../dbService/dbService')

exports.createCountryService = async (data) => {
    try {
        if (data.isDefault === true) {
            await courseSchema.updateOne({ isDefault: true }, { $set: { isDefault: false } })
        }
        let result = await dbServices.createDocument(courseSchema, data)
        const count = await courseModel.countDocuments({})
        await courseSchema.updateOne({ _id: result._id }, { $inc: { seq: count } })
        return result
    } catch (error) {
        //logger.error("Error - createCountry", error);
        throw new Error(error)
    }
};


