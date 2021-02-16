import { FILE } from "dns";
import { fs, writeFile } from "fs";

fs.createReadStream('./assets/salsicha.jpg')
.pipe(fs.createWriteStreeam('./assets/salsicha2.jpg'))
.on('finish', () => {
    
})