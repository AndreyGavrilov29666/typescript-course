// enum StatusTypes {
//     PUBLISHED = "published",
//     DRAFT = "draft",
//     DELETED = "deleted",
//
// }
//
// interface IReq {
//     topicId: number
//     status?: StatusTypes
// }
//
// interface IDataType {
//     question: string,
//     answer: string,
//     tags: string[],
//     likes: number,
//     status: StatusTypes,
// }
//
//
// async function getFaqs(req: IReq): Promise<IDataType[]> {
//     const res = await fetch('/faqs', {
//         method: 'POST',
//         body: JSON.stringify(req)
//     });
//     const data = await res.json();
//     return data;
// }
//
// getFaqs({
//     topicId: 3,
//     status: StatusTypes.DRAFT
// })

// interface User {
//     login: string;
//     password?: string
// }
//
// const user:User= {
//     login:'2',
// }
//
// function mul(f:number,s?:number):number {
//     if(!s){
//         return f*f
//     }
//     return f*s
// }


// interface Req {
//     sum: number,
//     from: number,
//     to: number
// }
//
// interface ISuccessData extends Req {
//     databaseId: number
// }
//
// interface IFailedData {
//     errorMessage: string,
//     errorCode: number,
// }
//
// enum Pstatus {
//     Success='success',
//     Failed='failed',
// }
//
// interface ISuccessRes {
//     status: Pstatus.Success
//     data: ISuccessData
// }
//
// interface IFailedRes {
//     status: Pstatus.Failed
//     data: IFailedData
// }
//
// type Res = ISuccessRes | IFailedRes
//
// const func = (req: Req): Res => {
//     if (req.sum > 1000) {
//         return {
//             status: Pstatus.Failed,
//             data: {
//                 errorCode: 1,
//                 errorMessage: 'msg'
//             }
//         }
//     }
//     return {
//         status: Pstatus.Success,
//         data: {
//             sum: req.sum,
//             from: req.from,
//             to: req.to,
//             databaseId: 1
//         }
//     }
// }
//
// const isSuccessRes = (res:Res):res is ISuccessRes => {
//     return res.status === Pstatus.Success
// }
//
//
// const check = (res:Res ): number => {
// if(isSuccessRes(res)){
//     return res.data.databaseId
// }else {
//     throw new Error('Not success res')
// }
//
// }
//
// const resp = func({
//     sum:1111,
//     from:11,
//     to:11,
// })
//
// const checkData = check(resp)
// console.log('checkData', checkData)


// function log(id:string| number):void {
//     console.log(id)
// }
//
// type voidFunc = () => void
//
// const f1:voidFunc= () => {
//
// }
// const f2:voidFunc =() => {
//     return true
// }
//
// const arr = [1,2,3,4,5,]
//
// const user = {
//     s:[1]
// }
//
// arr.forEach((s)=> user.s.push(s))

// let input : unknown
//
// input = 3;
//
//
// let res:string = input;
//
//
// function run(i:unknown) {
// if(typeof i == 'number'){
//     i++
// }
//
// }
//
// run(input)


// async function getData () {
//     try {
//         await fetch('')
//     }catch (e) {
//         const error = e as Error
//
//     }
// }
//
// type U1 = unknown | null //unknown
//
// type I1 = unknown & string // string


// type paymentAction = 'refund' | 'checkout' | 'reject'
//
//
// function processAction(action:paymentAction){
//     switch (action) {
//         case "refund":
//             break;
//         case "checkout":
//         break;
//         case "reject":
//         break;
//         default:
//             const _: never = action;
//             throw new Error('no action')
//     }
// }
//
// function generateError(message:string):never {
// throw new Error(message)
// }
//
// function isString(x:string | number): boolean {
//     if(typeof  x === 'string') return  true
//     if(typeof  x === 'number') return  false
//     generateError('sdsd')
//
//
// }

