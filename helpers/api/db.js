import getConfig from 'next/config';
import mongoose from 'mongoose';

const { serverRuntimeConfig } = getConfig();
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGODB_URI || serverRuntimeConfig.connectionString);
mongoose.Promise = global.Promise;

export const db = {
    User: userModel(),
    OwnTracking : ownTrackingModel(),
    TeamTracking : teamTrackingModel(),
};

// mongoose models with schema definitions

function userModel() {
    const schema = new Schema({
        email: { type: String, unique: true, required: true },
        hash: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        companyName: { type: String, required: false }
    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.hash;
        }
    });

    return mongoose.models.User || mongoose.model('User', schema);
}

function ownTrackingModel(){

    const ownTrackingschema = new Schema({
        userId: { type: String, required: false },
        useType: { type: String, required: false },
        employeetype: { type: String, required: false },
        CompanyName: { type: String, required: false },
        Manageremail: { type: String, required: false },
        employeetype: { type: String, required: false },
        custom_occupation: {type: String, required: false},
        phoneNumber: {type: String, required: false},
        userEmail: { type: String, required: false },
        fullName: {type: String, required: false}
    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    ownTrackingschema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
        }
    });

    return mongoose.models.OwnTracking || mongoose.model('OwnTracking', ownTrackingschema);
}
    function teamTrackingModel(){

        const teamTrackingschema = new Schema({
            userId: { type: String, required: false },
            useType: { type: String, required: false },
            fullName: { type: String, required: false },
            CompanyName: { type: String, required: false },
            teamEmail: { type: String, required: false },
            teamRole: { type: String, required: false },
            teamProgram: {type: String, required: false},
            phoneNumber: {type: String, required: false},
            teamSize: {type: String, required: false}
        }, {
            // add createdAt and updatedAt timestamps
            timestamps: true
        });
    
        teamTrackingschema.set('toJSON', {
            virtuals: true,
            versionKey: false,
            transform: function (doc, ret) {
                delete ret._id;
            }
        });
    
        return mongoose.models.TeamTracking || mongoose.model('TeamTracking', teamTrackingschema);

}