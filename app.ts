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

// import 'reflect-metadata'
//
// const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY')
//
// interface IUserService {
//     getUsersFromDb(): number
// }
//
// class UserService implements IUserService {
//     private _users: number
//     constructor(users: number = 1000) {
//         this._users = users
//     }
//
//     getUsersFromDb(): number {
//         return this._users
//     }
//
//     @Validate()
//     setUsersInDb(@Positive() num:number): void {
//         this._users = num
//     }
// }
// function Positive() {
//     return (
//         target: Object,
//         propertyKey: string | symbol,  // propertyKey
//         parameterIndex:number
//     ) => {
//         console.log(Reflect.getOwnMetadata('design:type', target,propertyKey))
//         console.log(Reflect.getOwnMetadata('design:paramtypes', target,propertyKey))
//         console.log(Reflect.getOwnMetadata('design:returntype', target,propertyKey))
//         console.log('_________________')
//         console.log(target)
//         console.log(propertyKey)
//         console.log(parameterIndex)
//         let existParams:number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target,propertyKey) || []
//         existParams.push(parameterIndex)
//         Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, propertyKey)
//     }
// }
// function Validate(){
//     return (
//         target: Object,
//         propertyKey: string | symbol,  // propertyKey
//         descriptor:TypedPropertyDescriptor<(...args: any[]) => any>
//     ) => {
//         let method = descriptor.value;
//         descriptor.value = function (...args:any) {
//             let positiveParams:number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target,propertyKey);
//             if(positiveParams) {
//                 for(let index of positiveParams) {
//                     if(args[index] < 0 ) {
//                         throw  new Error(' Number must be more than 0')
//                     }
//                 }
//             }
//             return method?.apply(this, args)
//         }
//     }
// }
// const userService = new UserService();
// userService.setUsersInDb(10)
// userService.setUsersInDb(-1)
// console.log(userService)


// function Uni(name:string): any {
//     console.log('initial' + ' ' + name)
//     return function (){
//         console.log('call' + ' ' + name)
//     }
// }
//
// @Uni('class')
// class MyClass {
//     @Uni('prop')
//     props?: any
//
//     @Uni('static prop')
//     static prop2?:any
//
//     @Uni('static method')
//     static method2(@Uni('static method param')_:any) {
//     }
//
//     @Uni('method')
//     method(@Uni('method param')_:any) {
//     }
//
//     constructor(@Uni('constructor param') _:any) {
//     }
//
//
// }

// import {toJson} from 'really-relaxed-json'
// const rjson = '[ one two three {foo:bar} ]'
// const json = toJson(rjson)
// // json value is ["one", "two", "three", {"foo": "bar"}]
//
// console.log(json)


// interface IInsurance {
//     id:number
//     status:string
//     setVehicle(vehicle:any):void
//     submit(): Promise<boolean>
// }
//
// class TFInsurance implements  IInsurance {
//     id: number;
//     status: string;
//     private vehicle:any;
//
//     setVehicle(vehicle: any): void {
//         this.vehicle = vehicle
//     }
//
//     async submit(): Promise<boolean> {
//         const res =  await fetch('I',
//             {
//                 method: 'POST',
//                 body: JSON.stringify({vehicle:this.vehicle})
//             }
//             )
//         const data = await res.json()
//         return data.isSuccess
//     }
//
// }
//
//
// class ABInsurance implements  IInsurance {
//     id: number;
//     status: string;
//     private vehicle:any;
//
//     setVehicle(vehicle: any): void {
//         this.vehicle = vehicle
//     }
//
//     async submit(): Promise<boolean> {
//         const res =  await fetch('ab',
//             {
//                 method: 'POST',
//                 body: JSON.stringify({vehicle:this.vehicle})
//             }
//         )
//         const data = await res.json()
//         return data.yes
//     }
//
// }
//
// abstract class InsuranceFactory {
//     db:any
//     abstract createInsurance(): IInsurance
//
//     saveHistory(ins:IInsurance) {
//         this.db.save(ins.id, ins.status)
//     }
// }
//
//
// class TFInsuranceFactory extends InsuranceFactory {
//     override createInsurance(): TFInsurance {
//         return new TFInsurance()
//     }
// }
//
// class ABInsuranceFactory extends InsuranceFactory {
//     override createInsurance(): ABInsurance {
//         return new ABInsurance()
//     }
// }
//
// const tfInsuranceFactory = new TFInsuranceFactory();
// const ins = tfInsuranceFactory.createInsurance()
// tfInsuranceFactory.saveHistory(ins)
//
//
// const INSURANCE_TYPE = {
//     tf: TFInsurance,
//     ab:ABInsurance
// }
//
// type IT = typeof INSURANCE_TYPE
//
// class InsuranceFactoryAlt {
//     db:any
//     createInsurance<T extends keyof IT>(type:T): IT[T]{
// return INSURANCE_TYPE[type]
//     }
//
//     saveHistory(ins:IInsurance) {
//         this.db.save(ins.id, ins.status)
//     }
// }
//
// const insuranceFactoryAlt = new InsuranceFactoryAlt();
// const ins2 = new (insuranceFactoryAlt.createInsurance('tf'))
// insuranceFactoryAlt.saveHistory(ins2)