// const n:null=null;
// let  a = 5;
// let b :string = a.toString()

// interface User {
//     name:string
//     email:string
//     login:string
// }
//
// const user:User = {
//     name: 'V',
//     email: 'V',
//     login: 'V',
// }
//
// interface Admin {
//     name:string
//     role:number
// }
//
// function logID(id:string | number) {
//     if(typeof id === 'string') {
//         console.log(id)
//     } else  {
//         console.log(id)
//     }
// }
//
//
// function isString(x:string| number): x is string {
//
// return typeof x === 'string'
// }
//
//
// console.log(isString(1))
//
// function isAdmin(user: User | Admin):user is Admin {
//     return 'role' in  user
// }
//
// function isAdminAlt(user: User | Admin):user is Admin {
//     return (user as Admin).role !== undefined
// }
//
// function setRoleZero(user: User | Admin) {
//     if (isAdmin(user)){
//         user.role = 0
//     } else {
//         console.log(user)
//         throw   new Error('Not Admin')
//     }
// }


// interface User {
//     name: string
// }
//
// const a = {}
//
// assertUser(a)
// a.name = 'VV'
//
//
// function assertUser(obj: unknown): asserts obj is User {
//     if (typeof obj === 'object' && !!obj && 'name' in obj) {
//         return;
//     }
//     throw new Error('no no no')
// }

// enum PaymentStatus {
//     Holded,
//     Processed,
//     Reversed
// }
//
// class Payment {
//     id: number;
//     status : PaymentStatus;
//     createdAt: Date;
//     updatedAt?: Date;
//     constructor(id:number) {
//         this.id = id
//         this.createdAt = new Date()
//         this.status = PaymentStatus.Holded;
//
//     }
//
//     getPaymentLifeTime (): number {
//         return new Date().getTime() - this.createdAt.getTime()
//     }
//
//     unholdPayment() {
//         if(this.status == PaymentStatus.Processed) {
//             throw new Error('Payment cannot be return')
//         }
//         this.status = PaymentStatus.Reversed
//         this.updatedAt = new Date();
//     }
// }
//
//
// const payment = new Payment(1)
// const time = payment.getPaymentLifeTime()
// console.log(time)
// class UserSkills {
//     skills:string[]
//     constructor(skill:string | string[]) {
//     if(Array.isArray(skill)){
//         this.skills = skill
//     }else {
//         this.skills = [skill]
//     }
//     }
// }
//
//
//
// new UserSkills('2')

// interface ILogger {
//     log:(...args:any[])=>void;
//     error(...args:any[]):void;
// }
//
//
//
// class Logger implements ILogger {
//     log(args:any[]): void {
//         console.log(...args)
//     }
//
//     async error(...args:any[]): Promise<void> {
//         console.log(...args)
//     }
//
// }
//
//
// interface IPayable {
//     pay(paymentId:number):void
//     price?:number
// }
// interface IDeletable{
//     delete():void
// }
//
//
// class User implements IPayable, IDeletable {
//     price?: number | undefined;
//
//     pay(paymentId: string): void {
//
//     }
//     delete() {
//     }
//
// }

// type PaymentStatus = 'new' | 'paid'
//
//
// class Payment {
//     id:number;
//     status: PaymentStatus = 'new';
//     constructor(id:number) {
//         this.id = id
//     }
//
//     pay(){
//         this.status = "paid"
//     }
// }
//
// class PersistedPayment extends Payment {
//     // databaseId:number;
//     // paidAt: Date;
//     constructor() {
//         const id = Math.random()
//         super(id);
//     }
//     save () {
//
//     }
//     override pay() {
//         super.pay()
//     }
// }
//
// new PersistedPayment()
//
// class User {
//     name: string = 'User'
// constructor() {
//     console.log(this.name)
// }
// }
//
// class Admin extends User {
//     name: string = 'admin'
//     constructor() {
//         console.log('bl')
//         super();
//         console.log('55')
//     }
// }
//
//
// new Admin()

