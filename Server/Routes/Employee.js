const express=require('express');
const employeeeController  = require('../Controllers/EmployeeController');
const employeeRouter=express.Router();
const Middleware=require("../middleware/Auth")

employeeRouter.post('/api/personal/add', Middleware.checkAuth, employeeeController.employeeeController.employeeeAdd);
employeeRouter.post('/api/personal/update',Middleware.checkAuth,employeeeController.employeeeController.employeeeUpdate);
employeeRouter.post('/api/prejoining/update',Middleware.checkAuth,employeeeController.employeeeController.employeeeUpdatePrejoiningDocuments);
employeeRouter.post('/api/joining/update',Middleware.checkAuth,employeeeController.employeeeController.employeeeUpdateJoiningDocuments);
//update work history doucments
employeeRouter.post('/api/history/update',Middleware.checkAuth,employeeeController.employeeeController.employeeeUpdateServiceHistory);

employeeRouter.get('/api/prejoining/find/',Middleware.checkAuth,employeeeController.employeeeController.employeeeFindPrejoiningDocuments);
employeeRouter.get('/api/joining/find/',Middleware.checkAuth,employeeeController.employeeeController.employeeeFindJoiningDocuments);
employeeRouter.post('/api/prejoining/add',Middleware.checkAuth,employeeeController.employeeeController.employeeeAddPrejoiningDocuments);
// post api for joining documents
employeeRouter.post('/api/joining/add',Middleware.checkAuth,employeeeController.employeeeController.employeeeAddJoiningDocuments);
// post api for  work history documents
employeeRouter.post('/addhistory',Middleware.checkAuth,employeeeController.employeeeController.employeeeAddServiceHistory);
// get api for work history documents
employeeRouter.get('/api/history/find/',Middleware.checkAuth,employeeeController.employeeeController.employeeeFindServiceHistory);
// search emplyee by firstname or lastname or cnic or employnumber
employeeRouter.get('/api/search/',Middleware.checkAuth,employeeeController.employeeeController.findEmployee);
employeeRouter.get('/api/empNo',employeeeController.employeeeController.findEmployeebyEmployeeNumber);


//show all employee
employeeRouter.get('/api/employees/',Middleware.checkAuth,employeeeController.employeeeController.employeeeShowAll);
//show employee by id
employeeRouter.get('/api/employeedetail',employeeeController.employeeeController.employeeeShowById);
//delete employee by id
employeeRouter.post('/api/employees/:id',employeeeController.employeeeController.employeeeDelete);
employeeRouter.get('/findemail',employeeeController.employeeeController.findEmployeeByEmail);
employeeRouter.get('/findloggedin',Middleware.checkAuth, employeeeController.employeeeController.findEmployeeEmail);
employeeRouter.get('/all',Middleware.checkAuth, employeeeController.employeeeController.findAllEmployee);

module.exports=employeeRouter;