// class MyMap {
//
//     private static instance: MyMap;
//     map:Map<number, string> = new Map();
//
//     private constructor() {
//
//     }
//
//     clean() {
//         this.map = new Map()
//     }
//
//     public static get(): MyMap {
//         if(!MyMap.instance){
//             MyMap.instance = new MyMap()
//         }
//         return MyMap.instance
//     }
// }
//
// class Service1 {
//     addMap(key:number, value:string) {
//         const myMap = MyMap.get()
//         myMap.map.set(key,value)
//     }
// }
//
// class Service2 {
//     getKeys(key:number) {
//         const myMap = MyMap.get()
//        const keys =  myMap.map.get(key)
//         console.log('keys')
//         console.log(keys)
//         myMap.clean()
//         const keys2 =  myMap.map.get(key)
//         console.log('keys2')
//         console.log(keys2)
//     }
// }
//
//
// new Service1().addMap(1, 'work');
// new Service2().getKeys(1)
// interface Prototype<T> {
//     clone():T
// }
// class UserHistory implements Prototype<UserHistory> {
//     createdAt:Date;
//     constructor(public email:string, public name:string) {
//         this.createdAt = new Date()
//     }
//     clone(): UserHistory {
//         let target = new UserHistory(this.email,this.name);
//         target.createdAt = this.createdAt
//         return target
//     }
// }
// let user = new UserHistory('aa', 'bb')
// console.log(user)
// const user2 = user.clone();
// console.log(user2)

// enum ImgFormats {
//     Png = 'png',
//     Jpeg = 'jpeg'
// }
//
// interface IResolution {
//     width:number
//     height:number
// }
//
// interface IImageConversion extends IResolution{
// format:ImgFormats
// }
//
// class ImageBuilder {
//     private formats: ImgFormats[]=[];
//     private resolutions: IResolution[]=[];
//
//     addPng():ImageBuilder {
//         if(this.formats.includes(ImgFormats.Png)){
//             return this
//         }
//         this.formats.push(ImgFormats.Png)
//         return this
//     }
//
//     addJpeg():ImageBuilder {
//         if(this.formats.includes(ImgFormats.Jpeg)){
//             return this
//         }
//         this.formats.push(ImgFormats.Jpeg)
//         return this
//     }
//
//     addResolution(width:number,height:number):ImageBuilder {
//         this.resolutions.push({width,height})
//         return this
//     }
//
//     build(): IImageConversion[] {
//         const res: IImageConversion[] = [];
//         for(const r of this.resolutions) {
//             for(const f  of this.formats) {
//                 res.push({
//                     format: f,
//                     width: r.width,
//                     height: r.height
//                 })
//             }
//         }
//         return res
//
//     }
// }
// console.log(
//     new ImageBuilder()
//         .addJpeg()
//         .addPng()
//         .addResolution(100,50)
//         .addResolution(200,100)
//         .addJpeg()
//         .build()
// )