// class User {
//     name: string
//     constructor(name:string) {
//         this.name = name
//     }
// }
//
// class Users extends Array<User> {
// searchByName (name:string){
//     return this.filter(u => u.name === name)
// }
// }
// const users = new Users()
// users.push(new User('11'))
// users.push(new User('22'))
// users.push(new User('33'))
// users.push(new User('44'))
// console.log(users.searchByName('44'))

// class Vehicle {
//     make: string;
//     private damages: string[];
//     private _model:string
//     protected run:number
//     #price: number
//
//     set model(m:string){
//         this._model = m
//     }
//     get model(){
//         return this._model
//     }
//     isPriceEqual(v:Vehicle){
//         return this.#price === v.#price
//     }
//
//     addDamage(damage:string) {
//         this.damages.push(damage)
//     }
// }
//
// class euroTruck extends Vehicle {
//     setRun(km:number){
//         this.run = km / 0.62
//     }
// }
//
// new Vehicle().make = '2'

// type Product = {
//     id:number
//     name: string
//     price: number
// }
//
// enum DeliveryType {
//     Home= 'home',
//     FromSource = 'fromSource'
// }
//
// interface DeliveryHome {
//     type:DeliveryType.Home
//     address:string
//     date: Date
// }
//
// interface DeliveryFromSource {
//     type:DeliveryType.FromSource
//     storeId: number
//     date: Date
// }
//
// type Delivery = DeliveryHome | DeliveryFromSource;
//
//
// class Cart {
//     private products:Product[]
//     private delivery:DeliveryHome | DeliveryFromSource | undefined
//
//     constructor(products:Product[]) {
//         this.products = products
//     }
//
//     getProducts(){
//         return this.products
//     }
//
//     addProduct(product:Product):void {
//         this.products.push(product)
//     }
//     removeProduct(productId:number):void {
//         const productToRemove = this.products.find((p:Product) =>{
//             return p.id === productId
//         } )
//         if(productToRemove){
//            this.products = this.products.filter((p:Product)=> p.id !== productId)
//         return
//         }
//         throw new Error('Incorrect ID')
//
//     }
//     countProductPrices(){
//         let prices = 0
//         this.products.forEach((p:Product)=> {
//             prices += p.price
//         })
//         return prices
//     }
//
//     setDelivery(delivery:Delivery){
//         this.delivery = delivery
//     }
//
//     checkout(){
//         if(this.products.length && this.delivery?.type && this.delivery?.date){
//             if(this.delivery.type === DeliveryType.Home && this.delivery.address){
//                 return  true
//             } else if (this.delivery.type === DeliveryType.FromSource && this.delivery.storeId){
//                 return true
//             }
//         }
//         return false
//     }
// }
//
// const products:Product[] = [
//     {id:1,name:'n1',price:100},
//     {id:2,name:'n2',price:200},
//     {id:3,name:'n2',price:300},
// ]
// const deliveryHome:DeliveryHome = {
//     type: DeliveryType.Home,
//     address: 'Some adrr1',
//     date: new Date()
// }
//
// const deliveryFromSource:DeliveryFromSource = {
//     type: DeliveryType.FromSource,
//     storeId: 3,
//     date: new Date()
// }
//
// const cart = new Cart(products)
//
// cart.addProduct({
//     id:4,
//     name:'n4',
//     price:400,
// })
// cart.removeProduct(3)
// console.log(cart.checkout())
// cart.setDelivery(deliveryFromSource)
// console.log(cart.checkout())


