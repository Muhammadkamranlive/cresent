
const express=require('express');
const expressAsyncHandler = require('express-async-handler');
const Employee = require('../Models/Employee');


//post request
const employeeeAdd=expressAsyncHandler(async(req,res,next)=>{
   try{
        //check existing employee by email
      
       const employeee=await Employee.findOne($or[{email:req.body.email},{employeeNumber:req.body.employeeNumber}]);
         if(employeee){
            return res.status(400).json({
                    message:"Employee already exists"
                });
         }
         else{
            const employee= new Employee({
                employeeNumber:req.body.employeeNumber,
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                Cnic:req.body.Cnic,
                profileImage:req.body.profile,
                phone:req.body.phone,
                fatherName:req.body.fatherName,
                designation:req.body.designation,
                salary:req.body.salary,
                userType:req.body.userType,
                uid:req.body.uid,
                joiningDate:req.body.joiningDate,
                remark:req.body.remark,
                prejoiningDocuments:req.body.prejoiningDocuments.map(prejoiningDocument=>{
                    return {
                        misClaniusDocument:prejoiningDocument.misClaniusDocument,
                        personalRequirement:prejoiningDocument.personalRequirement,
                        backgroundCheck:prejoiningDocument.backgroundCheck,
                        CV:prejoiningDocument.CV,
                        writtenTest:prejoiningDocument.writtenTest,
                        interviewAssesmentForm:prejoiningDocument.interviewAssesmentForm,
                        finalApproval:prejoiningDocument.finalApproval,
                        managmentForm:prejoiningDocument.managmentForm,
                        officerEmploymentAgreementLetter:prejoiningDocument.officerEmploymentAgreementLetter,
                        otherDocuments:prejoiningDocument.otherDocuments,
                    }
                }),
                joiningDocuments:req.body.joiningDocuments.map(joiningDocument=>{
                    return {
                        medicalCertificate:joiningDocument.medicalCertificate,
                        criminalRecordVerifcation:joiningDocument.criminalRecordVerifcation,
                        DomicileCertificate:joiningDocument.DomicileCertificate,
                        EducationalCertificate:joiningDocument.EducationalCertificate,
                        ExperienceCertificate:joiningDocument.ExperienceCertificate,
                        NationalID:joiningDocument.NationalID,
                        joiningReport:joiningDocument.joiningReport,
                        AppointmentLetterEmail:joiningDocument.AppointmentLetterEmail,
                        inductionLetter:joiningDocument.inductionLetter,
                        
                    }
                }),
                //servicehistorySchema
                serviceHistory:req.body.serviceHistory.map(serviceHistory=>{
                   return{
                     consfirmationReprot:serviceHistory.confirmationReprot,
                     ExtensionOfProbationLetter:serviceHistory.ExtensionOfProbationLetter,
                     confirmationLetter:serviceHistory.confirmationLetter,
                     transferLetter:serviceHistory.transferLetter,
                     incrementLetter:serviceHistory.incrementLetter,
                     promotionLetter:serviceHistory.promotionLetter,
                     chargeSheetLetter:serviceHistory.chargeSheetLetter,
                     SuspensionLetter:serviceHistory.SuspensionLetter,
                     warningLetter:serviceHistory.warningLetter,
                     SeparationDocument:serviceHistory.SeparationDocument,
        
                   }
                }),
                //timestamp
                createdAt:new Date().toISOString(),
                updatedAt:new Date().toISOString(),
        
            });
            await employee.save();
            res.status(200).json({
                message:'Employee added successfully',
                employee
            });
        
         }
      
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:err.message
            
        });
    }
    
});
//find employ by firstname last name or employee number
const findEmployee=expressAsyncHandler(async(req,res,next)=>{
    try {
        
        // like search
        const employee=await Employee.find({$or:[{firstName:new RegExp(req.query.firstName,'i')},{lastName:new RegExp(req.query.lastName,'i')},{employeeNumber:new RegExp(req.query.employeeNumber,'i')}]});
        console.log(employee);
        if(employee.length>0){
          
            res.status(200).json(
                employee
            );
        }else{
            res.status(404).json({
                message:'Employee not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            message:error.message
        
        })
    }
})
//update employee 
const employeeeUpdate=expressAsyncHandler(async(req,res,next)=>{
    try {
        const employe=await Employee.findByIdAndUpdate({_id:req.headers.id},
            {
                employeeNumber:req.body.employeeNumber,
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                Cnic:req.body.Cnic,
                profileImage:req.body.profile,
                phone:req.body.phone,
                fatherName:req.body.fatherName,
                designation:req.body.designation,
                salary:req.body.salary,
                joiningDate:req.body.joiningDate,
                remark:req.body.remark,
                userType:req.body.userType,
                uid:req.body.uid,
                prejoiningDocuments:req.body.prejoiningDocuments.map(prejoiningDocument=>{
                    return {
                        misClaniusDocument:prejoiningDocument.misClaniusDocument,
                        personalRequirement:prejoiningDocument.personalRequirement,
                        backgroundCheck:prejoiningDocument.backgroundCheck,
                        CV:prejoiningDocument.CV,
                        writtenTest:prejoiningDocument.writtenTest,
                        interviewAssesmentForm:prejoiningDocument.interviewAssesmentForm,
                        finalApproval:prejoiningDocument.finalApproval,
                        managmentForm:prejoiningDocument.managmentForm,
                        officerEmploymentAgreementLetter:prejoiningDocument.officerEmploymentAgreementLetter,
                        otherDocuments:prejoiningDocument.otherDocuments,
                    }
                }),
                joiningDocuments:req.body.joiningDocuments.map(joiningDocument=>{
                    return {
                        medicalCertificate:joiningDocument.medicalCertificate,
                        criminalRecordVerifcation:joiningDocument.criminalRecordVerifcation,
                        DomicileCertificate:joiningDocument.DomicileCertificate,
                        EducationalCertificate:joiningDocument.EducationalCertificate,
                        ExperienceCertificate:joiningDocument.ExperienceCertificate,
                        NationalID:joiningDocument.NationalID,
                        joiningReport:joiningDocument.joiningReport,
                        AppointmentLetterEmail:joiningDocument.AppointmentLetterEmail,
                        inductionLetter:joiningDocument.inductionLetter,}}),
                serviceHistory:req.body.serviceHistory.map(serviceHistory=>{
                    return{
                        consfirmationReprot:serviceHistory.confirmationReprot,
                        ExtensionOfProbationLetter:serviceHistory.ExtensionOfProbationLetter,
                        confirmationLetter:serviceHistory.confirmationLetter,
                        transferLetter:serviceHistory.transferLetter,
                        incrementLetter:serviceHistory.incrementLetter,
                        promotionLetter:serviceHistory.promotionLetter,
                        chargeSheetLetter:serviceHistory.chargeSheetLetter,
                        SuspensionLetter:serviceHistory.SuspensionLetter,
                        warningLetter:serviceHistory.warningLetter,
                        SeparationDocument:serviceHistory.SeparationDocument,
                    }
                })
    
                
              })
     res.status(200).send({
         message:'Employee details has  been updated successfully'
     });
    } catch (error) {
        res.status(400).send(
            error.message
        )  
    }

})
//show all employees
const employeeeShowAll=expressAsyncHandler(async(req,res,next)=>{
    try{
        const employees= await Employee.find();
        res.status(200).send(employees);
    }catch(err){
        console.log(err);
    }
});

//employee show by id
const employeeeShowById=expressAsyncHandler(async(req,res,next)=>{
    try{
       
       const employee= await Employee.findById({_id:req.params.id});
        res.status(200).send([employee]);
    }catch(err){
        console.log(err);
        res.status(500).json(err.message);
    }
});
//update employee


//update prejoining documents
const employeeeUpdatePrejoiningDocuments=expressAsyncHandler(async(req,res,next)=>{
    try{
       
       //update prejoining documents have to  update all not possible with single update
       const employee= await Employee.findById({_id:req.headers.id});
       const prejoining=employee.prejoiningDocuments.id(req.headers.subid);
      
            prejoining.misClaniusDocument=req.body.misClaniusDocument ||prejoining.misClaniusDocument ;
            prejoining.personalRequirement=req.body.personalRequirement || prejoining.personalRequirement;
            prejoining.backgroundCheck= req.body.backgroundCheck ||prejoining.backgroundCheck;
            prejoining.CV=req.body.CV || prejoining.CV;
            prejoining.writtenTest=req.body.writtenTest|| prejoining.writtenTest;

            prejoining.interviewAssesmentForm=req.body.interviewAssesmentForm||prejoining.interviewAssesmentForm;
            prejoining.finalApproval=req.body.finalApproval||prejoining.finalApproval;
            prejoining.managmentForm=req.body.managmentForm || prejoining.managmentForm;
            prejoining.officerEmploymentAgreementLetter=req.body.officerEmploymentAgreementLetter || prejoining.officerEmploymentAgreementLetter;
            prejoining.otherDocuments=req.body.otherDocuments||prejoining.otherDocuments;
           
          

        employee.save();
        res.status(200).json({
            message:'Employee updated successfully',
            
            employee

        });

    }catch(err){
        console.log(err);
    }
});
//update joining documents
const employeeeUpdateJoiningDocuments=expressAsyncHandler(async(req,res,next)=>{
    try{
        const employee=  await Employee.findOne({_id:req.headers.id});
        const joining=employee.joiningDocuments.id(req.headers.subid);
            
                        joining.medicalCertificate=req.body.medicalCertificate ||joining.medicalCertificate;
                        joining.criminalRecordVerifcation=req.body.criminalRecordVerifcation ||joining.criminalRecordVerifcation;
                        joining.DomicileCertificate=req.body.DomicileCertificate||joining.DomicileCertificate;
                        joining.EducationalCertificate=req.body.EducationalCertificate||joining.EducationalCertificate;
                        joining.ExperienceCertificate=req.body.ExperienceCertificate||joining.ExperienceCertificate ;
                        joining.NationalID=req.body.NationalID||joining.NationalID ,
                        joining.joiningReport=req.body.joiningReport ||joining.joiningReport ,
                        joining.AppointmentLetterEmail= req.body.AppointmentLetterEmail||joining.AppointmentLetterEmail,
                        joining.inductionLetter=req.body.inductionLetter|| joining.inductionLetter,
                   
                
        await employee.save();
        res.status(200).json({
            message:'Employee updated successfully',
            employee
        });

    }catch(err){
        console.log(err);
    }
})
//update service history
const employeeeUpdateServiceHistory=expressAsyncHandler(async(req,res,next)=>{
   try{
    
    console.log(req.body);
    const employee=  await Employee.findOne({_id:req.headers.id});
    const serviceHistory=employee.serviceHistory.id(req.headers.subid);
    serviceHistory.consfirmationReprot= req.body.consfirmationReprot ||serviceHistory.confirmationReprot;
    serviceHistory.ExtensionOfProbationLetter=req.body.ExtensionOfProbationLetter ||serviceHistory.ExtensionOfProbationLetter;
    serviceHistory.confirmationLetter=req.body.confirmationLetter ||serviceHistory.confirmationLetter;
    serviceHistory.transferLetter=req.body.transferLetter ||serviceHistory.transferLetter;
    serviceHistory.incrementLetter=req.body.incrementLetter ||serviceHistory.incrementLetter;
    serviceHistory.promotionLetter=req.body.promotionLetter ||serviceHistory.promotionLetter;
    serviceHistory.chargeSheetLetter=req.body.chargeSheetLetter ||serviceHistory.chargeSheetLetter;
    serviceHistory.SuspensionLetter=req.body.SuspensionLetter ||serviceHistory.SuspensionLetter;
    serviceHistory.warningLetter=req.body.warningLetter ||serviceHistory.warningLetter;
    serviceHistory.SeparationDocument=req.body.SeparationDocument ||serviceHistory.SeparationDocument;

   

    await  employee.save();


   return res.status(200).send({
        message:'Employee updated successfully',
        employee,
        
    });
    

   }catch(err){
       console.log(err);
       return res.status(404).send(
        err.message
       )
   }
});
//delete employee
const employeeeDelete=expressAsyncHandler(async(req,res,next)=>{
    try{
        console.log(req.user)
        const employee= await Employee.findByIdAndDelete({_id:req.params.id});
        res.status(200).send({
            message:'Employee deleted successfully',
            employee
        });
        console.log('delete');
        
    }catch(err){
        console.log(err);
    }
});
//delete service history
const employeeeDeleteServiceHistory=expressAsyncHandler(async(req,res,next)=>{
    try{
       //find document
         const employee= await Employee.findById({_id:req.headers.id});
            //find by id and remove array
        employee.serviceHistory.id(req.headers.subid).remove();
        //save
       const response= await employee.save();
        res.status(200).json({
            message:'Service history deleted successfully',
            response
        });

    }catch(err){
        console.log(err);
    }
});

//delete prejoining documents
const employeeeDeletePrejoiningDocuments=expressAsyncHandler(async(req,res,next)=>{
    try{
        //find document
         const employee= await Employee.findById({_id:req.headers.id});
            //find by id and remove array
        employee.prejoiningDocuments.id(req.headers.subid).remove();
        //save
       const response= await employee.save();
        res.status(200).json({
            message:'Prejoining documents deleted successfully',
            response
        });

    }catch(err){
        console.log(err);
    }
});
//delete joining documents
const employeeeDeleteJoiningDocuments=expressAsyncHandler(async(req,res,next)=>{
    try{
        //find document
         const employee= await Employee.findById({_id:req.headers.id});
            //find by id and remove array
        employee.joiningDocuments.id(req.headers.subid).remove();
        //save
       const response= await employee.save();
        res.status(200).json({
            message:'Joining documents deleted successfully',
            response
        });

    }catch(err){
        console.log(err);
    }
});

//add prejoining documents
const employeeeAddPrejoiningDocuments=expressAsyncHandler(async(req,res,next)=>{
    try{
        const employee= await Employee.findOne({employeeNumber:req.headers.id});
        if(!employee){
            return res.status(404).json({
                message:'Employee not found'
            })
        }
        if(employee.prejoiningDocuments.length===0){
            employee.prejoiningDocuments.push({
                misClaniusDocument:req.body.misClaniusDocument,
                personalRequirement:req.body.personalRequirement,
                backgroundCheck:req.body.backgroundCheck,
                CV:req.body.CV,
                writtenTest:req.body.writtenTest,
                interviewAssesmentForm:req.body.interviewAssesmentForm,
                finalApproval:req.body.finalApproval,
                managmentForm:req.body.managmentForm,
                officerEmploymentAgreementLetter:req.body.officerEmploymentAgreementLetter,
                otherDocuments:req.body.otherDocuments,
    
            });
            const response= await employee.save();
            res.status(200).json({
                message:'Prejoining documents added successfully',
                response
            });
        }else{
            res.status(404).json({
                message:'Employee already have prejoining Documents you need to update it'
            });
        }
       
    }catch(err){
        console.log(err);
    }
});
//add joining documents
const employeeeAddJoiningDocuments=expressAsyncHandler(async(req,res,next)=>{
    try{
        const employee= await Employee.findOne({employeeNumber:req.headers.id});
        if(!employee){
            return res.status(404).json({
                message:'Employee not found'
            })
        }
          if(employee.joiningDocuments.length===0){
            employee.joiningDocuments.push({
                medicalCertificate:req.body.medicalCertificate,
                criminalRecordVerifcation:req.body.criminalRecordVerifcation,
                DomicileCertificate:req.body.DomicileCertificate,
                EducationalCertificate:req.body.EducationalCertificate,
                ExperienceCertificate:req.body.ExperienceCertificate,
                NationalID:req.body.NationalID,
                joiningReport:req.body.joiningReport,
                AppointmentLetterEmail:req.body.AppointmentLetterEmail,
                inductionLetter:req.body.inductionLetter,
                otherDocuments:req.body.otherDocuments, 
            });
            const response= await employee.save();
           return  res.status(200).json({
                message:'Joining documents added successfully',
                response
            });
          }
          else{
            return res.status(404).json({
                message:'Employee already have joining documents please update it'
            });
          }
    }catch(err){
        console.log(err);
    }
});
// find employee joining documents
const employeeeFindJoiningDocuments=expressAsyncHandler(async(req,res,next)=>{
    try{
        
        const employee= await Employee.findOne({employeeNumber:req.headers.id});
        
        if(employee){
            res.status(200).send([employee]);
           
        }else{
            res.status(404).json({
                message:'Employee not found'
            });
        }
    }catch(err){
        console.log(err);
    }
   
});
//add service history
const employeeeAddServiceHistory=expressAsyncHandler(async(req,res,next)=>{
    try{
        const employee= await Employee.findOne({employeeNumber:req.headers.id});
        
        if(employee.serviceHistory.length===0){
            employee.serviceHistory.push({
                consfirmationReprot:req.body.consfirmationReprot,
                ExtensionOfProbationLetter:req.body.ExtensionOfProbationLetter,
                confirmationLetter:req.body.confirmationLetter,
                transferLetter:req.body.transferLetter,
                incrementLetter:req.body.incrementLetter,
                promotionLetter:req.body.promotionLetter,
                chargeSheetLetter:req.body.chargeSheetLetter,
                SuspensionLetter:req.body.SuspensionLetter,
                warningLetter:req.body.warningLetter,
                SeparationDocument:req.body.SeparationDocument,
                
                
            });
            const response= await employee.save();
            return res.status(200).send({
                message:'Service history added successfully',
                response
            });
        }else{
           return res.status(404).json({
                message:'Employee already have work history dcouments you need to update it'
            });
        }
        
    }catch(err){
        console.log(err);
    }
});
// find employee service history
const employeeeFindServiceHistory=expressAsyncHandler(async(req,res,next)=>{
    try{
        const employee= await Employee.findOne({employeeNumber:req.headers.id});
        if(employee){
           
            return res.status(200).send([employee]);
        }else{
            return res.status(404).json({
                message:'Employee not found'
            });
        }
    }catch(err){
        console.log(err);
    }
   
});
// find prejoining documents by employe number
const employeeeFindPrejoiningDocuments=expressAsyncHandler(async(req,res,next)=>{
    try{
       
        //find by employeeNumber
        const employee= await Employee.findOne({employeeNumber:req.headers.id});
        if(employee){
           return res.status(200).send([employee]);
        }else{
            return res.status(404).send({
                message:'Employee not found'
            });
        }
            
           
            
        
    }catch(err){
        console.log(err);
       return res.status(404).send({
            message:'Employee not found'
        });
    }
});
const findEmployeeByEmail=expressAsyncHandler(async(req,res)=>{
    try {
        const employee = await Employee.findOne({email:req.headers.email});
        if(employee){
           return res.status(200).send({
                message:'Employee found',   
                employee
            });
        }else{
            res.status(404).json({
                message:'Employee not found'
            });
        }
        
    } catch (error) {
        console.log(error);
    }
})

const findEmployeeEmail=expressAsyncHandler(async(req,res)=>{
    try {
        const employee = await Employee.findOne({email:req.user.email});
        if(employee){
           return res.status(200).send({
                message:'Employee found',   
                employee
            });
        }else{
            res.status(404).json({
                message:'Employee not found'
            });
        }
        
    } catch (error) {
        console.log(error);
    }
})
//find all
const findAllEmployee=expressAsyncHandler(async(req,res)=>{
    try {
        //full text search
        const employee = await Employee.find();
        if(employee){
           return res.status(200).send({
                message:'Employee found',   
                employee
            });
        }else{
            res.status(404).json({
                message:'Employee not found'
            });
        }
        
    } catch (error) {
        console.log(error);
  
  
    }
})


exports.employeeeController=
{
findEmployeeEmail,
employeeeAdd,
employeeeUpdate,
employeeeShowAll,
employeeeShowById,
employeeeDelete,employeeeDeleteServiceHistory
,employeeeDeletePrejoiningDocuments,employeeeDeleteJoiningDocuments
,employeeeUpdateServiceHistory,employeeeUpdatePrejoiningDocuments,
employeeeUpdateJoiningDocuments
,employeeeAddServiceHistory,employeeeAddPrejoiningDocuments,
employeeeAddJoiningDocuments,
employeeeFindPrejoiningDocuments,
employeeeFindJoiningDocuments,
employeeeFindServiceHistory,
findEmployee,
findEmployeeByEmail,
findAllEmployee
};
