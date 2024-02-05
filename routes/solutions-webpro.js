const express= require('express');
const  router = express.Router();

router.get('/', (req, res) => {
    res.send("my home route");
 });
 
 router.get('/web-design', (req, res) => {
    res.send("web design route");
 });
 
 router.get('/web-hosting', (req, res) => {
    res.send("web hosting route");
 });
 
 router.get('/e-marketing', (req, res) => {
    res.send("e-marketing route");
 });
 
 router.get('/contact', (req, res) => {
    res.send("contact route");
 });
 router.get('/trusted-clients', (req, res) => {
    res.send("cetificate route");
 });
 router.get('/login', (req, res) => {
    res.send("login en~route");
 });

//router.get('/:id',(req, res)=>{
    //req.params.id
//  })res.send("get user by id ${req.params.id} params in the request body")
//
//
//


 module.exports = router;