// interface IProvider {
//     sendMessage(message: string): void
//
//     connect(config: unknown): void
//
//     disconnect(): void
// }
//
// class TelegramProvider implements IProvider {
//     sendMessage(message: string) {
//         console.log('message')
//     }
//
//     connect(config: string) {
//         console.log(config)
//     }
//
//     disconnect() {
//         console.log('disconnect telegram')
//     }
// }
//
// class WhatsUpProvider implements IProvider {
//     sendMessage(message: string) {
//         console.log('message')
//     }
//
//     connect(config: string) {
//         console.log(config)
//     }
//
//     disconnect() {
//         console.log('disconnect whats up')
//     }
// }
//
// class NotificationSender {
//     constructor(private provider: IProvider) {
//     }
//
//     send() {
//         this.provider.connect('conn')
//         this.provider.sendMessage('msg')
//         this.provider.disconnect()
//     }
// }
//
// class delayNotificationSender extends NotificationSender {
//     constructor(provider: IProvider) {
//         super(provider)
//     }
//
//     sendDelayed() {
//
//     }
// }
//
// const telegramSender = new NotificationSender(new TelegramProvider())
// telegramSender.send()
//
// const whatsUpSender = new NotificationSender(new WhatsUpProvider())
// whatsUpSender.send()
// class Notify {
//     send(template: string, to: string) {
//         console.log('Sendind' + template + ':' + to)
//     }
// }
// class Log {
//     log(msg: string) {
//         console.log('log' + msg)
//     }
// }
// class Template {
//     private template = [
//         {name: 'other', template: '<h1> Template! </h1>'}
//     ]
//
//     getByName(name: string) {
//         return this.template.find((t) => t.name === name)
//     }
// }
// class NotificationFacade {
//     private notify: Notify
//     private logger: Log
//     private template: Template
//
//     constructor() {
//         this.notify = new Notify()
//         this.logger = new Log()
//         this.template = new Template()
//     }
//
//     send(to: string, templateName: string) {
//         const data = this.template.getByName(templateName)
//         if (!data) {
//             this.logger.log('No template found')
//             return
//         }
//         this.notify.send(data.template, to)
//         this.logger.log('Template was sent')
//     }
// }
// const s = new NotificationFacade()
// s.send('aaaaa', 'other')

// adapter
// class KVDatabase {
//     private db: Map<string,string> = new Map();
//     save(key:string, value:string) {
//         console.log('123123')
//         this.db.set(key,value)
//     }
// }
//
// class PersistentDb {
//     savePersistent(data: Object) {
//         console.log('data')
//         console.log(data)
//     }
// }
//
// class PersistentAdapter extends KVDatabase {
//     constructor(private database: PersistentDb) {
//         super();
//     }
//     override save(key:string,value:string):void {
//         this.database.savePersistent({key,value})
//     }
// }
//
// function run(base:KVDatabase) {
//     base.save('key', 'value')
// }
// run(new PersistentAdapter(new PersistentDb))
// run(new KVDatabase)

// Proxy
// interface IPaymentAPI {
//     getPaymentDetail(id:number): IPaymentDetail | undefined
// }
//
// interface IPaymentDetail {
//     id:number;
//     sum:number;
// }
//
// class PaymentAPI implements IPaymentAPI {
//     private data = [{id:1, sum:10000}]
//     getPaymentDetail(id: number): IPaymentDetail | undefined {
//     return  this.data.find(d => d.id === id)
//     }
// }
//
//
// class PaymentAccessProxy implements IPaymentAPI{
//     constructor(private api:PaymentAPI, private userId:number) {
//     }
//     getPaymentDetail(id: number): IPaymentDetail | undefined {
//         if(this.userId === 1) {
//             return this.api.getPaymentDetail(id)
//         }
//         console.log('Wrong access')
//         return  undefined
//     }
// }
//
// const proxy = new PaymentAccessProxy(new PaymentAPI(), 1)
// console.log(proxy.getPaymentDetail(1))
//
// const proxy2 = new PaymentAccessProxy(new PaymentAPI(), 2)
// console.log(proxy2.getPaymentDetail(1))

// Composite

