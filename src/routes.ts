import  express from 'express';
const routes = express.Router(); 

import {Teste} from './domain/entities/Teste';

let prefix = '';

prefix = '/teste';
routes.get(`${prefix}/run/:param`,Teste.run);

module.exports = routes