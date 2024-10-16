import fs from "fs";
import path from "path";

export const fileUpload=(file)=>{
    console.log(file)
    const targetfolder = "uploads/images";
    if(!fs.existsSync(targetfolder)){
        fs.makedirsSync(targetfolder);
    }

    const filename = `${Date.now()}${file.orginalname}`;
    const filepath = path.join(targetfolder,filename);
    console.log(filepath)

    fs.writeFileSync(filepath, file.buffer, (err) => {
        if(err){
            console.log(err)
        }
        return filepath;
    })
}