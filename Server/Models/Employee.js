const mongoose=require('mongoose');
// prejoiningschema
const prejoiningSchema=new mongoose.Schema({
    misClaniusDocument:{
        type:String,

    },
    personalRequirement:{
        type:String,
    },
    backgroundCheck:{
        type:String,
    },
    CV:{
        type:String,
    },
    writtenTest:{
        type:String,
    },
    interviewAssesmentForm:{
        type:String,
    },
    finalApproval:{
        type:String,
    },
    managmentForm:{
        type:String,
    },
    officerEmploymentAgreementLetter:{
        type:String,
    },
    otherDocuments:{
        type:String,
    }
});
//joiningSchema
const joiningSchema=new mongoose.Schema({
    medicalCertificate:{
        type:String,
    },
    criminalRecordVerifcation:{
        type:String,
    },
    DomicileCertificate:{
        type:String,
    },
    EducationalCertificate:{
        type:String,
    },
    ExperienceCertificate:{
        type:String
    },
    NationalID:{
        type:String,
    },
    joiningReport:{
        type:String,
    },
    AppointmentLetterEmail:{
        type:String,
    },
    inductionLetter:{
        type:String,
    },
    otherDocuments:{
      type:String,
    }

});
//ServiceHistorySchema
const serviceHistorySchema=new mongoose.Schema({
    consfirmationReprot:{
        type:String,
    },
    ExtensionOfProbationLetter:{
        type:String
    },
    confirmationLetter:{
        type:String,
    },
    transferLetter:{
        type:String,
    },
    incrementLetter:{
        type:String,
    },
    promotionLetter:{
        type:String,
    },
    chargeSheetLetter:{
        type:String,
    },
    SuspensionLetter:{
      type:String,
    },
    warningLetter:{
        type:String,
    },
    SeparationDocument:{
        type:String,
    },

});
const employeeSchema=new mongoose.Schema({
    employeeNumber:{
        type:String,
        required:true,
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,

    },
    Cnic:{
        type:Number,
        required:true
    },
    profileImage:{
        type:String,
        
    },
    phone:{
        type:Number,
        required:true
    },
    fatherName:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    
    joiningDate:{
        type:Date,
        default:Date.now,
    },
    remark:{
        type:String,

    },
    uid:{
        type:String,
    },
    userType:{
        type:String,
    },
    prejoiningDocuments:[prejoiningSchema],
    joiningDocuments:[joiningSchema],
    serviceHistory:[serviceHistorySchema],
    //time stamp for the creation and updation of the data
    createdAt:{
        type:Date,
    },
    updatedAt:{
        type:Date,
    }
});




//make model
const Employee=mongoose.model('Employee',employeeSchema);
//expoet model
module.exports=Employee;