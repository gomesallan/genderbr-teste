import { Entity } from '../../core/domain/Entity';
import {Request, Response} from 'express';
import { getGenderByName } from 'br-gender';
const csv = require('@fast-csv/parse')
const process = require('process')
export type TesteProps = {
    param: string
}

export class Teste extends Entity<TesteProps> {
  private constructor(props: TesteProps, id?: string){
      super(props,id);
  }

  static async run(req:Request,res:Response){

    try{
        const filem = `/CNPJ_MACHOS.csv`;
        const filef = `../CNPJ_FEMEAS.csv`;
       // const { param } = req.params;
       // const gender = await getGenderByName(param, { percentage: false });/////////////

       let machos = [];
       let femea = [];
        csv.parseFile(__dirname+'/CNPJ.csv')
        .on('error', (error:any) => console.error(error))
        .on('data', async(row:any)  => {
            if(await getGenderByName(JSON.stringify(row[2]).split(' ')[0])) machos.push([row])
            else femea.push([row])
        })
        .on('end', async(rowCount:any) => {
            
        })

        return res.download(filem);
    }catch(e){
        console.log(e)
        return res.status(500).send({error:e})
    }
  }
}
