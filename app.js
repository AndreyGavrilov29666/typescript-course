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
class Lead {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}
class NewLead {
    constructor() {
        this.ovservers = [];
    }
    attach(observer) {
        if (this.ovservers.includes(observer)) {
            return;
        }
        this.ovservers.push(observer);
    }
    detach(observer) {
        const observerIndex = this.ovservers.indexOf(observer);
        if (observerIndex == -1) {
            return;
        }
        this.ovservers.splice(observerIndex, 1);
    }
    notify() {
        for (const observer of this.ovservers) {
            observer.update(this);
        }
    }
}
class NotificationService {
    update(subject) {
        console.log('NotificationService received notification');
        console.log(subject);
    }
}
class LeadService {
    update(subject) {
        console.log('LeadService received notification');
        console.log(subject);
    }
}
const subject = new NewLead();
subject.state = new Lead('Ant', '43434');
const s1 = new NotificationService();
const s2 = new LeadService();
subject.attach(s1);
subject.attach(s2);
subject.notify();
subject.detach(s1);
subject.notify();