// abstract class DeliveryItem {
//     items:DeliveryItem[]=[]
//
//     addItem(item:DeliveryItem) {
//         this.items.push(item)
//     }
//     getItemPrices():number {
//         console.log(this.items)
//         return this.items.reduce((acc:number,item:DeliveryItem)=> acc += item.getPrice(),0)
//
//     }
//
//     abstract getPrice():number
//
// }
//
// class DeliveryShop extends DeliveryItem {
//     constructor(private deliveryFee:number) {
//         super();
//     }
//
//     override getPrice(): number {
//         return this.getItemPrices() + this.deliveryFee
//     }
// }
//
// class Package extends DeliveryItem {
//     override getPrice(): number {
//         return this.getItemPrices()
//     }
// }
//
// class Product extends DeliveryItem {
//     constructor(private price:number) {
//         super();
//     }
//
//     override getPrice(): number {
//         return this.price
//     }
// }
//
// const shop = new DeliveryShop(100)
//
// shop.addItem(new Product(1000))
// const pack1 = new Package()
// pack1.addItem(new Product(200))
// pack1.addItem(new Product(300))
// shop.addItem(pack1)
// const pack2 = new Package()
// pack2.addItem(new Product(30))
// shop.addItem(pack2)
// console.log(shop.getPrice())

// chain of command
// interface IMiddleware {
//     next(mid:IMiddleware) : IMiddleware
//     handle(req:any):any
// }
//
// abstract class AbstractMiddleware implements IMiddleware{
//     private nextMiddleware:IMiddleware
//     next(mid: IMiddleware): IMiddleware {
//         this.nextMiddleware = mid;
//         return mid
//     }
//     handle(req: any): any {
//         if(this.nextMiddleware) {
//             return this.nextMiddleware.handle(req)
//         }
//         return;
//     }
// }
//
// class AuthMiddleware extends AbstractMiddleware {
//     override handle(req: any): any {
//         console.log('AuthMiddleware')
//         if(req.userId === 1) {
//             return super.handle(req)
//         }
//         return {error:'not authorized'}
//     }
// }
//
// class ValidateMiddleware extends AbstractMiddleware {
//     override handle(req: any): any {
//         console.log('ValidateMiddleware')
//         if(req.body) {
//             return super.handle(req)
//         }
//         return {error:'no body'}
//     }
// }
//
// class Controller extends AbstractMiddleware {
//     override handle(req: any): any {
//         console.log('Controller')
//         return {data:req}
//     }
// }
//
// const controller = new Controller()
// const validate = new ValidateMiddleware()
// const auth = new AuthMiddleware()
//
// auth.next(validate).next(controller);
//
// console.log(auth.handle({
//     userId:1,
//     body:{}
// }))

//Mediator
// interface Mediator {
//     notify(sender:string, event:string):void
// }
//
// abstract class Mediated {
//     mediator:Mediator
//     setMediator(mediator:Mediator){
//         this.mediator = mediator
//     }
// }
//
// class Notifications {
//      send(){
//          console.log('Sending notification')
//      }
// }
//
//
// class Log {
//     log(msg:string) {
//         console.log('msg ' + msg)
//     }
// }
//
// class EventHandler  extends Mediated{
//     myEvent() {
// this.mediator.notify('EventHandler', 'myEvent')
//     }
// }
//
// class NotificationMediator implements Mediator {
//     constructor(public notifications: Notifications, public  logger:Log, public handler: EventHandler ) {
//     }
//     notify(sender: string, event: string) {
//         switch (event) {
//             case 'myEvent':
//                 this.notifications.send()
//                 this.logger.log('Sended')
//                 break;
//         }
//     }
// }
//
// const handler = new EventHandler()
// const logger = new Log()
// const notifications = new Notifications()
//
// const m = new NotificationMediator(notifications,logger,handler)
// handler.setMediator(m)
// handler.myEvent()

// Command

