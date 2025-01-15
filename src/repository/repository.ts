export interface IRepository<T>{
    save(tutor : T) : any
    update(tutor : T) : any
    delete(id : number) : any
    findById(id : number) : any
    getAll() : Promise<any[]>
}