// class Payment {
//     private date: Date = new Date()
//
//     getDaTe (this: Payment) {
//         return this.date
//     }
//     getDateArrow = () => {
//         return this.date
//     }
// }
// const p = new Payment()
//
// const user = {
//     id: 1,
//     paymentDate: p.getDaTe.bind(new Payment()),
//     paymentDateArrow: p.getDateArrow
// }
//
// console.log(p.getDaTe())
// console.log(user.paymentDate())
// console.log(user.paymentDateArrow())
//
// class PaymentPersistent extends Payment {
//     save() {
//         return this.getDateArrow()
//     }
// }
//
// console.log(new PaymentPersistent().save())

// class UserBuilder {
//     name:string
//     constructor(n:string) {
//         this.name = n
//     }
//     setName(name:string) {
//         this.name = name
//         return this
//     }
//
//     isAdmin(): this is AdminBuilder {
//         return this instanceof AdminBuilder
//     }
// }
//
// class AdminBuilder extends UserBuilder {
//     // roles:String[]
// }
//
// const res = new UserBuilder('2').setName('vv');
// const res2 = new AdminBuilder('3').setName('bb');
//
//
//
//
// let user : UserBuilder | AdminBuilder = new UserBuilder('3');
//
//
// if(user.isAdmin()){
//     user
//     console.log('admin')
// }else {
//     user
//     console.log('not Admin')
// }

// abstract class Controller {
//     abstract handle(req:any):void
//
//     handleWithLogs(req:any) {
//         console.log('start')
//         this.handle(req)
//         console.log('end')
//     }
// }
//
// class UserController extends Controller {
//     handle(req: any):void {
//         console.log(req)
//     }
// }
//
// const u =new UserController();
//
// u.handleWithLogs('3')


// abstract class Logger {
//     abstract log(message:string):void
//
//     printDate(message:string) {
//         console.log(new Date())
//         this.log(message)
//     }
//
// }
//
// class MyLogger extends Logger {
//     log(message:string) {
//         console.log(message)
//     }
//
//     logWithDate(message:string) {
//         super.printDate(message)
//     }
// }
//
//
//
// const m = new MyLogger();
//
// m.logWithDate('Some str')


// abstract class Logger {
//     abstract log(message:string):void
//
//     printDate(date:Date) {
//         console.log('111111')
//         this.log(date.toString())
//     }
//
// }
//
// class MyLogger extends Logger {
//     log(message:string) {
//         console.log('222222')
//         console.log(message)
//     }
//
//     logWithDate(message:string) {
//         console.log('0000')
//         this.printDate(new Date())
//         this.log(message)
//     }
// }
//
//
//
// const m = new MyLogger();
// m.logWithDate('Some str')


// 62

// const num: Array<number> = [1,2,3,4]
//
// const a = async ()=> {
//    const res = await  new Promise<number>((resolve, reject) => {
//         resolve(1)
//     })
// }
//
// const check: Record<string, boolean> = {
//     drive:true,
//     kpp:false
// }

// function logMiddleware<T>(data: T): T {
//
//     console.log(data);
//     return data
// }
//
// const res = logMiddleware<number>(10);

// function getSplitedHalf<T>(data:Array<T>):Array<T> {
//     const res = data.length / 2
//     return data.splice(0,res)
// }
// getSplitedHalf<number>([1,2,3,23])
//
// const split:<T>(data:Array<T>) => Array<T> = getSplitedHalf
//
// interface ILogLine<T> {
//     timestamp: Date;
//     data:T
// }
//
// type LogLineType <T> =  {
//     timestamp: Date;
//     data:T
// }
//
// const logLine: LogLineType<{a:number}> = {
//     timestamp: new Date(),
//     data: {
//         a:1
//     }
// }

// const toStringFunc =  <T>(data:T):string | undefined => {
//
//     if(typeof data === "string") return data
//     if(typeof data === "number") return data.toString()
//     if(typeof data === "boolean") return data.toString()
//     if(typeof data === "symbol") return data.toString()
//     if(typeof data === "bigint") return data.toString()
//     if(typeof data === "function") return data.toString()
//     if(typeof data === "object") return JSON.stringify(data)
//     if(data === null) return 'null'
//     if(data === undefined) return 'undefined'
//     if( Array.isArray(data)) return JSON.stringify(data)
// }
//
// toStringFunc <number>(23423)
// toStringFunc <string>('23423')
// toStringFunc <null>(null)
// toStringFunc <undefined>(undefined)
// toStringFunc ([undefined])

