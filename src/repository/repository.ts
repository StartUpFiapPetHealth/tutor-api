export interface IRepository<T>{
    save(tutor : T) : Promise<T>
    update(tutor : T) : Promise<T>
    delete(id : string) : any
    findById(id : string) : Promise<T>
    getAll() : Promise<T[]>
}