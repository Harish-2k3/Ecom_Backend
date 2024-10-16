import fs from "fs";
import path from "path";

export const fileUpload=(file)=>{
    console.log(file)
    const targetfolder = "uploads";
    if(!fs.existsSync(targetfolder)){
        fs.makedirsSync(targetfolder);
    }

    const filename = `${Date.now()}${file.originalname}`;
    const filepath = path.join(targetfolder,filename);
    console.log(filepath)

    fs.writeFileSync(filepath, file.buffer)
    return filepath;
}