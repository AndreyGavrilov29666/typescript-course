import {dirname, join, isAbsolute} from  'path'
import {promises} from "fs";

export class FileService {
    private async isExist(path:string):Promise<boolean> {
        try {
            await promises.stat(path)
            return true
        } catch (e) {
            return false
        }
    }
    public getFilePath(path:string, name:string, ext:string):string {
        if(!isAbsolute(path)) {
            path = join(__dirname + '/' + path)
        }
        return join(dirname(path) + '/' + name + '.' + ext)
    }

    async deleteFileIfExists(path:string) {
        if(await  this.isExist(path)) {
            promises.unlink(path)
        }
    }
}