//  class Vehicle {
//     run : number;
//  }
//
//  function kmToMiles<T extends Vehicle>(vehicle:T):T {
//      vehicle.run = vehicle.run / 0.62
//      return vehicle
//  }
//
//  class LCV extends Vehicle {
//     compa:number
//  }
//
//  const v = kmToMiles(new Vehicle())
//  const l = kmToMiles(new LCV())
//
// function logId<T extends string | number, Y>(id:T,extra:Y):{id:T,extra:Y} {
//     console.log(id)
//     console.log(extra)
//     return {id,extra}
// }

// interface dataObj {
//     id:number,
//     [key:string ]: string | number
// }
//
// const data:dataObj[] = [
//     {id: 99, name: 'aaa'},
//     {id: 7, name: 'bbbb'},
//     {id: 3, name: 'ccc'},
//     {id: 9, name: 'dddd'},
//     {id: 4, name: 'dddd'},
//     {id: 0, name: 'dddd'},
//     {id: 47, name: 'dddd'},
// ]
//
// type directionType = 'ASC' | 'DESC'
//
//
// const sortData = <T extends dataObj>(data:T[],direction:directionType= 'ASC' ): T[] => {
//     let result:T[] = [];
//
//     if(direction === 'ASC') {
//         result = data.sort((a,b) => a.id - b.id); // b - a for reverse sort
//
//     }else {
//         result = data.sort((a,b) => b.id - a.id); // b - a for reverse sort
//     }
//
//     return result
//
// }
// const sortedData = sortData(data, 'DESC')
// console.log(sortedData)

// class Resp<D, E> {
//     data?: D
//     error?: E
//
//     constructor(data?: D, error?: E) {
//         if (data) {
//             this.data = data
//         }
//
//         if (error) {
//             this.error = error
//         }
//
//     }
// }
// new Resp<string,number>('data', 200)
//
// class HTTPResp<F> extends Resp<string, number>{
//     code:F;
//     constructor(code:F) {
//         super()
//         this.code = code
//     }
//
//     setCode(code:F) {
//         this.code = code
//     }
// }
// new HTTPResp(5)

// type Constructor  = new (...args:any[]) => {}
// type GConstructor<T = {}>  = new (...args:any[]) => T
//
//
// class List {
//     constructor(public items:string[]) {
//     }
// }
//
// class Accordion {
//     constructor(public isOpened:boolean) {
//     }
// }
//
// type ListType = GConstructor<List>
// type AccordionType = GConstructor<Accordion>
//
// class ExtendedListClass extends List {
//     first() {
//         return this.items[0]
//     }
// }
//
// function ExtendedList<TBase extends  ListType & AccordionType>(Base:TBase) {
//     return class ExtendedList extends  Base {
//         first() {
//             return this.items[0]
//         }
//     }
// }
//
// class AccordionList {
//     constructor(public items:string[], public isOpened:boolean) {
//     }
// }
//
// const list = ExtendedList(AccordionList)
//
// const res = new list(['23','234234'],true)
// console.log(res)
// console.log(res.first())

// interface IUser {
//     name: string;
//     age: number
// }
//
// type KeysOfUser = keyof  IUser
//
// const key:KeysOfUser = 'age'
//
// function getValue<T, K extends keyof T>(obj:T,key:K) {
//     return obj[key]
// }
//
// const user:IUser
// = {
//     name: 'Va',
// age:30
// }
//
//
// const userName = getValue(user, 'name')

