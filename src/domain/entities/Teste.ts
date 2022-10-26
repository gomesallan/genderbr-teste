import { Entity } from '../../core/domain/Entity';
import {Request, Response} from 'express';
import { getGenderByName } from 'br-gender';

export type TesteProps = {
    param: string
}

export class Teste extends Entity<TesteProps> {
  private constructor(props: TesteProps, id?: string){
      super(props,id);
  }

  static async run(req:Request,res:Response){

    try{  
        const { param } = req.params;
        const gender = await getGenderByName(param, { percentage: true });

        return res.status(200).send(gender); 
    }catch(e){
        console.log(e)
        return res.status(500).send({error:e})
    }
  }
}