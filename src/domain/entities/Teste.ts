import { Entity } from '../../core/domain/Entity';
import {Request, Response} from 'express';
import { getGenderByName } from 'br-gender';
import csv from '@fast-csv/parse'

export type TesteProps = {
    param: string
}

export class Teste extends Entity<TesteProps> {
  private constructor(props: TesteProps, id?: string){
      super(props,id);
  }

  static async run(req:Request,res:Response){

    try{
        const filem = `../CNPJ_MACHOS.csv`;
        const filef = `../CNPJ_FEMEAS.csv`;
       // const { param } = req.params;
       // const gender = await getGenderByName(param, { percentage: false });/////////////

       let rows = [];
        csv.parseFile("../../../CNPJ.csv")
        .on('error', error => console.error(error))
        .on('data', (row)  => {
            rows.push(JSON.stringify(row[1]))
            console.log(JSON.stringify(row[1]))
            //console.log(JSON.stringify(row[30]).replace(/[^0-9\.]+/g, ''))
        })
        return res.download(filem);
    }catch(e){
        console.log(e)
        return res.status(500).send({error:e})
    }
  }
}