// class User {
//     constructor(public userId:number) {
//     }
// }
//
// class CommandHistory {
//    public commands: Command[]=[]
//     push(command:Command){
//        this.commands.push(command)
//     }
//     remove(command:Command){
//        this.commands= this.commands.filter(c => c.commandId !== command.commandId)
//     }
// }
//
// abstract class Command {
//     public commandId: number;
//     abstract execute():void
//     constructor(public history:CommandHistory) {
//         this.commandId = Math.random()
//     }
// }
//
// class AddUserCommand extends Command {
//     constructor(private user:User,private receiver: UserService, history:CommandHistory) {
//         super(history);
//     }
//
//     execute() {
//         this.receiver.saveUser(this.user)
//         this.history.push(this)
//     }
//
//     undo() {
//         this.receiver.deleteUser(this.user.userId)
//         this.history.remove(this)
//     }
// }
//
// class UserService {
//     saveUser(user:User){
//         console.log('Saving user with id: ' + user.userId  )
//     }
//
//     deleteUser(userId:number) {
//         console.log('Delete user with id ' + userId)
//     }
// }
//
// class Controller {
//     receiver:UserService
//     history:CommandHistory = new CommandHistory()
//     addReceiver(receiver:UserService) {
//         this.receiver = receiver
//     }
//     run() {
//         const addUserCommand = new AddUserCommand(new User(1), this.receiver,this.history)
//         addUserCommand.execute()
//         console.log(addUserCommand.history)
//         addUserCommand.undo();
//         console.log(addUserCommand.history)
//     }
// }
//
// const controller = new Controller()
// controller.addReceiver(new UserService())
// controller.run()

// State

// class DocumentItem {
//     public text:string
//     private state: DocumentItemState;
//
//     constructor() {
//         this.setState(new DraftDocumentItemState())
//     }
//     getState() {
//         return this.state
//     }
//
//     setState(state:DocumentItemState) {
//         this.state = state
//         this.state.setContext(this)
//     }
//     publishDoc(){
//         this.state.publish()
//     }
//     deleteDoc() {
//         this.state.delete()
//     }
// }
//
// abstract class DocumentItemState {
//     public name:string;
//     public item: DocumentItem
//
//     public setContext(item:DocumentItem) {
//         this.item = item
//     }
//     public abstract publish(): void
//     public abstract delete(): void
// }
//
// class DraftDocumentItemState extends DocumentItemState{
//     constructor() {
//         super()
//         this.name = 'DraftDocument'
//     }
//
//     public publish() {
//         console.log('Text sent to site with: ' + this.item.text)
//         this.item.setState(new PublishDocumentItemState())
//     }
//     public delete() {
//         console.log('Document is deleted')
//     }
// }
//
// class PublishDocumentItemState extends DocumentItemState{
//     constructor() {
//         super()
//         this.name = 'PublishDocument'
//     }
//
//     public publish() {
//         console.log('Cannot publish published document')
//     }
//     public delete() {
//         console.log('Removed from published')
//         this.item.setState(new  DraftDocumentItemState())
//     }
// }
//
// const item = new DocumentItem()
// item.text = 'my post'
// console.log(item.getState())
// item.publishDoc()
// console.log(item.getState())
// item.publishDoc()
// item.deleteDoc()
// console.log(item.getState())


//  Strategy
// class User {
//     githubToken:string
//     jwtToken:string
// }
//
// interface AuthStrategy {
//     auth(user:User):boolean
// }
//
// class Auth {
//     constructor(private strategy:AuthStrategy) {
//     }
//     setStrategy(strategy:AuthStrategy) {
//         this.strategy =strategy
//     }
//     public authUser(user:User):boolean {
//         return this.strategy.auth(user)
//     }
// }
//
// class JWTStrategy implements AuthStrategy {
//     auth(user: User): boolean {
//         return !!user.jwtToken;
//
//     }
// }
//
// class GithubStrategy implements AuthStrategy {
//     auth(user: User): boolean {
//         return !!user.githubToken;
//
//     }
// }
//
// const user = new User();
// user.jwtToken = 'token'
// const auth = new Auth(new JWTStrategy())
// console.log(auth.authUser(user))
// auth.setStrategy(new GithubStrategy())
// console.log(auth.authUser(user))

// Iterator

