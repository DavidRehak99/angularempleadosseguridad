import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { empleados } from "../models/empleados";
import { environment } from "../environments/environment";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ServiceEmpleados {
    url= environment.ApiEmpleados;
    constructor(private _http: HttpClient){}

    async getDepartamentosAsync(): Promise<empleados[]>{
        let request ="api/empleados";
        return firstValueFrom(this._http.get<empleados[]>(this.url +request));

    }

    async createDepartamento(departamento: empleados): Promise<any>{
        let json = JSON.stringify(departamento);
        let header = new HttpHeaders();
        header = header.set("content-type", "application/json");
        let request = "api/empleados";
        return firstValueFrom(this._http.post(this.url + request, json, {headers: header}))

    }
    async findDepartamentosAsync(id:number): Promise<empleados>{
        let request ="api/empleados/"+ id;
        return firstValueFrom(this._http.get<empleados>(this.url + request));
    }

    async updateDepartamentosAsync(departamento:empleados): Promise<any>{
        let json =JSON.stringify(departamento);
        let header = new HttpHeaders().set("content-type", "application/json");
        let request = "api/departamentos";
        return firstValueFrom(this._http.put(this.url + request,json,{headers:header}));
    }

    async deleteDepartamentosAsync(id: number): Promise<any>{
        let request = "api/departamentos/" + id;
        return firstValueFrom(this._http.delete(this.url + request))
    }
}