// interface Data  {
//     group : number
//     name: string
// }
//
// const data : Data[] = [
//     {group:1, name: 'a'},
//     {group:1, name: 'b'},
//     {group:2, name: 'c'},
//     {group:2, name: 'd'},
//     {group:1, name: 'e'},
//     {group:1, name: 'e'},
//     {group:0, name: 'e'},
//     {group:0, name: 'e'},
// ]
//
// const groupData = <T extends Data[], K extends keyof Data  >(data:T, key:K) => {
//     let result: Record<Data[K], Data[]> =  {} as Record<Data[K], Data[]> ;
//
//     data.forEach((d) => {
//         if(!result[d[key]]){
//             result[d[key]] = [d]
//         }else {
//             result[d[key]].push(d)
//
//         }
//     })
//     return result
// }
//
//
// const res = groupData(data, 'name')
// console.log(res)
//
// const user = {
//     name: 'vas',
//     ss:'4545'
// }
// type keyOfUser = keyof typeof user
// const a:keyOfUser = 'ss'
// enum Direction {
//     Up,
//     Down
// }
// type d = keyof typeof Direction
// const b:d = "Down"

// interface Role {
//     name:string
// }
//
// interface Permission {
//     endDate:Date
// }
//
// interface User {
//     name:string
//     roles:Role[],
//     permission:Permission
// }
//
// const user:User = {
//     name: 'Vas',
//     roles:[],
//     permission: {
//         endDate: new Date()
//     }
// }
//
// const nameUser = user.name
// const userRoles = 'roles'
//
// type roleType = User['roles']
// type roleType2 = User[typeof userRoles]
//
// type roleeType =  User['roles'][number]
// type roleeType2 =  Role
//
// type dateType =  User['permission']["endDate"]
// type dateType2 =  Permission
//
//
// const a:roleeType | roleeType2 = {
//     name:'23423'
// }
//
//
// const roles = ['admin', 'user', 'super-user'] as const;
// type RoleTypes3 = typeof roles[number]
// const a: number = Math.random() > 0.5 ?1:0
//
// interface  IHTTPResponse<T extends  'success'| 'failed'> {
//     code:number
//     data: T extends 'success'? string : Error
//     additionalData: T extends 'success'? string : number
// }
//
// const error:IHTTPResponse<'success'> = {
//     code: 200,
//     data: 'err',
//     additionalData: 'addd'
// }
//
// const error2:IHTTPResponse<'failed'> = {
//     code: 200,
//     data: new Error('wwww'),
//     additionalData: 2
// }
//
//
// class User {
//     // id:number
//     // name: string
//     constructor(public id:number, public name:string) {
//     }
// }
//
// class UserPersistend  extends  User{
//     // dbId: string
//     constructor(public dbId:string) {
//         super(1,'2')
//     }
// }
//
// function getUser<T extends string | number>(dbIdOrId:T): UserOrUserPersist<T> {
//     if(typeof dbIdOrId === 'number') {
//         return  new User(1,'1') as UserOrUserPersist<T>
//     }else {
//         return new UserPersistend('1')
//     }
//
// }
// type UserOrUserPersist<T extends string | number> = T extends number ? User : UserPersistend
// const res = getUser(1)
// const res2 = getUser('323')
// function runTransaction(transaction:{
//     fromTo: [string,string]
// }) {
//     console.log(transaction)
// }
// type css = Array<[string,string]>
// const transaction:getFirstArg<typeof runTransaction> = {
//     fromTo:['1','3']
// }
// runTransaction(transaction)
// type getFirstArg<T> = T extends (first: infer First, ...args:any) => any ? First : never
//
// type Modifier = 'read' | 'update' | 'create'
//
// type UserRoles = {
//     customers?:Modifier,
//     projects?:Modifier,
//     adminPanel?:Modifier,
//     adminPanel111?:Modifier,
// }
//
// type UserAccess1 = {
//     customers?:boolean,
//     projects?:boolean,
//     adminPanel?:boolean,
// }
//
// type ModifierToAccess<Type> = {
//     +readonly [Property in keyof Type as Exclude<`canAccess${string & Property}`, 'canAccessadminPanel'>]+?: boolean
// }
// type UserAccess2 = ModifierToAccess<UserRoles>
// interface IForm {
//     name:string
//     password:string,
// }
//
// const form:IForm = {
//     name: 'sdsd',
//     password: '3434'
// }
//
// type IsValid = {isValid:true}
// type IsInvalid = {isValid:false, errorMessage: string}
//
// type FormToFormValidation<T> = {
//     [key in keyof T] : IsValid | IsInvalid
// }
//
// type res = FormToFormValidation<IForm>
//
// const formValidation:res = {
//     name: {isValid:true},
//     password: {isValid:false, errorMessage: 'Must be 4 simbols'},
// }
// type ReadOrWrite = 'read' | 'write'
// type Bulk = 'bulk' | 'write'
// type Access = `can${Capitalize <ReadOrWrite>}${Capitalize <Bulk>}`
// type  ReadOrWriteBulk<T> = T extends `can${infer R}`?R : never
// type T = ReadOrWriteBulk<Access>
// const a:Access = 'canReadBulk'
// type ErrorOrSuccess = 'error' | 'success'
// type ResponseT = {
//     result: `http${Capitalize<ErrorOrSuccess>}`
// }
// const aa:ResponseT = {
//     result: 'httpError'
// }
// interface IUser {
//     name:string
//     age?:number
//     email:string
// }
// type partial = Partial<IUser>
// const p:partial = {}
// type  reque = Required<IUser>
// type  requeAndReadol = Required<Readonly<IUser>>

