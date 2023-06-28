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
    UserVehicleInfo: userVehicleModel(),
    UserTripInfo: userTripModel(),
    UserExpenseInfo: userExpenseModel(),
};

// mongoose models with schema definitions

function userModel() {
    const schema = new Schema({
        email: { type: String, unique: true, required: true },
        hash: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        companyName: { type: String, required: false },
        phoneNumber: { type: String, required: false },
        profileImage: { type: String, required: false } 
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

function userVehicleModel(){

    const userVehiclechema = new Schema({
        userId: { type: String, required: false },
        vehicleType: { type: String, required: false },
        ManufacturerCompany: { type: String, required: false },
        fuelType: { type: String, required: false },
        OdometerReading: { type: String, required: false },
        vehicleModel: { type: String, required: false },
        vehicleAverage: {type: String, required: false},
        vehicleDefault: {type: String, required: false}
    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    userVehiclechema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
        }
    });

    return mongoose.models.UserVehicleInfo || mongoose.model('UserVehicleInfo', userVehiclechema);

}

function userTripModel(){

    const userTripsechema = new Schema({
        userId: { type: String, required: false },
        tripStartDate: { type: String, required: false },
        tripEndDate: { type: String, required: false },
        tripStartTime: { type:   String, required: false },
        tripEndTime: { type: String, required: false },
        startAddress: { type: String, required: false },
        endAddress: {type: String, required: false},
        chooseVehicle: {type: String, required: false},
        tripType: {type: String, required: false},
        tripNote: {type: String, required: false},
        tripTags: {type: String, required: false},
        RoundTrip: {type: String, required: false}
    }, {
        
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    userTripsechema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
        }
    });

    return mongoose.models.UserTripInfo || mongoose.model('UserTripInfo', userTripsechema);

}

function userExpenseModel(){

    const userExpensesechema = new Schema({
        userId: { type: String, required: false },
        expenseAmount: { type: String, required: false },
        expenseDate: { type: String, required: false },
        merchantName: { type:   String, required: false },
        expenseType: { type: String, required: false },
        Notes: { type: String, required: false }
    }, {
        
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    userExpensesechema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
        }
    });

    return mongoose.models.UserExpenseInfo || mongoose.model('UserExpenseInfo', userExpensesechema);

}