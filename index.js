const { Console } = require('console');
const express = require('express');
const fs = require('fs');
const https = require('https');
const app = express();

const port = 4000;

const array = require('./activity');

app.get('/fligths', function(req, res){
    var bna, den, dfw, iad, mia, ord,stl = 0;
    var Bna, Den, Dfw, Iad, Mia, Ord,Stl = 0;
    //res.send('Executed endpoint');
    bna = array.flights.filter(d => d.Carrier=='AA' && d.Destination == 'BNA').length;
    den = array.flights.filter(d => d.Carrier=='AA' && d.Destination == 'DEN').length;
    dfw = array.flights.filter(d => d.Carrier=='AA' && d.Destination == 'DFW').length;
    iad = array.flights.filter(d => d.Carrier=='AA' && d.Destination == 'IAD').length;
    mia = array.flights.filter(d => d.Carrier=='AA' && d.Destination == 'MIA').length;
    ord = array.flights.filter(d => d.Carrier=='AA' && d.Destination == 'ORD').length;
    stl = array.flights.filter(d => d.Carrier=='AA' && d.Destination == 'STL').length;
    Bna = array.flights.filter(d => d.Carrier=='UA' && d.Destination == 'BNA').length;
    Den = array.flights.filter(d => d.Carrier=='UA' && d.Destination == 'DEN').length;
    Dfw = array.flights.filter(d => d.Carrier=='UA' && d.Destination == 'DFW').length;
    Iad = array.flights.filter(d => d.Carrier=='UA' && d.Destination == 'IAD').length;
    Mia = array.flights.filter(d => d.Carrier=='UA' && d.Destination == 'MIA').length;
    Ord = array.flights.filter(d => d.Carrier=='UA' && d.Destination == 'ORD').length;
    Stl = array.flights.filter(d => d.Carrier=='UA' && d.Destination == 'STL').length;
    var table = [{'AA' : {'BNA': bna||'None', 'DEN': den||'None', 'DFW': dfw||'None', 'IAD': iad||'None', 'MIA': mia||'None', 'ORD': ord||'None',
                 'STL' : stl||'None'},'UA':{'BNA': Bna||'None', 'DEN': Den||'None', 'DFW': Dfw||'None', 'IAD': Iad||'None', 'MIA': Mia||'None', 'ORD': Ord||'None',
                 'STL' : Stl||'None'}}]
    console.log(table);
    res.send('Executed endpoint, check the console');

});

app.listen(port, function() {
    console.log('Server running on port:', port);
});



app.get('/', function(req, res){
    res.send('Home page. To execute the excersice http://localhost:4000/fligths ');
    console.log('A request has been recived');
});