// class Task {
//     constructor(public priority:number) {
//     }
// }
//
// class TaskList {
//     private tasks:Task[]=[]
//
//     public sortByPriority() {
//         this.tasks = this.tasks.sort((a,b) => {
//             if(a.priority > b.priority) {
//                 return 1
//             }else if(a.priority == b.priority) {
//                 return 0
//             }
//             return -1
//         })
//     }
//
//     addTask(task:Task) {
//         this.tasks.push(task)
//     }
//
//     getTask() {
//         return this.tasks
//     }
//
//     count() {
//         return this.tasks.length
//     }
//
//     public getIterator() {
//         return new PriorityTaskIterator(this)
//     }
// }
//
// interface IIterator<T> {
//     current():T | undefined
//     next():T | undefined
//     prev():T | undefined
//     index():number
// }
//
// class PriorityTaskIterator implements IIterator<Task> {
//     private position:number = 0
//     private taskList: TaskList;
//     constructor(taskList:TaskList) {
//         taskList.sortByPriority()
//         this.taskList = taskList
//     }
//     current(): Task | undefined {
//         return this.taskList.getTask()[this.position]
//     }
// next(): Task | undefined {
//         this.position += 1
//     return this.taskList.getTask()[this.position]
//
// }
// prev(): Task | undefined {
//         this.position -=1
//     return this.taskList.getTask()[this.position]
//
// }
// index(): number {
//         return  this.position
// }
// }
//
// const taskList = new TaskList()
// taskList.count()
// taskList.addTask(new Task(8))
// taskList.addTask(new Task(1))
// taskList.addTask(new Task(3))
// const iterator = taskList.getIterator();
// console.log(iterator.current())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.prev())
// console.log(iterator.index())
// console.log(iterator.prev())
// console.log(iterator.prev())
// console.log(iterator.prev())
// console.log(iterator.index())

//template

// class Form {
//     constructor(public name:string) {
//     }
// }
//
// abstract class SaveForm<T> {
//
//     public save(form:Form){
//         const res = this.fill(form);
//         this.log(res)
//         this.send(res)
//     }
//
//     protected abstract fill(form:Form):T
//
//     protected log(data:T):void {
//         console.log('log: ' + data)
//     }
//     protected abstract send(data:T):void
//
// }
//
// class FirstAPI extends SaveForm<string> {
//     protected fill(form: Form): string {
//         return form.name;
//     }
//
//     protected send(data: string) {
//         console.log('Sending' + data)
//     }
// }
//
// class SecondAPI extends SaveForm<{fio:string}> {
//     protected fill(form: Form): {fio:string} {
//         return {fio: form.name};
//     }
//
//     protected send(data: {fio:string}) {
//         console.log('Sending' + data)
//     }
// }
//
// const firstForm = new  FirstAPI();
// firstForm.save(new Form('Vas'))
//
// const secondForm = new  SecondAPI();
// secondForm.save(new Form('Pet'))

// Observer

// interface Observer {
//     update(subject: Subject): void
// }
//
// interface Subject {
//     attach(observer: Observer): void
//
//     detach(observer: Observer): void
//
//     notify(): void
// }
//
// class Lead {
//     constructor(public name: string, public phone: string) {
//     }
// }
//
// class NewLead implements Subject {
//     private ovservers: Observer[] = [];
//     public state: Lead;
//
//     attach(observer: Observer) {
//         if (this.ovservers.includes(observer)) {
//             return
//         }
//         this.ovservers.push(observer)
//     }
//
//     detach(observer: Observer) {
//         const observerIndex = this.ovservers.indexOf(observer);
//         if (observerIndex == -1) {
//             return
//         }
//         this.ovservers.splice(observerIndex, 1)
//     }
//
//     notify() {
//         for (const observer of this.ovservers) {
//             observer.update(this)
//         }
//     }
// }
//
// class NotificationService implements Observer {
//     update(subject: Subject) {
//         console.log('NotificationService received notification')
//         console.log(subject)
//     }
// }
//
// class LeadService implements Observer {
//     update(subject: Subject) {
//         console.log('LeadService received notification')
//         console.log(subject)
//     }
// }
//
// const subject = new NewLead()
// subject.state = new Lead('Ant', '43434')
// const s1 = new NotificationService()
// const s2 = new LeadService()
//
// subject.attach(s1)
// subject.attach(s2)
// subject.notify()
// subject.detach(s1)
// subject.notify()
