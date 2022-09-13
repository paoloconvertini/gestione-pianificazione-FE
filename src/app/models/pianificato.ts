import {Dipendente} from "./dipendente";
import {Progetto} from "./progetto";

export class Pianificato {
  id?:any
  gennaio?:string
  febbraio?:string
  marzo?:string
  aprile?:string
  maggio?:string
  giugno?:string
  luglio?:string
  agosto?:string
  settembre?:string
  ottobre?:string
  novembre?:string
  dicembre?:string
  flagPianificato?:boolean
  dipendente?:Dipendente
  progetto?:Progetto
}
