"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
class UserService {
    constructor(users = 1000) {
        this._users = users;
    }
    getUsersFromDb() {
        return this._users;
    }
    setUsersInDb(num) {
        this._users = num;
    }
}
__decorate([
    __param(0, Positive()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserService.prototype, "setUsersInDb", null);
function Positive() {
    return (target, propertyKey, // propertyKey
    parameterIndex) => {
        console.log(target);
        console.log(propertyKey);
        console.log(parameterIndex);
    };
}
const userService = new UserService();