// interface PaymentPersistent {
//     id:number
//     sum:number
//     from:string
//     to:string
// }
//
// type Payment = Omit<PaymentPersistent, 'id'>
// type PaymentRequisits = Pick<PaymentPersistent, 'from' | 'to'>
// type ExtractEx = Extract<'from' | 'to' | Payment,string>
// type ExcludeEx = Exclude<'from' | Payment,string>
// class User {
//     constructor(public id:number, public name:string) {
//     }
// }
// function  getData (id:number): { User:User } {
//     return {
//         User: new User(id,'v')
//     }
// }
// type RT = ReturnType<typeof getData>
// type RT2 = ReturnType<()=> void>
// type RT3 = ReturnType<<T>()=> T>
// type RT4 = ReturnType<<T extends string>() => T>
// type PT = Parameters<typeof getData>
// type PTFirst = Parameters<typeof getData>[0]
// type first = PT[0]
// type CP = ConstructorParameters<typeof User>
// type A = Awaited<Promise<string>>
// type AA = Awaited<Promise<Promise<string>>>
// interface IMenu {
//     name:string
//     url:string
// }
// async function getMenu():Promise<IMenu[]> {
//     return [{name:'A', url: '232'}]
// }
// type R = Awaited<ReturnType<typeof getMenu>>
// async function getArray<T>(x:T):Promise<Awaited<T>[]> {
//     return [await x]
// }
// interface IUserService {
//     users: number;
//     getUsersFromDb(): number
// }
//
// @setCreatedAtAdvanced(new Date())
// @setUserAdvanced(55)
// class UserService implements IUserService {
//     public users: number
//
//     constructor(users: number = 1000) {
//         this.users = users
//     }
//
//     getUsersFromDb(): number {
//         return this.users
//     }
//     getThis() {
//         return this
//     }
// }
//
// function threeUserAdvanced<T extends {new(...args:any[]): {} } >(constructor:T){
//     return class  extends constructor {
//         users=3
//     }
// }
//
// function setUserAdvanced(users:number) {
//     return <T extends { new(...args: any[]): {} }>(constructor: T) => {
//         return class extends constructor {
//             users = users
//         }
//     }
// }
//
// function setCreatedAtAdvanced(date:Date) {
//     return <T extends { new(...args: any[]): {} }>(constructor: T) => {
//         return class extends constructor {
//             createdAt = date
//         }
//     }
// }
//
// type CreatedAt = {
//     createdAt:Date
// }
//
// console.log((new UserService() as unknown as IUserService & CreatedAt).createdAt)

// interface IUserService {
//     users: number;
//     a: string;
//     getUsersFromDb(a:string): number
// }
//
// class UserService implements IUserService {
//     public users: number
//     public a: string
//
//     constructor(users: number = 1000, a:string='') {
//         this.users = users
//         this.a = a
//     }
//
//     @Catch(false)
//     getUsersFromDb(a:string | undefined=undefined): number {
//         if(a) this.a = a
//         throw new Error('CUSTOM ERROR')
//     }
// }
// function Catch(rethrow=false) {
//     return (
//         target: Object,
//         _: string | symbol,  // propertyKey
//         descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
//     ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
//         const method = descriptor.value;
//         descriptor.value = async (...args:any[]) => {
//            try {
//                const res = await method?.apply(target, args)
//                return res
//            }catch (e) {
//                if(e instanceof Error){
//                    console.log(e.message)
//                if(rethrow){
//                    throw  e
//                }
//                }
//            }
//         }
//     }
// }
// console.log(new UserService().getUsersFromDb())


// Декоратор свойств

// interface IUserService {
//     users: number;
//
//     getUsersFromDb(): number
// }
//
// class UserService implements IUserService {
//     @Max(100)
//     public users: number
//
//     constructor(users: number = 1000) {
//         this.users = users
//     }
//
//     getUsersFromDb(): number {
//         throw new Error('CUSTOM ERROR')
//     }
// }
//
// function Max(max: number) {
//     return (
//         target: Object,
//         propertyKey: string | symbol,  // propertyKey
//     ) => {
//         let value: number;
//         const setter = function (newValue: number) {
//             if (newValue > max) {
//                 console.log(`cannot set value > ${max}`)
//             } else {
//                 value = newValue
//             }
//         }
//         const getter = function () {
//             return value
//         }
//
//         Object.defineProperty(target, propertyKey, {
//             set: setter,
//             get: getter
//         })
//     }
// }
//
// const userService = new UserService();
// userService.users = 1;
// console.log(userService.users)
// userService.users = 1000;
// console.log(userService.users)

// Accessor

// interface IUserService {
//     users: number;
//
//     getUsersFromDb(): number
// }
//
// class UserService implements IUserService {
//     private _users: number
//
//
//     set users(num:number){
//         this._users = num
//     }
//
//     @Log()
//     get users() {
//         return this._users
//     }
//
//     constructor(users: number = 1000) {
//         this._users = users
//     }
//
//     getUsersFromDb(): number {
//         throw new Error('CUSTOM ERROR')
//     }
// }
//
// function Log() {
//     return (
//         target: Object,
//         _: string | symbol,  // propertyKey
//         descriptor:PropertyDescriptor
//     ) => {
//         const set = descriptor.set;
//         descriptor.set= (...args:any) => {
//             console.log(args)
//             set?.apply(target,args)
//         }
//     }
// }
//
// const userService = new UserService();
// userService.users = 1;
// console.log(userService.users)

// Декоратор параметра  and metadata

interface IUserService {
    getUsersFromDb(): number
}

class UserService implements IUserService {
    private _users: number
    constructor(users: number = 1000) {
        this._users = users
    }

    getUsersFromDb(): number {
        return this._users
    }

    setUsersInDb(@Positive() num:number): void {
        this._users = num
    }
}

function Positive() {
    return (
        target: Object,
        propertyKey: string | symbol,  // propertyKey
        parameterIndex:number
    ) => {
        console.log(target)
        console.log(propertyKey)
        console.log(parameterIndex)
    }
}

const userService = new UserService();























